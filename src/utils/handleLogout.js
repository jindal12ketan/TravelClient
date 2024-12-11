import { loginStore } from "slices/loginSlice";
import { store } from "providers/store";

export const handleLogout = async (msg = T.LOGOUT_SUCCESS) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      store.dispatch(loginStore({ token: "", user: {} }));
      resolve();
    }, 0);
  });
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = "/login";
};
