var express        = require("express"),
    Project        = require("../models/project"),
    TechStacks     = require("../models/techStack"),
    mongoose       = require("mongoose");
var router = express.Router({mergeParams : true});

var methodOverride = require("method-override");
router.use(methodOverride("_method"));
//Create new Project
router.get("/newtechstack",isLoggedIn, function(req,res){
    console.log("test");
    res.render("techStack/newTechStack");
  //res.send("Hi");
});

router.post("/", function(req,res){
   console.log("new ts check 1");
   Project.findById(mongoose.Types.ObjectId(req.params.id),function(err,foundProjects){
     if(err){
       res.redirect("/resume");
     }else{
       var newTS = {url: req.body.techStackz};
       console.log("fsdfdfsfsd",newTS.url);
       TechStacks.create(newTS, function(err, newlyCreated){
           if(err || !newlyCreated){
               console.log(err);
               res.redirect("back");
           }
           else{
               console.log("Sucess new Tech Stack!",req.body.techStackz);
               console.log(typeof req.body.techStackz);
               console.log("NW ", newlyCreated.url);
               newlyCreated.url = req.body.techStackz;
               newlyCreated.save();
               console.log("NW ", newlyCreated.url);
               console.log("NW2 ", foundProjects.techStacks.length);

               foundProjects.techStacks.push(newlyCreated);
               console.log("NW3 ", foundProjects.techStacks.length);
               console.log("1 ", newlyCreated .url);
               console.log("2 ", foundProjects.techStacks.url);
              // console.log("3 ", foundProjects.techStacks );
               //foundProjects.techStacks.url = "Hi";
               console.log("Project: ",foundProjects.techStacks.url);
               foundProjects.save();
               res.redirect("/resume");
           }
       });
     }
   });
});

/*

//New Tech Stack
router.get("/blah",isLoggedIn,function(req,res){
    Project.findById( mongoose.Types.ObjectId(req.params.id),function(err,foundProjects){
        if(err || !foundProjects){
            console.log("Error");
            res.redirect("back");
            console.log(err);
        }
        else{
            console.log(foundProjects);
            res.render("techStack/newTechStack",{project:foundProjects});
        }
    });
});

//Retrieve techStack
router.post("/", function(req, res){
    //lookup campground using ID
    Project.findById(req.params.id, function(err, project){
        if(err){
            console.log(err || !project);
            res.redirect("/resume");
        } else {
          TechStack.create(req.body.techStackz,function(err, foundTechStack){
              if(err){
                console.log(err);
              }else{
                foundTechStack.url = req.body.techStack;
                foundTechStack.save();
                project.techStacks.push(foundTechStack);
                project.save();
                res.redirect('/resume/'+project_id);
              }
          });

            Comment.create(req.body.commentz, function(err, foundcomment){
                console.log(req.body.commentz);
                if(err){
                    console.log(err);
                } else {
                    foundcomment.author.id = req.user.id;
                    foundcomment.author.username = req.user.username;
                    foundcomment.save();
                    project.comments.push(foundcomment);
                    project.save();
                    res.redirect('/resume/' + project._id);
                }
            });
        }
    });
});
*/
function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    else{
       res.redirect("/loginpage");
    }
}

module.exports = router;
