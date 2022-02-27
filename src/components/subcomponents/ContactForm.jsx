import React, { useState } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button } from '@material-ui/core';

const styles = {
  container: {
    background: '#3f51b5',
    width: '35em',
    height: '35em',
    borderRadius: 6
  },
  block: {
    padding: 25
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'Source Sans Pro, sans-serif',
    color: '#fff'
  },
  subTitle: {
    fontSize: 30,
    fontWeight: 600,
    fontFamily: 'Source Sans Pro, sans-serif',
    color: '#fff'
  },
  inputField: {
    width: '100%',
    color: '#fff',
    border: '1px solid #fff',
    borderRadius: 4,
    marginBottom: 30,
    "& .MuiInputLabel-outlined": {
      color: '#fff'
    }
  },
  subBtn: {
    padding: '10px 40px',
    textTransform: 'capitalize',
    fontSize: 20,
    color: '#fff',
    border: '1px solid #fff',
    borderRadius: 6
  }
}

function ContactForm(props) {
  const { classes } = props;
  const [input, setInput] = useState({})

  const handleInput = (e) => {
    setInput(prevState => (
      { ...prevState, [e.target.name]: e.target.value }
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.keys(input).length > 0) {
      alert("Please Fill the Form")
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.block}>
        <Typography className={classes.title}>Awesomeness awaits!</Typography>
        <Typography className={classes.subTitle} gutterBottom>Connect with our experts.</Typography>
        <form>
          <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth required className={classes.inputField} name="Name" onChange={handleInput} />
          <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth required className={classes.inputField} name="Email" onChange={handleInput} />
          <TextField label="Message" variant="outlined" multiline rows={3} maxrows={5} fullWidth className={classes.inputField} name="Message" onChange={handleInput} />
          <Button size="large" variant="outlined" onClick={(e) => handleSubmit(e)} className={classes.subBtn}>Contact Us</Button>
        </form>
      </div>
    </div>
  )
}

export default withStyles(styles)(ContactForm)