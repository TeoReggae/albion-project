import React from 'react';
import itemsData from '../items.json'
import fs from 'fs'
class Form extends React.Component {
state ={
  links: [],
  linksId: itemsData.map(l => l.UniqueName)
}
  componentDidMount = () =>{

    const linksId = itemsData.map(l => l.UniqueName);
    const writeFileP = require('write-file-p')

    for(var i=0; i<linksId.length; i++){
      linksId[i] = 'https://gameinfo.albiononline.com/api/gameinfo/items/'+linksId[i];


    }


    this.setState({
      links: linksId

    })







  }



  render() {
    console.log(this.state.links);
    return(
    <div>
      {this.state.links.map(item => {
        return <p>{item}</p>
      })}
    </div>
)



  }

};

export default Form;
