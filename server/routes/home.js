const express = require('express');
var router = express.Router();
const Story = require('../models/stories');

router.get('/', (req, res)=>{
    
    Story.find({edit: "no"}).then(data=>{
        // console.log(data);
        if (req.session.user){
            res.render('completedStories',{data: data, session: req.session.user.name});
        }
        else{
            res.render('completedStories',{data: data});
        }
        
    }).catch(err=>{throw err});
});

router.get('/completed-stories/:storyID', (req, res)=>{
    Story.find({_id: `${req.params.storyID}`}).then(data=>{
        if (req.session.user){
            res.render('eachStory', {data: data[0], session: req.session.user.name});
        }
        else{
            res.render('eachStory', {data: data[0]});
        }

    }).catch(err=>{throw err});
});

module.exports = router;