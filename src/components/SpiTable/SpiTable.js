import React, { Component } from 'react';
import './SpiView.scss'
import spiData from '../../data/spiData.json'

class SpiTable extends Component {

  state = {
    data: spiData,
    tempdata: spiData,
    isAscending: {  //korvaa datasta tulevilla key arvoilla
      rank: true,
      player: true,
      team: true,
      base: true,
      adjustment: true,
      efficiency: true,
      teamFactor: true,
      spi: true,
      spiChange: true
    }
  };

  sortBy = (key, type) =>{

    if(type === Number){
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
    }
    else{
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

  filterBy = (event) =>{
    if(event.target.value === ""){
      this.setState({
        data: spiData
      })
    }
    else{
      this.setState({
        data: this.state.tempdata.filter(d => d.player.toLowerCase().includes(event.target.value) || d.team.toLowerCase().includes(event.target.value))
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
                
                  <input className='filter-input element-right' placeholder='Hae' onChange={(e)=>this.filterBy(e)}/>
            </div>
            <div>
                <table className='spi-table'>
                    <thead>
                        <tr>
                            <th onClick={()=>this.sortBy('rank', Number)} >Rank</th>
                            <th onClick={()=>this.sortBy('player', String)} >Nimi</th>
                            <th onClick={()=>this.sortBy('team', String)} >Joukkue</th>
                            <th onClick={()=>this.sortBy('base', Number)} >Base</th>
                            <th onClick={()=>this.sortBy('adjustment', Number)} >Adjustment</th>
                            <th onClick={()=>this.sortBy('efficiency', Number)} >Tehokkuus</th>
                            <th onClick={()=>this.sortBy('teamFactor', Number)} >Tiimitekijä</th>
                            <th onClick={()=>this.sortBy('spi', Number)} >SPI</th>
                            <th onClick={()=>this.sortBy('spiChange', Number)} >Muutos</th>                   
                        </tr>
                    </thead>
                    <tbody>
                        {
                          this.state.data.map((row, index) => {

                            return (
                            <tr className={parseInt(index) % 2 === 0 ? "row-even" : "row-odd"}>
                              <td className='text-center'>{row.rank}</td>
                              <td className='text-center'><a href='#'>{row.player}</a></td>
                              <td className='text-center'><a href='#'>{row.team}</a></td>
                              <td className='text-center'>{row.base}</td>
                              <td className='text-center'>{row.adjustment}</td>
                              <td className='text-center'>{row.efficiency}</td>
                              <td className='text-center'>{row.teamFactor}</td>
                              <td className='text-center'>{row.spi}</td>
                              <td className={parseInt(row.spiChange) >= 0 ? "text-center text-green" : "text-center text-red"}>{row.spiChange}</td>
                            </tr>)
                          })
                        }
                    </tbody>
                </table>
            </div>            
        </div>
    );
  }
}

export default SpiTable;