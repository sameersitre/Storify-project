const express = require('express');
var router = express.Router();
const user = require('../models/users');
const Story = require('../models/stories');


router.get('/profile', (req, res)=>{
    if (req.session.user){
        Story.find({user: req.session.user._id, edit: "no"}).then(completed=>{
            Story.find({user: req.session.user._id, edit: "yes"}).then(ongoing=>{
                res.render('profile', {completed,ongoing, session: req.session.user.name});
            }).catch();
        }).catch();
    }
    else{
        res.redirect('/login');
    }
});

module.exports = router;