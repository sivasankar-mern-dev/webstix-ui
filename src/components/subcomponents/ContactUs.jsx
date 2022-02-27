import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Typography, Box, Button, Divider } from '@material-ui/core';

const styles = {
  container: {
    padding: '30px 0px',
    width: '100%',
    maxWidth: '70%',
    margin: '0 auto'
  },
  title: {
    fontSize: 45,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  list: {
    fontSize: 20,
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  listNum: {
    fontSize: 20,
    padding: 10,
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  box: {
    backgroundColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    margin: '15px 0px'
  },
  btn: {
    padding: '10px 20px',
    color: '#000',
    borderRadius: 6,
    border: '1px solid #000',
    margin: '20px 0px',
    textTransform: 'capitalize'
  },
  logo: {
    height: 375
  }
}

const contactList = ["Contact Us", "Let's Talk", "We Get You a Quote"]

function ContactUs(props) {
  const { classes } = props;
  return (
    <div>
    <Divider />
    <div className={classes.container}>
      <Box display="flex" alignItems="center" justifyContent="space-around">
        <img src="https://cdn-bhbdo.nitrocdn.com/xLcXcmhFydYTyNDGVYpAYSjjztxtLztS/assets/static/optimized/rev-5809bb4/wp-content/uploads/2018/12/cp_banner_image.png" alt="Logo" className={classes.logo} />
        <Box>
          <Typography className={classes.title}>It's Easy to <b>Get Started:</b></Typography>
            {
              contactList.map((item, index) => {
                return (
                  <Box display="flex" alignItems="center" className={classes.box} key={index}>
                    <span className={classes.listNum}>{index + 1}</span>
                    <Typography className={classes.list}>{item}</Typography>
                  </Box>
                )
              })
            }
          <Button className={classes.btn}>Let's Talk! <b> 608-277-7849</b></Button>
        </Box>
      </Box>
    </div>
    <Divider />
    </div>
  )
}

export default withStyles(styles)(ContactUs)