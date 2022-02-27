import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Box, Typography, Card, CardContent, Grid, Button } from '@material-ui/core';

const styles = {
  container: {
    background: '#fff',
    padding: '30px 0px 30px 0px'
  },
  subContainer: {
    width: '100%',
    maxWidth: '70%',
    margin: '0 auto',
    textAlign: 'center'
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

const specialized = [
  {
    title: "Associations",
    image: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png"
  },
  {
    title: "B2C",
    image: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png"
  },
  {
    title: "Industrial/B2B",
    image: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png"
  },
  {
    title: "Manufacturers",
    image: "https://www.pinclipart.com/picdir/big/545-5450447_web-development-responsive-website-design-benefits-clipart.png"
  }
]

function SpecializedSection(props) {
  const { classes } = props;
  return (
    <div className={classes.container}>
      <Box className={classes.subContainer}>
        <Typography className={classes.title} gutterBottom>How We Can Best Help You</Typography>
        <Typography className={classes.subtitle} gutterBottom>Our Web development services will help you build a stronger company structure</Typography>
        <Grid container spacing={3} style={{ paddingTop: 20 }}>
        {
          specialized.map((item, index) => {
            return (
              <Grid item xs={12} md={3} key={index}>
                <Card>
                  <img src={item.image} alt={item.title} className={classes.cardImg} />
                  <CardContent>
                    <Typography className={classes.serviceTitle}>{item.title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
      <Box display="flex" justifyContent="center" style={{ paddingTop: 35 }}>
        <Button size="large" variant="outlined">View All</Button>
      </Box>
      </Box>
    </div>
  )
}

export default withStyles(styles)(SpecializedSection)