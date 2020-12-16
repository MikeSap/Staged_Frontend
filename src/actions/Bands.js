import history from '../history'

export const createBand = (band) => {
    return dispatch => {

    }
}

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

export const newBand = (band) => {

    return dispatch => {
       if(band){

            const data = new FormData()
            Object.keys(band).forEach((key, idx) => {
                data.append(key, band[key])
            })
            
            fetch(`http://localhost:3000/api/v1/bands`, {
                method: "POST",
                heades: {
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