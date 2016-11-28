import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeCenterVideo } from './actions'
import { bindActionCreators } from'redux';


class SideBarVideos extends Component {

  handleOnClick(event){
    event.preventDefault()
    this.props.changeCenterVideo(event.currentTarget.dataset.id)
  }

  render(){
    let sideBarThumbnails = this.props.sideBarVideos.map((sideBarVideo) => {
      return <li className="list-group-item" ><a data-id={sideBarVideo.id} onClick={this.handleOnClick.bind(this)}>
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
