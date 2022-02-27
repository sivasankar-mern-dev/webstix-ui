import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import Carousel, { CarouselItem } from "./Carousel";

const styles = {
  container: {
    padding: '30px 0px',
    width: '100%',
    background: '#ececec'
  },
  subContainer: {
    maxWidth: '65%',
    margin: '0 auto',
  }
}

function VerticalSlider(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <Carousel>
          <CarouselItem><img src="http://cdn2.hubspot.net/hubfs/145335/17-award-winning-website-designs-02.jpg" /></CarouselItem>
          <CarouselItem><img src="http://cdn2.hubspot.net/hubfs/145335/17-award-winning-website-designs-02.jpg" /></CarouselItem>
          <CarouselItem><img src="http://cdn2.hubspot.net/hubfs/145335/17-award-winning-website-designs-02.jpg" /></CarouselItem>
        </Carousel>
      </div>
    </div>
  )
}

export default withStyles(styles)(VerticalSlider)