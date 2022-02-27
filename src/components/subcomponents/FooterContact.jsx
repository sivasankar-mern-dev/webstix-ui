import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from '@material-ui/core';
import { Facebook, Twitter, Linkedin, Youtube, Pinterest, MapMarker, Phone, Fax, ArrowUpBoldCircle } from 'mdi-material-ui';

const styles = {
  container: {
    width: '100%',
    maxWidth: '65%',
    margin: '0 auto 10px auto'
  },
  img: {
    width: 190,
    height: 90,
  },
  grid: {
    borderRight: '1px solid #dedede'
  },
  followUs: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontFamily: 'Source Sans Pro, sans-serif',
    color: '#000',
    fontWeight: 'bold'
  },
  socialIcon: {
    fontSize: 30,
    paddingRight: 8,
  },
  webstixLocation: {
    fontSize: 16,
    fontFamily: 'Source Sans Pro, sans-serif',
    color: '#000',
    fontWeight: 600
  },
  address: {
    fontSize: 14,
    fontFamily: 'Source Sans Pro, sans-serif',
    color: '#000',
    fontWeight: 400
  },
  toTop: {
    fontSize: 40,
    color: '#c5c5c5'
  },
  subContainer: {
    background: '#282828',
    color: '#fff',
    textAlign: 'center',
    padding: 10
  },
  copyRightText: {
    fontSize: 14
  }
}

function FooterContact(props) {
  const { classes } = props;

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }; 

  return (
    <div>
      <div className={classes.container}>
        <div>
          <Grid container direction="row" justifycontent="space-around" spacing={1}>
            <Grid item xs={6} md={2} className={classes.grid}>
              <img src="https://media-cdn.tripadvisor.com/media/photo-s/0d/a1/6f/81/accept-card-payments.jpg" className={classes.img} />
            </Grid>
            <Grid item xs={6} md={2} className={classes.grid}>
              <img src="https://lh3.googleusercontent.com/IFlId_xhsiu52xeP5Ul63UKZ2kG-O7MimybEWkFYb803aNMQyKfTbrEKPXi9g_x8YvXSHqSmJsTxuTOrHCBBiFklo09s21EOftg6Urja7CPCj_Jq5PofxKFFrrwzogOWBStWB5vc" className={classes.img} />
            </Grid>
            <Grid item xs={6} md={2} className={classes.grid}>
              <img src="https://www.bestcollegesonline.org/wp-content/uploads/2019/01/University-of-Wisconsin-Top-30-Most-Affordable-Master%E2%80%99s-in-Sustainability-Online-Programs-2019.jpg" className={classes.img} />
            </Grid>
            <Grid item xs={6} md={2} className={classes.grid}>
              <Typography className={classes.followUs}>Follow Us on</Typography>
              <Box display="flex" alignItems="center">
                <Facebook className={classes.socialIcon} />
                <Twitter className={classes.socialIcon} />
                <Linkedin className={classes.socialIcon} />
                <Pinterest className={classes.socialIcon} />
                <Youtube className={classes.socialIcon} />
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Typography className={classes.webstixLocation}>Webstix in Madison, WI</Typography>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="flex-start">
                  <MapMarker style={{ fontSize: 18, color: '#c5c5c5' }} /> 
                  <Typography className={classes.address}>2820 Walton Commons Ln. <br />Suite 108 Madison, <br /> WI 53718</Typography>
                </Box>
                <Box display="block">
                  <Box display="flex" alignItems="center">
                    <Phone style={{ fontSize: 18, color: '#c5c5c5' }} /> 
                    <Typography className={classes.address}>608-277-7849</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Fax style={{ fontSize: 18, color: '#c5c5c5' }} /> 
                    <Typography className={classes.address}>608-710-4020</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} md={1} onClick={backToTop} style={{ padding: '20px 7px', textAlign: 'center', cursor: 'pointer' }}>
              <ArrowUpBoldCircle className={classes.toTop} />
              <Typography style={{ fontSize: 14, color: '#c5c5c5' }}>BACK TO TOP</Typography>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className={classes.subContainer}>
        <Typography className={classes.copyRightText}>© 2022 Webstix - All Rights Reserved.Web Design Madison WI  | Site Map | Privacy Policy | Terms {"&"} Conditions | Hosting Copyright Infringement Policy | FTC Disclaimer</Typography>
      </div>
    </div>
  )
}

export default withStyles(styles)(FooterContact)