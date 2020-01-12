import React, { userReducer } from "react";
import uuid from "uuid";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = [];
};

const [state, dispatch] = userReducer(alertReducer, initialState);

// SET ALERT
const setAlert = (msg, type) => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, type, id }
  });
};

return (
  <AuthContext.Provider
    value={{
      toke: state.token,
      isAuthenticated: state.isAuthenticated,
      loading: state.loading,
      user: state.user,
      error: state.error
    }}
  >
    {props.children}
  </AuthContext.Provider>
);

export default AuthState;
