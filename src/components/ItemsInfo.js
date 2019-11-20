import React, {Component} from 'react';
import {Paper} from '@material-ui/core'
class ItemsInfo extends React.Component {
  constructor(props){
    super(props)
    this.state={
      selectedItem: props.key,
      isLoaded: false,
      data:[],
      itemObj:{}
    }
  }
  
  getItemInfo = async () =>{

    const url = 'https://www.albion-online-data.com/api/v2/stats/prices/T4_BAG?locations=Caerleon,Bridgewatch&qualities=2'
    const url2 = 'https://gameinfo.albiononline.com/api/gameinfo/items/T8_MEAL_STEW/data'
    console.log(url)
    fetch(url2)
    .then(res => res.json())
    .then(
      (results) => {
        this.setState({
          isLoaded: true,
          data: results,

        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    ).then( () =>{

    const item ={
      name: '',
      description: '',
      tier: '',
      category: '',
      itemPower: '',
      itemType: '',
      weight: '',
      tradable: false,
      craftMats: [{
        UniqueName:'',
        count: ''
      }],
      UniqueName: '',
      itemIconSrc: ''
    }
    item.name = this.state.data.localizedNames['EN-US'];
    item.description = this.state.data.localizedDescriptions['EN-US'];
    item.tier = this.state.data.tier;
    item.category = this.state.data.categoryId;
    item.itemPower = this.state.data.abilityPower;
    item.itemType = this.state.data.itemType;
    item.weight = this.state.data.weight;
    item.tradable = this.state.data.showinmarketplace;
    item.UniqueName = this.state.data.uniqueName;
    item.itemIconSrc  = 'https://gameinfo.albiononline.com/api/gameinfo/items/'+this.state.data.uniqueName;
    this.setState({itemObj:item})

    console.log('item:'+item);
  }
  )}
componentWillReceiveProps = (props) =>{
  console.log(this.props.key)
  this.getItemInfo()

}

  render(){
    return (

      <Paper>{this.state.itemObj.name}</Paper>

    );
  }
};
export default ItemsInfo;
