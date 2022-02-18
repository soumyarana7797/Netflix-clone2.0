export const setLoginData = (userObj) => {
  localStorage.setItem('access_token', userObj.token);
  localStorage.setItem('netflix_user', JSON.stringify(userObj.user));
};

export const getAccessToken = () => {
  return localStorage.getItem('access_token');
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem('netflix_user'));
};

export const setUser = (user) => {
  localStorage.setItem('netflix_user', JSON.stringify(user));
};

export const clearLoginData = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('netflix_user');
};
