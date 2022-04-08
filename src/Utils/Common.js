export const getUser = () => {
  const userStr = sessionStorage.getItem("uid");
  if (userStr) return JSON.parse(userStr);
  else return null;
};
export const getToken = () => {
  return sessionStorage.getItem("access_token") || null;
};
export const getName = () => {
  return sessionStorage.getItem("name") || null;
};
export const setUserSession = (token, user, name) => {
  sessionStorage.setItem("access_token", token);
  sessionStorage.setItem("uid", JSON.stringify(user));
  sessionStorage.setItem("name", name);
};
export const removeUserSession = () => {
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("uid");
  sessionStorage.removeItem("name");
};
