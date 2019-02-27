import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar.js'
import ContentTemplate from './components/ContentTemplate.js'
import './App.scss';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Sidebar/>
            <div className='content-wrapper'>
                <ContentTemplate/>
            </div>
        </div>
    );
  }
}

export default App;
