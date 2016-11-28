import axios from 'axios'
const API_KEY = 'AIzaSyDJBjY4UqxuyyIDEFcAsBCwfyJcoz5Eixw'
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search'

export function fetchVideos(searchTerm){
  const videos = axios.get(`${ROOT_URL}?q=${searchTerm}&type=video&part=snippet&key=${API_KEY}`)
  return {
    type: "FETCH_VIDEOS",
    payload: videos
  }
}

export function changeCenterVideo(id){
  return {type: 'CHANGE_CENTER_VIDEO', payload: id}
}

// export function handleNextFive(token){
//   const videos = axios.get(`${ROOT_URL}?q=${searchTerm}&type=video&part=snippet&key=${API_KEY}`)
//   return {
//     type: "FETCH_VIDEOS",
//     payload: videos
//   }
// }
// }
