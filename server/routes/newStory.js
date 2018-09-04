const express = require('express');
var router = express.Router();
const Story = require('../models/stories');
const Prompt = require('../models/prompts');


router.get('/create-new-story', (req, res)=>{
    Prompt.count({}, (err, count)=> {
        if (err){throw err}
        Prompt.find({cid: `${Math.floor(Math.random() * (0, count-1))}`}).then(data=>{
            // console.log(data);
            if (req.session.user){
                res.render('newStory', {character1: data[0].character1, character2: data[0].character2, location: data[0].location, cid: data[0].cid, session: req.session.user.name});
            }
            else{
                res.render('newStory', {character1: data[0].character1, character2: data[0].character2, location: data[0].location, cid: data[0].cid});
            }
        }).catch(err=>{throw err})
    });
});

router.post('/create-new-story/:cid', (req,res)=>{
    console.log(req.body.ongoing);
    if (req.body.text.match(/([\s]+)/g).length < 20){
        Prompt.find({cid: `${req.params.cid}`}).then(data=>{
            var newStory = new Story({description: req.body.text,user: req.session.user._id ,
                character1: data[0].character1,character2: data[0].character2,location: data[0].location, edit: (req.body.ongoing)});
            newStory.save().then(()=>{res.redirect('/')}).catch(err=>{throw err});
        }).catch(err=>{throw err});
    }
    else{
        res.send("That didn't go to the db coz your exceeded the word count. YOu can have max 20 spaces");
    }

});

module.exports = router;
