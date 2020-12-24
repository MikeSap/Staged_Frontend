import API from '../API'

// export const allEvents = (page) => {
//     debugger
//     return (dispatch) => {
//       dispatch({type:"FETCHING_POSTS"})

//       fetch(`${API}/api/v1/events/${page}`)
//       .then(resp => resp.json())
//       .then( events => {
//       // Filter posts that match type
//       // add to relevant store
//       // let events
//       // switch (type){
//       //     case "music":
//               // events = allEvents.filter(e => e.event_type.toLowerCase() === "music")
//           return dispatch ({ type: "ADD_MUSIC", events})

//           // case "merch":
//               // events = allEvents.filter(e => e.event_type.toLowerCase() === "merch")
//               // return dispatch ({ type: "ADD_MERCH", events}) 

//           // case "shows":
//               // events = allEvents.filter(e => e.event_type.toLowerCase() === "show")
//               // return dispatch ({ type: "ADD_SHOWS", events}) 

//         //   default:
//         //       return dispatch ({ type: "FETCH_ERROR" })
//         // }
//       })
//     }
// }

export const allMusic = (page) => {
    return (dispatch) => {
      dispatch({type:"FETCHING_POSTS"})

      fetch(`${API}/api/v1/music/${page}`)
      .then(resp => resp.json())
      .then( events => {
        return dispatch ({ type: "ADD_MUSIC", events})
      })
    }
}

export const allMerch = (page) => {
    return (dispatch) => {
      dispatch({type:"FETCHING_POSTS"})

      fetch(`${API}/api/v1/merch/${page}`)
      .then(resp => resp.json())
      .then( events => {
        return dispatch ({ type: "ADD_MERCH", events})
      })
    }
}

export const allShows = (page) => {
    return (dispatch) => {
      dispatch({type:"FETCHING_POSTS"})

      fetch(`${API}/api/v1/shows/${page}`)
      .then(resp => resp.json())
      .then( events => {
        return dispatch ({ type: "ADD_SHOWS", events})
      })
    }
}

export const allBands = (page) => {

    return dispatch => {
        dispatch({type:"FETCHING_POSTS"})

        fetch(`${API}/api/v1/bands/${page}`)
            .then(resp => resp.json())
            .then( bands => {
                dispatch ({ type: "ADD_BANDS", bands})
            })
    }
}