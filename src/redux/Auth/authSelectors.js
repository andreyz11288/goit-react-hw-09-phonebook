const getIsAutheticated = state => state.auth.isAuthenticated;
const getUserName = state => state.auth.user.name;

export { getIsAutheticated, getUserName };
