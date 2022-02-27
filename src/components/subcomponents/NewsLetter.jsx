import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Box, Button, Grid, Typography } from '@material-ui/core';

const styles = {
  container: {
    padding: '30px 0px',
    width: '100%',
    maxWidth: '70%',
    margin: '30px auto 0px auto'
  },
  img: {
    width: 150,
    height: 150,
    display: 'flex',
    margin: '0 auto'
  },
  title: {
    fontSize: 25,
    fontWeight: 400,
    fontFamily: 'Source Sans Pro, sans-serif',
    textAlign: 'center',
    width: 250,
    margin: '0 auto'
  },
  btn: {
    padding: '10px 20px',
    border: '1px solid #000',
    borderRadius: 6,
    color: '#000',
    textTransform: 'capitalize',
    fontSize: 18,
    display: 'flex',
    margin: '0 auto',
    marginTop: 15
  },
  box: {
    height: 350,
    background: "#f5f5f5",
    maxWidth: '32%',
    margin: 8,
    flexBasis: '32%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: 6,
  },
  newsTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  newsSubtitle: {
    fontSize: 20,
    fontWeight: 400,
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  newsImg: {
    width: 150,
    height: 150,
  },
  textField: {
    padding: 10,
    borderRadius: 0,
    border: '1px solid #000',
  },
  subscribeBtn: {
    borderRadius: 0,
    padding: '6px 10px',
    boxShadow: 'none',
    height: 37
  }
}

function NewsLetter(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <div>
        <Grid container direction="row" alignItems="center" justifycontent="space-between" spacing={2}>
          <Grid item xs={12} md={4} className={classes.box}>
            <img src="https://cdn.pixabay.com/photo/2018/08/04/21/21/feedback-3584509__340.jpg" alt="evaluation" className={classes.img} />
            <Typography className={classes.title}>Get <b> Free </b> Evaluation of Your Website for ADA Compliance</Typography>
            <Button className={classes.btn}>Get Now</Button>
          </Grid>
          <Grid item xs={12} md={4} className={classes.box}>
            <img src="https://cdn.pixabay.com/photo/2018/08/04/21/21/feedback-3584509__340.jpg" alt="evaluation" className={classes.img} />
            <Typography className={classes.title}><b> Website Financing </b> Options Available</Typography>
            <Button className={classes.btn}>Find Out More</Button>
          </Grid>
          <Grid item xs={12} md={4} className={classes.box}>
            <img src="https://cdn.pixabay.com/photo/2018/08/04/21/21/feedback-3584509__340.jpg" alt="evaluation" className={classes.newsImg} />
            <Typography className={classes.newsTitle}>NewsLetter</Typography>
            <Typography className={classes.newsSubtitle}>Get website strategies and Webstix specials</Typography>
            <Box style={{ marginTop: 25 }}>
              <input type="email" placeholder="Enter your email address" className={classes.textField} />
              <Button variant="contained" className={classes.subscribeBtn} color="primary">Subscribe</Button>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default withStyles(styles)(NewsLetter)