const getIsAutheticated = state => Boolean(state.auth.token);
const getUserName = state => state.auth.user.name;

export { getIsAutheticated, getUserName };
