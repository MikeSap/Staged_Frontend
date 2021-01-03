import history from '../history'
import API from '../API'

export const editBand = (band) => {
  return dispatch => {
    
    const token = localStorage.getItem("token")
    const data = new FormData()
    Object.keys(band).forEach((key, value) => {
        data.append(key, band[key])
    })
    fetch(`${API}/api/v1/bands/${band.id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: data
      })
    .then(resp => resp.json())
    .then( editedBand => {
    dispatch({ type: 'EDIT_BAND', editedBand })
    })
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

export const popBandShow = (band_id) => {

  return dispatch => {
      dispatch({ type: "FETCH_SHOW_BAND" })
      
    fetch(`${API}/api/v1/band_info`, {
      method: "POST",
      headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({band_id: band_id})
      })
    .then(resp => resp.json())
    .then( info => {
        dispatch({ type: "POP_SHOW_BAND", info })
        history.push(`/bands/${band_id["id"]}`)
    })
  }
}

export const followBand = (user_id, band_id) => {
    return dispatch => {
        fetch(`${API}/api/v1/connections`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({follower_id: user_id, followed_id: band_id})
            })
        .then(resp => resp.json())
        .then( newFollow => {
          dispatch({ type: "NEW_FOLLOW", band: newFollow[0].band, events: newFollow})
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
            
            fetch(`${API}/api/v1/bands`, {
                method: "POST",
                body: data
            })
            .then(resp => resp.json())
            .then( newBand => {
                  if(newBand.errors) {
                    dispatch ({ type: "NEW_BAND_ERROR", newBand})
                    history.push('/band_registration')
                  } else {
                dispatch({ type: "NEW_BAND", newBand})
                history.push(`/manage_band/${newBand.id}`)
            }})
        }
    }
}