const express = require('express');
var router = express.Router();
const Story = require('../models/stories');
const Prompt = require('../models/prompts');

router.get('/ongoing', (req, res)=>{
    Story.find({edit: true}).then(data=>{
        if (req.session.user){
            console.log(req.session.user);
            res.render('ongoing',{data: data, session: req.session.user.name});
        }
        else{
            res.render('ongoing',{data: data});
        }
    }).catch(err=>{throw err});
});

router.get(`/ongoing/:storyID`, (req,res)=>{
    Story.find({_id: req.params.storyID}).then(data=>{
            if (req.session.user){
                res.render('ongoingEdit', {data: data[0], session: req.session.user.name});
            }
            else{
                res.render('ongoingEdit', {data: data[0]});
            }
    }).catch(err=>{throw err});
});

router.post('/ongoing/:storyID', (req,res)=>{
    Story.find({_id: req.params.storyID}).then(data=>{
        if (req.body.ongoing == "no"){
            data[0].description += req.body.text;
            data[0].edit = req.body.ongoing
        }
        else if (req.body.ongoing == "yes"){
            data[0].description += req.body.text;
            data[0].edit = req.body.ongoing
        }
        data[0].save().then(()=>{res.redirect('/');}).catch(err=>{throw err});       
    }).catch(err=>{throw err});
});

module.exports = router;