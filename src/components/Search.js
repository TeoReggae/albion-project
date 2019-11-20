import React, { Component } from 'react'
import itemsData from '../items.json'
import matchSorter, {rankings} from 'match-sorter'
import Suggestions from './Suggestions'
import { TextField } from '@material-ui/core'
import {Container} from '@material-ui/core'
class Search extends Component {
  state = {
    query: '',
    results: [],
    data: []

  }

  componentDidMount = async () => {

    this.setState({
      data : itemsData
    });
    console.log(this.state.data);
    }

  searchItems = () =>{


     let matches = matchSorter(this.state.data, this.state.query, {threshold: matchSorter.rankings.CONTAINS, keys:['LocalizedNames.EN-US']});
     console.log(matches);
       this.setState({

         results: matches
       });


    }


  handleInputChange = (e) =>{
    this.setState({
      query: e.target.value
    }, () => {
      if(this.state.query && this.state.query.length >2){

            this.searchItems()

      }else{
        this.setState({results:[]});
      }
    });
  }
  render(){
    return(

      <div>
        <TextField
          id="searchBar"
          label="Search an item.."
          onChange={this.handleInputChange}
          />
        <Suggestions results={this.state.results}/>
      </div>
     )



  }

}

export default Search;
