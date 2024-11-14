export const selectUsername = (state) => state.auth.user.name;
export const selectUserEmail = (state) => state.auth.user.email;
export const selectToken = (state) => state.auth.token;
export const selectLoggedin = (state) => state.auth.isLoggedIn;
export const selectRefreshing = (state) => state.auth.isRefreshing;
