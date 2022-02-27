import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography, Card, CardContent, Button } from '@material-ui/core';

const styles = {
  container: {
    width: '100%',
    maxWidth: '70%',
    margin: '0 auto',
    backgroundColor: '#fff',
    padding: '30px 0px 30px 0px'
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 400,
    textAlign: 'center',
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  serviceTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 600,
  },
  cardImg: {
    width: '-webkit-fill-available'
  }
}

const services = [
  {
    title: "Website Development",
    image: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png"
  },
  {
    title: "SEO",
    image: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png"
  },
  {
    title: "Support",
    image: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png"
  },
  {
    title: "PPC",
    image: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png"
  },
  {
    title: "eCommerce Development",
    image: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png"
  },
  {
    title: "Website Marketing",
    image: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png"
  },
  {
    title: "Responsive Web Design",
    image: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png"
  },
  {
    title: "UX/UI Design",
    image: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png"
  }
]

function OurServices(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Box>
        <Typography className={classes.title} gutterBottom>How We Can Best Help You</Typography>
        <Typography className={classes.subtitle} gutterBottom>Our Web development services will help you build a stronger company structure</Typography>
      </Box>
      <Grid container spacing={3} style={{ paddingTop: 20 }}>
        {
          services.map((service, index) => {
            return (
              <Grid item xs={12} md={3} key={index}>
                <Card>
                  <img src={service.image} alt={service.title} className={classes.cardImg} />
                  <CardContent>
                    <Typography className={classes.serviceTitle}>{service.title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
      <Box display="flex" justifyContent="center" style={{ paddingTop: 35 }}>
        <Button size="large" variant="outlined">View All Services</Button>
      </Box>
    </div>
  )
}

export default withStyles(styles)(OurServices)