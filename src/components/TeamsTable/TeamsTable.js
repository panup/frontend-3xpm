import React, { Component } from 'react'
import '../SpiTable/SpiView.scss'
import spiData from '../../data/rsiData.json'

class TeamsTable extends Component {
  state = {
    data: spiData,
    tempdata: spiData,
    isAscending: {
      rank: true,
      team: true,
      rsi: true,
      captain: true,
      lineup: true,
      block: true,
      change: true
    }
  };

  sortBy = (key, type) => {
    if(type === Number) {
      this.setState({
        data: this.state.data.sort((a, b) => (
          this.state.isAscending[key] === true
            ? parseFloat(a[key]) - parseFloat(b[key])
            : parseFloat(b[key]) - parseFloat(a[key])
        )),
        isAscending: {
          [key]: !this.state.isAscending[key]
        }
      })
    } else {
      this.setState({
        data: this.state.data.sort((a, b) => (
          this.state.isAscending[key] === true
            ? a[key].localeCompare(b[key])
            : b[key].localeCompare(a[key])
        )),
        isAscending: {
          [key]: !this.state.isAscending[key]
        }
      })
    }
  }

  filterBy = (event) => {
    if(event.target.value === '') {
      this.setState({
        data: spiData
      })
    } else {
      let split = event.target.value.split(',')
      let data = []

      split.forEach(element => {
        let temp = this.state.tempdata.filter(d => d.team.toLowerCase().includes(element.trim()) || d.captain.toLowerCase().includes(element.trim()))
        temp.forEach(element2 => {
          if(!data.includes(element2)) {
            data.push(element2)
          }
        })
      })

      this.setState({
        data: data
        // data: this.state.tempdata.filter(d => d.team.toLowerCase().includes(event.target.value) || d.captain.toLowerCase().includes(event.target.value)) *legacy for backup*
      })
    }
  }

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

          <input className='filter-input element-right' placeholder='Hae' onChange={(e) => this.filterBy(e)} />
        </div>
        <div>
          <table className='spi-table'>
            <thead>
              <tr>
                <th onClick={() => this.sortBy('rank', Number)} >Rank</th>
                <th onClick={() => this.sortBy('team', String)} >Nimi</th>
                <th onClick={() => this.sortBy('rsi', Number)} >RSI</th>
                <th onClick={() => this.sortBy('captain', String)} >Kapteeni</th>
                <th onClick={() => this.sortBy('lineup', String)} >Kokoonpano</th>
                <th onClick={() => this.sortBy('block', String)} >Lohko</th>
                <th onClick={() => this.sortBy('change', Number)} >Muutos</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.data.map((row, index) => {
                  return (
                    <tr className={parseInt(index) % 2 === 0 ? 'row-even' : 'row-odd'}>
                      <td className='text-center'>{row.rank}</td>
                      <td className='text-center'><a href='#'>{row.team}</a></td>
                      <td className='text-center'>{row.rsi}</td>
                      <td className='text-center'><a href='#'>{row.captain}</a></td>
                      <td className='text-center'>{row.lineup}</td>
                      <td className='text-center'>{row.block}</td>
                      <td className={parseInt(row.change) >= 0 ? 'text-center text-green' : 'text-center text-red'}>{row.change}</td>
                    </tr>)
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default TeamsTable
