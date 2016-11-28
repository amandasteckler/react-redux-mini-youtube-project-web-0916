import { combineReducers } from 'redux'

function videos(state = [], action){
  switch (action.type) {
    case "FETCH_VIDEOS":
      return action.payload.data.items.map(function(video){
        return {id: video.id.videoId, title: video.snippet.title, thumbnail: video.snippet.thumbnails.default.url}
      })
    default:
      return state
  }
}

function centerVideo(state = {}, action){
  switch (action.type) {
    case 'FETCH_VIDEOS':
      let video = action.payload.data.items[0]
      return {id: video.id.videoId}
    case 'CHANGE_CENTER_VIDEO':
      return {id: action.payload}
    default:
      return state
  }
}


const rootReducer = combineReducers({videos, centerVideo})

export default rootReducer
