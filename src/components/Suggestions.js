import React, {Component} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import ItemsInfo from './ItemsInfo'

class Suggestions extends Component{
  state={
    list: ''
  }
  handleClick = (key) =>{

  return <ItemsInfo key={key}/>

  }
  makelist = (props) =>{
    const options = this.props.results.slice(0, 10).map(r => (
      <ListItem key={r.UniqueName} divider button onClick={this.handleClick.bind(this, r.UniqueName)}

        >
        <ListItemAvatar >
          <Avatar

           alt={r.UniqueName} src={'https://gameinfo.albiononline.com/api/gameinfo/items/'+r.UniqueName}
           >
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={r.LocalizedNames['EN-US']}/>
    </ListItem>
    ))
    this.setState({list:options})
  }
  componentWillReceiveProps = (props) =>{
      this.makelist();
    }

  render(){
    return <List>{this.state.list}</List>
  }
}


export default Suggestions;
