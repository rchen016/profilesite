var express     = require("express"),
    User        = require("../models/user"),
    passport    = require("passport");
var router = express.Router({mergeParams : true});
//Landing Page
router.get("/",function(req,res){
    res.render("test");
});

//Register User Form
router.get("/register",function(req,res){
    res.render("register");
});

//Register User
router.post("/register",function(req,res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err,user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        else{
            passport.authenticate("local")(req,res,function(){
                res.redirect("/resume");
            });
        }
    });
});


//Login Form
router.get("/loginpage",function(req,res){
    res.render("loginpage");
});

//Login
router.post("/loginpage", passport.authenticate("local",
    {
        successRedirect: "/resume",
        failureRedirect: "/loginpage"
    }), function(req, res){
});

//Logout
router.get("/logout",function(req,res){
    req.logout();
    res.redirect("/resume");
});

module.exports = router;
