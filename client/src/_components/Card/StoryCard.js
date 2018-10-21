import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import './StoryCard.css';
class StoryCard extends Component {
    constructor() {
        super();
        this.state = {
            productIndex: '',
            productImageName: '',
        }
    }
    cardClick = (id, imgname, e) => {
        this.setState({ productIndex: id, productImageName: imgname });

        alert(id + " " + imgname + " card clicked");
    }

    render() {
        if (this.state.productIndex !== '') {
            return <Redirect to='/ViewStory' />
        }

        return (
            <div className="card"
                onClick={(e) =>
                    this.cardClick(this.props.products.id, this.props.products.ImageAddress, e)}
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
