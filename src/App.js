import React, { Component } from 'react';
import ItemsInfo from './components/ItemsInfo';
import Form from './components/Form';
import Search from './components/Search'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';

class App extends React.Component{

  render() {
    return(
      <div style={{textAlign: 'center'}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Albion Market Prices</h1>
      </Grid>
        <Grid item xs={3}>
          <Search />
    </Grid>
      <Grid item xs={9}>
        <ItemsInfo />
      </Grid>

      </Grid>
    </div>

    );
  }

};

export default App;
