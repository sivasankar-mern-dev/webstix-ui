import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Box, Button, Typography } from '@material-ui/core';

const styles = {
  container: {
    height:'32em',
    backgroundRepeat:'no-repeat',
    backgroundSize: 'auto',
    backgroundPosition: 'right',
    background: 'linear-gradient(to right, #26D0CE, #1A2980)'
  },
  block: {
    paddingTop: 40,
    width: '100%',
    maxWidth: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 auto',
  },
  text: {
    fontSize: 45,
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  button: {
    marginTop: 20,
    padding: '10px 20px',
    textTransform: 'capitalize',
    color: '#FFFFFF',
    border: '2px solid #fff',
    borderRadius: 4,
    fontSize: 16
  },
  googleImg: {
    width: 145,
    height: 75
  },
  reviewImg: {
    width: 130,
    height: 'auto'
  },
  reviewTxt: {
    textTransform: 'uppercase',
    color: '#fff',
    fontSize: 14,
    fontWeight: 500
  }
}

const reviewImage = require('./Daco_4861498.png')

function Banner(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Box className={classes.block}>
        <Box>
          <Typography className={classes.text}>Website Design With Better <br/> Performance {"&"} Built-In Strategy <br/> That Simply Works Better.</Typography>
          <Button variant='outlined' className={classes.button}>What We Do</Button><br/>
          <Box display="flex" alignItems="center" style={{ marginTop: 60 }}>
            <img src="https://mstruckdrivingschool.com/wp-content/uploads/2016/09/google-review.png" className={classes.googleImg} alt="Image" />
            <Box display="block" style={{ paddingLeft: 20 }}>
              <Typography className={classes.reviewTxt}>Webstix is Rated 4.8/5 Stars</Typography>
              <img src={reviewImage} className={classes.reviewImg} />
            </Box>
          </Box>
        </Box>
        <img src="https://cdn-bhbdo.nitrocdn.com/xLcXcmhFydYTyNDGVYpAYSjjztxtLztS/assets/static/optimized/rev-5809bb4/wp-content/uploads/2018/12/cp_banner_image.png" alt="Image" style={{ height: 300 }} />
      </Box>
    </div>
  )
}

export default withStyles(styles)(Banner)