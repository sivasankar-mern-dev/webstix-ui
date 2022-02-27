import { Grid, Typography, Box, Button } from '@material-ui/core'
import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { CircleSlice4, Magnify } from 'mdi-material-ui'

const styles = (theme) => ({
  header: {
    width: '100%',
    maxWidth: '70%',
    margin: '0 auto',
    backgroundColor: '#fff',
  },
  logo: {
    width: 183,
    height: 64,
    marginTop: 15,
    paddingBottom: 0,
  },
  imgText: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontWeight: 500,
    letterSpacing: '2px',
    position: 'absolute',
    bottom: '0px',
  },
  text: {
    fontFamily: 'Source Sans Pro, sans-serif',
    fontSize: 20
    // fontFamily: 'Raleway, sans-serif',
  },
  subHeader: {
    backgroundColor: "#3f51b5",
    height: 40,
    width: '100%',
    // maxWidth: '80%',
    margin: '0 auto',
  },
  menuItem: {
    color: '#fff',
    textTransform: 'uppercase',
  }
});

function Header(props) {
  const { classes } = props;
  return (
    <div>
    <div className={classes.header}>
      <Grid container direction="row" alignItems="center" >
        <Grid item xs={3} style={{ position: 'relative', height: 80 }}>
          <img src="https://cdn-bhbdo.nitrocdn.com/xLcXcmhFydYTyNDGVYpAYSjjztxtLztS/assets/static/optimized/rev-5809bb4/wp-content/uploads/2021/06/webstix_logo.svg.svg" alt="Logo" className={classes.logo} />
          <Typography className={classes.imgText}>look good</Typography>
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={4}>
          <Box display="flex" alignItems="center" justifyContent="space-around">
            <Typography className={classes.text}>Let's Talk! <b>608-277-7849</b></Typography>
            <Button variant="contained" color="primary" size="large">Get Started</Button>
            <CircleSlice4 color="primary" />
          </Box>
        </Grid>
      </Grid>
    </div>
    <div className={classes.subHeader}>
      <Box display="flex" alignItems="center" justifyContent="space-between" style={{ width: '70%', margin: '0 auto', paddingTop: 8 }}>
        <Typography className={classes.menuItem}>Web Design</Typography>
        <Typography className={classes.menuItem}>Marketing / Seo</Typography>
        <Typography className={classes.menuItem}>Services</Typography>
        <Typography className={classes.menuItem}>Portfolio</Typography>
        <Typography className={classes.menuItem}>Support</Typography>
        <Typography className={classes.menuItem}>About Us</Typography>
        <Typography className={classes.menuItem}>Contact Us</Typography>
        <Magnify style={{ color: '#fff', fontSize: 20}} />
      </Box>
    </div>
    </div>
  )
}

export default withStyles(styles)(Header)