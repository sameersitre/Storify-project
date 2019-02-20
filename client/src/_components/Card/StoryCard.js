import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import './StoryCard.css';
import ViewStory from '../ViewStory/ViewStory.js';
class StoryCard extends Component {
    constructor() {
        super();
        this.state = {
            productIndex: '',

            productImageName: '',
            storyname: "",
            description:"",
        }
    }
    cardClick = (id, imgname,a,b, e) => {
        this.setState({ productIndex: id, productImageName: imgname, storyname:a, description:b });

        alert(id + " " + imgname + " " + a + " " + b + " card clicked");
        // <ViewStory storyname={this.state.storyname} description={this.state.description} />
    }

    render() {
        if (this.state.productIndex !== '') {
            return(
            <Redirect to='/ViewStory' storyn={this.state.storyname} descrip={this.state.description} />)
            // return (<div><ViewStory storyname={this.state.storyname} description={this.state.description} /></div>)
        }

        return (

            <div className="card"
                onClick={(e) =>
                    this.cardClick(this.props.products.id, this.props.products.ImageAddress,this.props.products.StoryName,this.props.products.Description, e)}
            >

                <h2>{this.props.products.StoryName}</h2>
                  <div className="description">{this.props.products.Description}</div><br />
                <div className="avatarPosition" >
                    Authors :
                    {this.props.products.Users.map((image0, i) =>
                        <Tooltip title={image0.ImageAddress.slice(0, -5)} >
                            <Avatar style={{ display: "inline-block", float: "right", bottom: '1px' }}
                                src={require('../../photos/' + image0.ImageAddress)}
                                alt="nothing" />
                        </Tooltip>)}
                </div>


              
            </div>
        );
    }
}
export default StoryCard;
