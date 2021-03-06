import API from "../API";

export const postComment = (comment) => {
  return (dispatch) => {
    dispatch({ type: "POSTING_COMMENT" });

    if (comment) {
      fetch(`${API}/api/v1/comments`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ comment: comment }),
      })
        .then((resp) => resp.json())
        .then((newComment) => {
          window.location.href.includes("dashboard")
            ? dispatch({ type: "NEW_COMMENT", newComment })
            : dispatch({ type: "INDEX_COMMENT", newComment });
        });
    }
  };
};

export const selfPostComment = (comment) => {
  return (dispatch) => {
    dispatch({ type: "POSTING_COMMENT" });

    if (comment) {
      fetch(`${API}/api/v1/comments`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ comment: comment }),
      })
        .then((resp) => resp.json())
        .then((newComment) => {
          dispatch({ type: "NEW_SELF_COMMENT", newComment });
        });
    }
  };
};
