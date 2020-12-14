// import history from '../history'

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

// export const fetchBandEvents = (band) => {
//     dispatch({type:"FETCHING_POSTS"})

//     return dispatch => {
//         fetch()
//     }
// }