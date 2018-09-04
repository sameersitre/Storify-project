import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import './NavBar.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  flex: {
    flexGrow: 1,
  },

  background: {
    background: '#444444',
  },
  buttonstyle: {
    width: "150px",
    height: "50px",
    Color: "inherit",
    marginLeft: "10px",
    fontColor: "white",
  }
};


function ButtonAppBar(props) {
  const { classes } = props;

  return (
 
    <div className={classes.root}>
      <AppBar position="static"  >

        <Toolbar className={classes.background}>
          <Link to="/Home" textDecoration="none" >
            <div >
              <Link to="/Home" className="bigStorify">
                <h3 > Storify<p className="com">.com</p></h3>
              </Link>
            </div>
          </Link>

          <Link to="/OngoingStories">
            <Button variant="contained" color="inherit" className={classes.buttonstyle}>Ongoing Stories</Button>
          </Link>

          <Link to="/CreateStory">
            <Button variant="contained" color="inherit" className={classes.buttonstyle}>Create Your's</Button>
          </Link>
          {<Typography variant="title" color="inherit" className={classes.flex}></Typography>}
          <Link to="/Login" >
            <Button variant="fab">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>

      

  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);