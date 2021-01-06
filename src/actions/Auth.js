import history from "../history";
import API from "../API";

export const autoLogin = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN" });

    const token = localStorage.getItem("token");

    if (token) {
      fetch(`${API}/api/v1/auto_login`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((user) => {
          dispatch({ type: "AUTO_LOG_IN", user });
          document.title = `Welcome to Staged, ${user.username}`;
          let lastUrlSlash;
          let bandId;
          if (window.location.href.includes("/manage_band")) {
            lastUrlSlash = window.location.href.lastIndexOf("/");
            bandId = parseInt(window.location.href.slice(lastUrlSlash + 1), 10);
            let managedBand = user.bands.find((band) => band.id === bandId);
            dispatch({ type: "POP_BAND_MANAGE", band: managedBand });
          }
        });
    } else if (!window.location.href.includes("/signup")) {
      history.push("/login");
      dispatch({ type: "AUTO_LOGIN_ERROR" });
    } else {
      dispatch({ type: "SIGUP_PAGE" });
    }
  };
};

export const login = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN" });

    fetch(`${API}/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((user) => {
        if (user.errors) {
          dispatch({ type: "LOGIN_ERROR", user });
          history.push("/login");
        } else {
          dispatch({ type: "LOGGED_IN", user });
          localStorage.setItem("token", user.jwt);
          document.title = `Welcome to Staged, ${user.user.username}`;
          history.push("/dashboard");
        }
      });
  };
};

export const signup = (user) => {
  return (dispatch) => {
    dispatch({ type: "LOGIN" });

    fetch(`${API}/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((resp) => resp.json())
      .then((user) => {
        if (user.errors) {
          dispatch({ type: "LOGIN_ERROR", user });
          history.push("/signup");
        } else {
          dispatch({ type: "LOGGED_IN", user });
          localStorage.setItem("token", user.jwt);
          document.title = `Welcome to Staged, ${user.user.username}`;
          history.push("/dashboard");
        }
      });
  };
};

export const logout = () => {
  window.localStorage.removeItem("token");
  return (dispatch) => {
    dispatch({ type: "LOGOUT" });
    document.title = `Staged`;
    history.push("/login");
  };
};

export const clearLoginErrors = () => {
  return (dispatch) => {
    dispatch({ type: "CLEAR_LOGIN_ERRORS" });
  };
};
