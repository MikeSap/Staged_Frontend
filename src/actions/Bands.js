import history from '../history'

export const editBand = (band) => {
    return dispatch => {

    }
}

export const clearBandErrors = () => {
    return dispatch => {
        dispatch({ type: 'CLEAR_BAND_ERRORS'  })
    }
}

export const popBandManage = (band) => {
    return dispatch => {
        dispatch({ type: "POP_BAND_MANAGE", band })
    }
}

export const followBand = (user_id, band_id) => {
    
    return dispatch => {
        fetch(`http://localhost:3000/api/v1/connections`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({follower_id: user_id, followed_id: band_id})
            })
        .then(resp => resp.json())
        .then( newFollow => {
            dispatch({ type: "NEW_FOLLOW", band: newFollow.band})
        })
    }
}

export const newBand = (band) => {

    return dispatch => {
       if(band){

            const data = new FormData()
            Object.keys(band).forEach((key, idx) => {
                data.append(key, band[key])
            })
            
            fetch(`http://localhost:3000/api/v1/bands`, {
                method: "POST",
                headers: {
                },
                body: data
            })
            .then(resp => resp.json())
            .then( newBand => {
                dispatch({ type: "NEW_BAND", newBand})
                history.push(`/manage_band/${newBand.id}`)
            })
        }
    }
}

export const rePopManagedBand = (band_id) => {
    
    return dispatch => {
        fetch(`http://localhost:3000/api/v1/bands/${band_id}`)
        .then(resp => resp.json())
        .then( band => {
            dispatch({ type: "POP_BAND_MANAGE", band})
        })
    }
}