import React, { Component } from 'react';
import { connect } from 'react-redux';


function CenterVideo(props){

    let src=`https://www.youtube.com/embed/${props.centerVideo.id}`
    return(
      <div>
        <iframe width="420" height="315"
        src={src}>
        </iframe>
      </div>
    )

}

function mapStateToProps(state){
  return {centerVideo: state.centerVideo}
}

export default connect(mapStateToProps)(CenterVideo);
