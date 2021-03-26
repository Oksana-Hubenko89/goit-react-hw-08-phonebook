const getIsAuthenticated = state =>state.auth.isAuthenticated;
const getLoadingAuth = state => state.contacts.loadingAuth;
const getUserName = state => state.auth.user.name;

export default {
  getIsAuthenticated,
  getUserName,
  getLoadingAuth
};