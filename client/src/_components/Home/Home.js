import React, { Component } from 'react';
import './Home.css';
import Stories from '../../_data/StoriesDB.json';
import StoryCard from '../Card/StoryCard';
//import MediaCard from './MediaCard';
import NavBar from '../NavBar/NavBar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import NavBar2 from '../NavBar/NavBar2';
import NavBar3 from '../NavBar/NavBar3';
// import NavBar4 from '../NavBar/NavBar4';
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
                
                {/* <NavBar />
                <NavBar2 /> */}
                <NavBar3 />
                {/* <NavBar4/> */}
                <div className='slide-container'>
            {/* <div>
                <NavBar />
                <h3 align="center" className="collab"> STORY COLLABORATIONS</h3>
                <div className='hor-slide-container'  >
                    {Stories.map((game, i) => <StoryCard products={game} key={i}  />)}
                </div>
            </div> */}
           
                <Grid container className={classes.demo} justify="center" >
                    {Stories.map((value, index) =>
                        (<div val={value} item={true}>
                            <StoryCard className={classes.paper} products={value} key={index} />
                        </div>
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
