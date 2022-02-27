import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, Button } from '@material-ui/core';
import { CheckboxMarkedCircleOutline } from 'mdi-material-ui'
import ContactForm from './ContactForm';

const styles = {
  container: {
    background: '#ccc',
    height: '45em',
    width: '100%',
    maxWidth: '80%',
    margin: '0 auto',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  subContainer: {
    position: 'absolute',
    top: '15%',
    left: '8%',
  },
  subTitle: {
    fontSize: 30,
    fontWeight: 600,
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  description: {
    fontSize: 25,
    fontWeight: 400,
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  listItem: {
    fontSize: 20,
    fontWeight: 300,
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  btn: {
    padding: '10px 20px',
    textTransform: 'capitalize',
    fontSize: 18,
  },
  grid: {
    marginTop: 30,
  },
  box: {
    position: 'absolute',
    right: '-4%'
  }
}

const list = ["Increase leads/sales with better traffic conversion", "Helps your website rank higher by giving Google what it want", "Makes your website easy to manage", "Gives you the support you need to keep rocking it!"]

function ContactSection(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Box className={classes.subContainer}>
        <Typography className={classes.title} gutterBottom>Tired of Your Website Not <br/> Delivering Results?</Typography>
        <Typography className={classes.subTitle} gutterBottom>Is Website Traffic Flat Lining?</Typography>
        <Typography className={classes.description} gutterBottom>With Webstix, you get expert website marketing, design and performance that:</Typography>
        <Box>
          {
            list.map((item, index) => {
              return(
                <Box display="flex" alignItems="center" style={{ padding: '10px 0px' }} key={index}>
                  <CheckboxMarkedCircleOutline color="primary" />
                  <Typography className={classes.listItem}>{item}</Typography>
                </Box>
              )
            })
          }
        </Box>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={6} md={3}>
            <Button variant="contained" className={classes.btn} fullWidth={true} color="primary">See Case Studies</Button>
          </Grid>
          <Grid item xs={6} md={3}>
            <Button variant="contained" className={classes.btn} fullWidth={true} color="primary">See Testimonials</Button>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.box}>
        <ContactForm />
      </Box>
    </div>
  )
}

export default withStyles(styles)(ContactSection)