import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import Carousel, { CarouselItem } from "./Carousel";

const styles = {
  container: {
    padding: '30px 0px',
    width: '100%',
    maxWidth: '65%',
    margin: '0 auto',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Source Sans Pro, sans-serif',
  },
}

function OurWork(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Typography className={classes.title}>Our Work</Typography>
      <Carousel>
        <CarouselItem><img src="http://cdn2.hubspot.net/hubfs/145335/17-award-winning-website-designs-02.jpg" alt="Image" /></CarouselItem>
        <CarouselItem><img src="http://cdn2.hubspot.net/hubfs/145335/17-award-winning-website-designs-02.jpg" alt="Image" /></CarouselItem>
        <CarouselItem><img src="http://cdn2.hubspot.net/hubfs/145335/17-award-winning-website-designs-02.jpg" alt="Image" /></CarouselItem>
      </Carousel>
    </div>
  )
}

export default withStyles(styles)(OurWork)