import React, {Component} from 'react'
import ContactList from '../../components/ContactList';
import s from '../../components/ContactList/ContactList.module.css';
import ContactForm from '../../components/ContactForm';
import {CSSTransition} from "react-transition-group";
import Filter from '../../components/Filter ';
import StyleFilter from '../../components/Filter /Filter.module.css';
import { connect } from "react-redux";
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
// import b from './ContactsView.module.css';

class ContactsView extends Component {

  static defaultProps = {
    //   
  }
  static propTypes = {
   //
  }
  state = {
    error: false,
    message:'',
  };

  componentDidMount(){
    this.props.fetchContacts();
  };

   handleSubmit = () => {
         this.setState({error:true})
    };
  resetError=()=>{
    this.setState({error:false})
  };
  
  render() {
    const { message} = this.state;
    const { contacts } = this.props;
    return (
          <>
          <ContactForm onSubmitContact={()=>{this.handleSubmit(message)}} onResetError={()=>{this.resetError()}}/>
          <form><h2 classNames={s.Title}>Contacts</h2>
          <CSSTransition classNames={StyleFilter} in={contacts >1}
            timeout={250} unmountOnExit > 
          <Filter /> 
          </CSSTransition>
          </form>
        {this.props.isloadingContacts && <p>Загружаем...</p>}
          <ContactList /> 
          </>  
    ) 
  }
}
const mapStateToProps = (state) => ({
  contacts:contactsSelectors.getTotalContactCount(state) ,
  isloadingContacts:contactsSelectors.getLoadingContact(state),
 
});
const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps) (ContactsView);
