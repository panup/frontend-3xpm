import React, { Component } from 'react';
import '../App.scss'

class ContentTemplate extends Component {


  render() {
    return (
        <div className='content'>
            <h2 className='text-center text-gray'>PARENTAL</h2>
            <h1 className='text-center text-gray'>ADVISORY</h1>
            <h2 className='text-center text-gray'>EXPLICIT CONTENT</h2>
        </div>
    );
  }
}

export default ContentTemplate;