import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../Store/constant";

export const login = (email, password) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    try {
      const response = await fetch(
        "https://team-b-see-event.herokuapp.com/api/v1/sign/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
          credentials: "include",
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      console.log(response, "response from action");

      if (response.status !== 200) {
        alert("wrong username or password!");
        return;
      }

      const data = await response.json();
      const userData = {
        username: data.userInfo.username,
        email: data.userInfo.email,
        token: data,
      };

      // pass this data to the reducers in the payload of the action
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: userData,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));

      return resolve(true);
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      return reject(false);
    }
  });
};
export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: USER_LOGOUT,
  });
};
