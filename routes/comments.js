var express        = require("express"),
    Project        = require("../models/project"),
    Comment        = require("../models/comment"),
    mongoose       = require("mongoose");
var router = express.Router({mergeParams : true});

//New Comments
router.get("/new",isLoggedIn,function(req,res){
    Project.findById( mongoose.Types.ObjectId(req.params.id),function(err,foundProjects){
        if(err || !foundProjects){
            res.redirect("back");
            console.log(err);
        }
        else{
            console.log(foundProjects);
            res.render("comments/newComment",{project:foundProjects});
        }
    });
});

//Retrieve Comments
router.post("/", function(req, res){
    //lookup campground using ID
    Project.findById(req.params.id, function(err, project){
        if(err){
            console.log(err || !project);
            res.redirect("/resume");
        } else {
            Comment.create(req.body.commentz, function(err, foundcomment){
                console.log(req.body.commentz);
                if(err){
                    console.log(err);
                } else {
                    foundcomment.author.id = req.user.id;
                    foundcomment.author.username = req.user.username;
                    console.log("C check: ",foundcomment.text);
                    foundcomment.save();
                    project.comments.push(foundcomment);

                    project.save();
                    console.log("C2 ", project.comments.text);
                    res.redirect('/resume/' + project._id);
                }
            });
        }
    });
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    else{
       res.redirect("/loginpage");
    }
}

module.exports = router;
