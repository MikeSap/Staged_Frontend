// import history from '../history'

export const followedBandsEvents = (band) => {
    
    return (dispatch) => {
        dispatch({type:"FETCHING_POSTS"})

        if (band){
            fetch(`http://localhost:3000/api/v1/bands/${band.id}`)
            .then(resp => resp.json())
            .then(band => {
                let { events } = band
                events = events.map( e => Object.assign(e, {band}))
                dispatch({ type: "ADD_FOLLOWED_EVENTS", events})
            })
        }
    }
}

export const suggestedBandsEvents = (bandIds) => {
    return (dispatch) => {
        dispatch({type:"FETCHING_POSTS"})
        if (bandIds){
            fetch(`http://localhost:3000/api/v1/bands`)
            .then(resp => resp.json())
            .then(allBands => {
                // This is not filtering out bands that are followed
                allBands.filter(band => !bandIds.includes(band.id))
                dispatch({ type: "SUGGESTED_BANDS", suggestedBands: allBands})
            })
        } 
        // Pull all bands index down from api
        // Pick random number index based on api.length
        // if band is in bands array, pick a new band
        // if band is not in band array, fetch events
        // add events to suggestedEvents store
    }
}

export const dateEvents = (date) => {

    return dispatch => {
        // dispatch({type:"FETCHING_POSTS"})

        // Pull down posts index
        // filter posts that match date
        // add to dateEvents store
    }
}