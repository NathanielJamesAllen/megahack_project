// Home.js
import React from 'react';
import HomepageImage from '../components/HomepageImage';
import { Typography, Grid, AppBar, Toolbar, IconButton, Button, TextField} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const Home = () => {
    return (
      <>
          <Typography></Typography>
          

          <Grid container spacing={2} align="center" justify="center" alignItems="center">
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} sm={12} md={12}></Grid>

              <Grid item xs={12} sm={12} md={2}></Grid>
              <Grid item xs={12} sm={12} md={2}></Grid>
              <Grid item xs={12} sm={12} md={2}>
                <TextField
                  id="outlined-multiline-static"
                  label="Hash-Cracker"
                  multiline
                  rows={10}
                  defaultValue=""
                />
              </Grid>
              <Grid item xs={12} sm={12} md={2}>
                <Button variant="outlined">Crack Hashes</Button>
              </Grid>
              <Grid item xs={12} sm={12} md={2}></Grid>
              <Grid item xs={12} sm={12} md={2}></Grid>
              
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} sm={12} md={12}></Grid>
              <Grid item xs={12} sm={12} md={12}>
                <HomepageImage/>
              </Grid>
          </Grid>

      </>
    );
}


export default Home;