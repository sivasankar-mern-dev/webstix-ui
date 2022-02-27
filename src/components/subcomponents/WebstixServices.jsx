import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Button, Typography, Box } from '@material-ui/core';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '30px 0px'
  },
  container: {
    position: 'relative',
    left: '16%',
    width: '35%',
  },
  title: {
    fontSize: 45,
    fontWeight: 400,
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  desc: {
    fontSize: 18,
    fontWeight: 300,
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  btn: {
    padding: '10px 30px',
    fontSize: 20,
    fontWeight: 500,
    textTransform: 'capitalize',
    borderRadius: 6,
    marginTop: 40
  },
  videoContainer: {
    background: '#3f51b5',
    width: '40%',
    height: '30em',
    borderRadius: '6px 0px 0px 6px',
    position: 'absolute',
    right: 0,
  },
  videoBlock: {
    position: 'relative',
    right: '20%',
    top: '5%'
  }
}

function WebstixServices(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography className={classes.title} gutterBottom>Web Design Madison, WI - <br/> Website Development Services</Typography>
        <Typography className={classes.desc} gutterBottom>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Typography>

        <Typography className={classes.desc} gutterBottom>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>

        <Typography className={classes.desc}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </Typography>

        <Button className={classes.btn} variant="outlined" color="primary">Read More</Button>
      </div>
      <div className={classes.videoContainer}>
        <Box className={classes.videoBlock}>
          <div className="video-container">
          <iframe width="1264" height="711" src="https://www.youtube.com/embed/T5eywF3FKBs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default withStyles(styles)(WebstixServices)