export const postComment = (comment) => {
    return dispatch => {
        dispatch ({type: "POSTING_COMMENT"})

        if(comment){

            fetch(`http://localhost:3000/api/v1/comments`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({comment: comment})
            })
            .then(resp => resp.json())
            .then( newComment => {
                dispatch({ type: "NEW_COMMENT", newComment})
            })
        }

    }
}
