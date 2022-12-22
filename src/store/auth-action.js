import axios from "../extra/axios";
import { authActions } from "./auth.slice";
export const Login = (form, type) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${type === "register" ? `auth/register` : "auth/login"}`,
        form
      );
      console.log(data);
      dispatch(authActions.login());
    } catch (error) {
      console.log(error);
      dispatch(authActions.logout());
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("auth/logout");
      dispatch(authActions.logout());
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(authActions.logout());
    }
  };
};
