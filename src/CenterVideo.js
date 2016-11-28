import React, { Component } from 'react';
import { connect } from 'react-redux';


class CenterVideo extends Component {
  render(){
    let src=`https://www.youtube.com/embed/${this.props.centerVideo.id}`
    return(
      <div>
        <iframe width="420" height="315"
        src={src}>
        </iframe>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {centerVideo: state.centerVideo}
}

export default connect(mapStateToProps)(CenterVideo);
