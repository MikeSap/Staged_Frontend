// import history from '../history'

export const suggestedBandsEvents = (bandIds, userBands) => {

    return (dispatch) => {
        dispatch({type:"FETCHING_POSTS"})
        
        if (bandIds !== []){
            fetch(`http://localhost:3000/api/v1/bands`)
            .then(resp => resp.json())
            .then( allBands => {
                // add not followed band, and one random event from each band that is not followed or a band user is in
                let notFol = allBands.filter((band) => !bandIds.includes(band.id) && !userBands.includes(band.id))
                let suggestedEvents = notFol.map(band => band.events[Math.floor(Math.random()*band.events.length)])
                suggestedEvents = suggestedEvents.filter(e => e !== undefined)

                dispatch({ type: "SUGGESTED_BANDS", suggestedBands: notFol, suggestedEvents})
            })
        } 
    
    }
}

export const dateEvents = (date) => {
    
    return (dispatch) => {
        dispatch({type:"FETCHING_POSTS"})

        if(date){
        // Pull down posts index
            fetch(`http://localhost:3000/api/v1/events`)
            .then(resp => resp.json())
            .then( allEvents => {
            // filter posts that match date
            // add to dateEvents store
                let dateEvents = allEvents.filter( e => new Date(e.date).toDateString() === date.toDateString())
                dispatch ({ type: "DATE_EVENTS", dateEvents})
            })
        }

    }
}

export const newEvent = (event) => {
    return dispatch => {
        dispatch ({type: "POSTING_EVENT"})

        if(event){

            const data = new FormData()
            Object.keys(event).forEach((key, value) => {
                data.append(key, event[key])
            })

            fetch(`http://localhost:3000/api/v1/events`, {
                method: "POST",
                body: data
            })
            .then(resp => resp.json())
            .then( newEvent => {
                dispatch({ type: "NEW_EVENT", newEvent})
            })
        }

    }
}

export const editEvent = (event) => {
    return dispatch => {
        dispatch ({type: "POSTING_EVENT"})

        if(event){
            const data = new FormData()
            Object.keys(event).forEach((key, value) => {
                data.append(key, event[key])
            })

            fetch(`http://localhost:3000/api/v1/events/${event.id}`, {
                method: "PATCH",
                body: data
            })
            .then(resp => resp.json())
            .then( editedEvent => {
                dispatch({ type: "EDIT_EVENT", editedEvent})
            })
        }

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

        fetch(`http://localhost:3000/api/v1/events/${eventId}`, { method: "DELETE" })
        .then(resp => resp.json())
        .then(deletedEvent => {
            dispatch({ type: "DELETE_EVENT", eventId })
        })        
    }
}