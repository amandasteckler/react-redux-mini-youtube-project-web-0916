import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCenterVideo } from './actions'
import { bindActionCreators } from'redux';


function SideBarVideos(props){

  function handleOnClick(event){
    event.preventDefault()
    this.props.changeCenterVideo(event.currentTarget.dataset.id)
  }


    let sideBarThumbnails = props.sideBarVideos.map((sideBarVideo) => {
      return <li><a data-id={sideBarVideo.id} onClick={handleOnClick.bind(props)}>
        <img src={sideBarVideo.thumbnail} />
        <br />
        {sideBarVideo.title}
      </a></li>
    })
    return(
      <div>
        {sideBarThumbnails}
      </div>
    )
}

function mapStateToProps(state){
  let sideBarVideos = state.videos.filter(function(video){
    if (video.id !== state.centerVideo.id){
      return video
    }
  })
  return {sideBarVideos: sideBarVideos}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({changeCenterVideo: changeCenterVideo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarVideos);
