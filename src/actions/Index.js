import API from "../API";

export const allMusic = (page) => {
  return (dispatch) => {
    dispatch({ type: "FETCHING_POSTS" });

    fetch(`${API}/api/v1/music/${page}`)
      .then((resp) => resp.json())
      .then((events) => {
        return dispatch({ type: "ADD_MUSIC", events });
      });
  };
};

export const allMerch = (page) => {
  return (dispatch) => {
    dispatch({ type: "FETCHING_POSTS" });

    fetch(`${API}/api/v1/merch/${page}`)
      .then((resp) => resp.json())
      .then((events) => {
        return dispatch({ type: "ADD_MERCH", events });
      });
  };
};

export const allShows = (page) => {
  return (dispatch) => {
    dispatch({ type: "FETCHING_POSTS" });

    fetch(`${API}/api/v1/shows/${page}`)
      .then((resp) => resp.json())
      .then((events) => {
        return dispatch({ type: "ADD_SHOWS", events });
      });
  };
};

export const allBands = (page) => {
  return (dispatch) => {
    dispatch({ type: "FETCHING_POSTS" });

    fetch(`${API}/api/v1/bands/${page}`)
      .then((resp) => resp.json())
      .then((bands) => {
        dispatch({ type: "ADD_BANDS", bands });
      });
  };
};
