import React, { Component } from 'react';
import './Home.css';
import Stories from '../_data/StoriesDB.json';
import StoryCard from './StoryCard';
//import MediaCard from './MediaCard';
import NavBar from './NavBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const styles = theme => ({
    paper: {
        height: 350,
        width: 300,
    },
});
class Home extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div>
                
             <NavBar />
                <div className='slide-container'>
            {/* <div>
                <NavBar />
                <h3 align="center" className="collab"> STORY COLLABORATIONS</h3>
                <div className='hor-slide-container'  >
                    {Stories.map((game, i) => <StoryCard products={game} key={i}  />)}
                </div>
            </div> */}
           
                <Grid container className={classes.demo} justify="center" spacing={32}>
                    {Stories.map((value, index) =>
                        (<Grid val={value} item={true}>
                            <StoryCard className={classes.paper} products={value} key={index} />
                        </Grid>
                        ))}
                </Grid>
            </div></div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Home);
