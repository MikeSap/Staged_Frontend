export default function manageEvents(state = {music: [], merch: [], shows: []}, action) {
    
  const lastUrlSlash = window.location.href.lastIndexOf("/")
  const event_type = window.location.href.slice(lastUrlSlash + 1)  

  switch (action.type) {

    case "ADD_MUSIC":
        return {...state, music: action.events}
    
    case "ADD_MERCH":
        return {...state, merch: action.events}
    
    case "ADD_SHOWS":
        return {...state, shows: action.events}

    case "INDEX_COMMENT":
      switch (event_type) {
        case "shows":
          let showIdx = state.shows.findIndex(s => s.id === action.newComment.event_id)
          let editedShow = { ...state.shows[showIdx], comments: [...state.shows[showIdx].comments, action.newComment] }
          return {...state, shows: [ ...state.shows.slice(0, showIdx), editedShow, ...state.shows.slice(showIdx + 1)]}
        
        case "music":
          let musicIdx = state.music.findIndex(m => m.id === action.newComment.event_id)
          let editedMusic = { ...state.music[musicIdx], comments: [...state.music[musicIdx].comments, action.newComment] }
          return {...state, music: [ ...state.music.slice(0, musicIdx), editedMusic, ...state.music.slice(musicIdx + 1)]} 
          
        case "merch":
          let merchIdx = state.merch.findIndex(m => m.id === action.newComment.event_id)
          let editedMerch = { ...state.merch[merchIdx], comments: [...state.merch[merchIdx].comments, action.newComment] }
          return {...state, merch: [ ...state.merch.slice(0, merchIdx), editedMerch, ...state.merch.slice(merchIdx + 1)]} 

        default:
          return state
      }

    case "LOGOUT":
        return { music: [], merch: [], shows: [] }
    
    default:
        return state;
    }
}