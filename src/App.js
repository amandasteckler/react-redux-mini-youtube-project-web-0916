import React, { Component } from 'react';
import './App.css';
import { fetchVideos } from './actions';
import { bindActionCreators } from'redux';
import { connect } from 'react-redux';
import CenterVideo from './CenterVideo'
import SideBarVideos from './SideBarVideos'

class App extends Component {

  handleOnSubmit(event){
    event.preventDefault()
    this.props.fetchVideos(event.currentTarget.children[0].value)
  }

  render() {
    return (
      <div className="App">
        Enter keyword here:
        <form onSubmit={this.handleOnSubmit.bind(this)}>
          <input type='text' />
          <button type='submit'>Search</button>
        </form>

        <CenterVideo />
        <SideBarVideos />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchVideos: fetchVideos}, dispatch)
}


export default connect(null, mapDispatchToProps)(App);
