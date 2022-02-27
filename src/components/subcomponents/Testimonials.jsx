import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Button, Typography, Grid } from '@material-ui/core';

const styles = {
  container: {
    padding: '30px 0px',
    overflow: 'hidden',
    background: '#ccc',
    marginBottom: 30
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  block: {
    padding: '20px 0px'
  },
  btn: {
    padding: '10px 25px',
    color: "#000",
    border: '1px solid #000',
    borderRadius: 6,
    display: 'flex',
    margin: '25px auto 0px auto',
    fontSize: 20,
    textTransform: 'capitalize',
  }
}

function Testimonials(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>What Our Clients Say</Typography>
      <Grid container spacing={2} className={classes.block}>
        <Grid item xs={12} md={3}>
          <div className="video-container">
            <iframe src="https://www.youtube.com/embed/T5eywF3FKBs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="video-container">
            <iframe src="https://www.youtube.com/embed/T5eywF3FKBs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="video-container">
            <iframe src="https://www.youtube.com/embed/T5eywF3FKBs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className="video-container">
            <iframe src="https://www.youtube.com/embed/T5eywF3FKBs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Grid>
      </Grid>
      <Button variant="outlined" className={classes.btn}>Our Clients Love Us - Click</Button>
    </div>
  )
}

export default withStyles(styles)(Testimonials)