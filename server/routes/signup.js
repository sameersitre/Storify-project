const express = require('express');
var router = express.Router();
var completeShuffle = require('./algorithm.js');
const User = require('../models/users');
const session= require('express-session');


router.get('/login', (req,res)=>{
    res.render('signup');
});

router.post('/login/:add', (req,res)=>{
    console.log("Parameter received","at /signup/:add -", req.params.add);
    if (req.params.add=="register"){

        //shuffling password
        var shufflePassword = req.body.password.split('');
        completeShuffle(shufflePassword);
        shufflePassword = shufflePassword.join('');
        console.log(shufflePassword);
        
       
        
        var newUser= new User({name: req.body.name,email: req.body.email, password: shufflePassword});
        req.session.user=newUser;
        newUser.save().then(()=>{res.redirect('/')}).catch(e=>res.redirect('/login'));
        }

    else if (req.params.add==="check"){
        
        //checking password with shuffled password
        console.log(req.body.password);
        var shufflePassword = req.body.password.split('');
        completeShuffle(shufflePassword);
        shufflePassword = shufflePassword.join('');
        console.log(shufflePassword);

        User.findOne({email: req.body.email, password: shufflePassword}, (err, data)=>{
            if (err) throw err;
            else if (data == null){
                res.sendStatus(404);
                return;
            }
            else{
                req.session.user=data;
                res.redirect('/');
            }
        })
    }
    else{
        res.json("page not found");
    }
});

router.post('/signout', (req,res)=>{
    // console.log(req.session.user.name);
    if (req.session.user){
        req.session.destroy();
        res.redirect('/');
    }else{
        res.json("sign in first to sign out");
    }
});

module.exports = router;