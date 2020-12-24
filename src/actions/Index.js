import API from '../API'

export const allEvents = (type) => {
    
    return (dispatch) => {
        dispatch({type:"FETCHING_POSTS"})

        if(type){
        // Pull down posts index
            fetch(`${API}/api/v1/events`)
            .then(resp => resp.json())
            .then( allEvents => {
            // Filter posts that match type
            // add to relevant store
            let events
            switch (type){
                case "music":
                    events = allEvents.filter(e => e.event_type.toLowerCase() === "music")
                return dispatch ({ type: "ADD_MUSIC", events})

                case "merch":
                    events = allEvents.filter(e => e.event_type.toLowerCase() === "merch")
                    return dispatch ({ type: "ADD_MERCH", events}) 

                case "shows":
                    events = allEvents.filter(e => e.event_type.toLowerCase() === "show")
                    return dispatch ({ type: "ADD_SHOWS", events}) 

                default:
                    return dispatch ({ type: "FETCH_ERROR" })
            }
            })
        }

    }
}

export const allBands = () => {

    return dispatch => {
        dispatch({type:"FETCHING_POSTS"})

        fetch(`${API}/api/v1/bands`)
            .then(resp => resp.json())
            .then( bands => {
                dispatch ({ type: "ADD_BANDS", bands})
            })
    }
}