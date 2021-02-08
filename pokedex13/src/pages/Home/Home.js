import React from 'react'

import { Grid } from '@material-ui/core'
import SimpleCard from '../../components/card/SimpleCard'

const Home = () => {

  return (
    <div>
      <h1>Home Page</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <SimpleCard />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home