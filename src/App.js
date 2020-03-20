import React, { Component } from 'react'

import  axios from 'axios'
import {CardList} from './component/card-list/card-list.component';
import './App.css';
import SearchBox from './component/search-box/Search-box';
class App extends Component{
  state={
    monstares:[],
    searchField:""
  }
  componentDidMount(){
axios.get('https://jsonplaceholder.typicode.com/users')
.then(res=>this.setState({monstares:res.data}))

  }
  changeHandler=(e)=>{
    this.setState({searchField:e.target.value})
  }
  render(){
    const {monstares,searchField} = this.state;
    const filterMons = monstares.filter(item=>{
      return  item.name.toLowerCase().includes(searchField.toLowerCase())
    })

    return(
      <div className='App'>
        <SearchBox placeholder="search monsters" handleChange={this.changeHandler}/>
        <CardList  monsters={filterMons} />
       
       
       
      </div>
    )
  }
}


export default App