export const suggestedBandsEvents = () => {

  return (dispatch) => {
    dispatch({type:"FETCHING_SUGGESTED"})
    
      const token = localStorage.getItem("token")

        fetch(`https://staged-app.herokuapp.com/api/v1/suggested_events`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(resp => resp.json())
        .then( suggestedEvents => {
    
          dispatch({ type: "SUGGESTED_EVENTS", suggestedEvents})
        })
    }
}

export const followedBandsEvents = () => {

  return (dispatch) => {
    dispatch({type:"FETCHING_FOLLOWED"})
    
      const token = localStorage.getItem("token")

        fetch(`https://staged-app.herokuapp.com/api/v1/followed_events`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(resp => resp.json())
        .then( followedEvents => {
    
          dispatch({ type: "FOLLOWED_EVENTS", followedEvents})
        })
    }
}

export const dateEvents = (date) => {
    
  return (dispatch) => {
    dispatch({type:"FETCHING_DATE_EVENTS"})

    const token = localStorage.getItem("token")
      fetch(`https://staged-app.herokuapp.com/api/v1/date_events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({date})
      })
      .then(resp => resp.json())
      .then( dateEvents => {     
          dispatch ({ type: "DATE_EVENTS", dateEvents})
      })
    }
}

export const newEvent = (event) => {
    return dispatch => {
      const token = localStorage.getItem("token")

        dispatch ({type: "POSTING_EVENT"})

            const data = new FormData()
            Object.keys(event).forEach((key, value) => {
                data.append(key, event[key])
            })

            fetch(`https://staged-app.herokuapp.com/api/v1/events`, {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${token}`
                },
                body: data
            })
            .then(resp => resp.json())
            .then( newEvent => {
                dispatch({ type: "NEW_EVENT", newEvent})
            })
    }
}

export const editEvent = (event) => {
    return dispatch => {

      const token = localStorage.getItem("token")

      dispatch ({type: "POSTING_EVENT"})
          const data = new FormData()
          Object.keys(event).forEach((key, value) => {
              data.append(key, event[key])
          })

          fetch(`https://staged-app.herokuapp.com/api/v1/events/${event.id}`, {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${token}`
                },
              body: data
          })
          .then(resp => resp.json())
          .then( editedEvent => {
              dispatch({ type: "EDIT_EVENT", editedEvent})
          })
      }
}

export const popEditedEvent = (event) => {
    return dispatch => {
        dispatch({ type: "POP_EDITED_EVENT", event })
    }
}

export const clearEdited = () => {
    return dispatch => {
        dispatch({ type: "CLEAR_EDITED_EVENT" })
    }
}

export const deleteEvent = (eventId) => {
    return dispatch => {
      const token = localStorage.getItem("token")

      fetch(`https://staged-app.herokuapp.com/api/v1/events/${eventId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
        }
      })
        .then(resp => resp.json())
        .then(deletedEvent => {
            dispatch({ type: "DELETE_EVENT", eventId })
        })        
    }
}

export const fetchManagedBandEvents = (band_id) => {
    
  return (dispatch) => {
    dispatch({type:"FETCHING_MANAGED_EVENTS"})

    const token = localStorage.getItem("token")
      fetch(`https://staged-app.herokuapp.com/api/v1/managed_events`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({band_id})
      })
      .then(resp => resp.json())
      .then( managedEvents => {   
          dispatch ({ type: "MANAGED_EVENTS", managedEvents})
      })
    }
}