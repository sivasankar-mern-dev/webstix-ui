import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Box, Divider, Typography } from '@material-ui/core';
import { ChevronRight } from 'mdi-material-ui';
import FooterContact from './subcomponents/FooterContact';

const styles = {
  container: {
    width: '100%',
    maxWidth: '70%',
    margin: '0 auto',
    background: '#fff',
    paddingBottom: 30
  },
  title: {
    fontSize: 20,
    fontWeight: 400,
    color: '#797979',
    fontFamily: 'Source Sans Pro, sans-serif',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 400,
    color: '#9a9a9a',
    fontFamily: 'Source Sans Pro, sans-serif',
    textDecoration: 'underline',
    cursor: 'pointer',
    paddingBottom: 5
  },
  icon: {
    fontSize: 16,
    color: '#9a9a9a',
  }
}

const footerContent = [
  {
    title: "About Us",
    content: ["About Webstix", "History", "Advantages", "Testimonials", "Webstix Blog", "Giving Back", "Resource Links", "Map to Webstix"]
  },
  {
    title: "Marketing / SEO",
    content: ["About Webstix", "History", "Advantages", "Testimonials", "Webstix Blog", "Giving Back", "Resource Links", "Map to Webstix"]
  },
  {
    title: "Web Design",
    content: ["About Webstix", "History", "Advantages", "Testimonials", "Webstix Blog", "Giving Back", "Resource Links", "Map to Webstix"]
  },
  {
    title: "Services",
    content: ["About Webstix", "History", "Advantages", "Testimonials", "Webstix Blog", "Giving Back", "Resource Links", "Map to Webstix"]
  },
  {
    title: "Support",
    content: ["About Webstix", "History", "Advantages", "Testimonials", "Webstix Blog", "Giving Back", "Resource Links", "Map to Webstix"]
  }
]

function Footer(props) {
  const { classes } = props;
  return (
    <div>
      <div style={{ paddingBottom: 30 }}>
        <Divider />
      </div>
      <div className={classes.container}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          {
            footerContent.map((item, index) => {
              return (
                <Box key={index}>
                  <Typography className={classes.title} gutterBottom>{item.title}</Typography>
                  {
                    item.content.map((content, index) => {
                      return (
                        <Box display="flex" alignItems="center" key={index}>
                          <ChevronRight className={classes.icon} />
                          <Typography className={classes.subTitle}>{content}</Typography>
                        </Box>
                      )
                    })
                  }
                </Box>
              )
            })
          }
        </Box>
      </div>
      <FooterContact />
    </div>
  )
}

export default withStyles(styles)(Footer)