import React, { Component } from 'react'
import '../../App.scss'

class ContentTemplate extends Component {
  render() {
    return (
      <div className='content'>
        <h1 className='text-gray'>Pelaajat</h1>
        <div className='row'>
          <div>
            <select className='season-select'>
              <option selected value='kausi 7'>Kausi 7</option>
              <option value='kausi 6'>Kausi 6</option>
              <option value='kausi 5'>Kausi 5</option>
              <option value='kausi 4'>Kausi 4</option>
              <option value='kausi 3'>Kausi 3</option>
              <option value='kausi 2'>Kausi 2</option>
              <option value='kausi 1'>Kausi 1</option>
            </select>
          </div>
          <iframe className='bracket' title='bracket' src='https://challonge.com/3XPM7/module' width='100%' height='1000' frameBorder='0' scrolling='auto' allowTransparency='true' />
        </div>
      </div>
    )
  }
}

export default ContentTemplate
