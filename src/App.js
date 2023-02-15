import './App.css';
import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


class App extends Component {
  
    // apiKey  = 'f8eac624622843ef874b0685dcf2e185' 
    state = {
       progress:0
    }
  
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  } 
  
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
            height={3}
          />
          <Routes>
            <Route exact path='/'  element = {<News setProgress={this.setProgress} key="general" category = "general" pageSize = '12' />} / >
            <Route exact path='/business'  element = {<News setProgress={this.setProgress} key="business" category = "business" pageSize = '12' />} / >
            <Route exact path='/entertainment'  element = {<News setProgress={this.setProgress} key="entertainment" category = "entertainment"pageSize = '12' />} / >
            <Route exact path='/health'  key="health" element = {<News setProgress={this.setProgress} key="health" category = "health" pageSize = '12'/>} / >
            <Route exact path='/science'  element = {<News setProgress={this.setProgress} key="science" category = "science" pageSize = '12'/>} / >
            <Route exact path='/sports'  element = {<News setProgress={this.setProgress} key="sports" category = "sports" pageSize = '12'/>} / >
            <Route exact path='/technology'  element = {<News setProgress={this.setProgress} key="technology" category = "technology" pageSize = '12'/>} / >
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;
