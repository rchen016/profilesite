var express        = require("express"),
    Project        = require("../models/project"),
    mongoose       = require("mongoose");
var router = express.Router({mergeParams : true});

var methodOverride = require("method-override");
router.use(methodOverride("_method"));
//Display Resume
router.get("/", function(req,res){
    Project.find({},function(err,allProjects){
        if(err || !allProjects){
            console.log(err);
            res.redirect("back");
        }
        else{
            res.render("project/index",{index:allProjects});
        }
    });
});



//Retrieve Resume data
router.post("/",function(req,res){
    var name = req.body.name;
    var image = req.body.image;
    var descript = req.body.descript;
    var newProject = {name: name, image: image, descript:descript};
    Project.create(newProject, function(err, newlyCreated){
        if(err || !newlyCreated){
            console.log(err);
            res.redirect("back");
        }
        else{
            console.log("Sucess!");
            res.redirect("/resume");
        }
    });
});

//Create new Project
router.get("/new",isLoggedIn, function(req,res){
    console.log("test");
    res.render("project/newProject");
  //res.render("techStack/newTechStack");
});

router.get("/:id/new2",isLoggedIn, function(req,res){
    console.log("test2");
    //Project.findById(req.params.id).populate("techStacks").exec(function(err,foundProjects){
    Project.findById(mongoose.Types.ObjectId(req.params.id),function(err,foundProjects){
      if(err){
        console.log("???");
        res.redirect("/resume");
      }else{
        res.render("techStack/newTechStack",{project:foundProjects});
      }

    });
});



router.get("/:id",function(req,res){
    Project.findById(req.params.id).populate("comments techStack").exec(function(err,foundProjects){
        var test = foundProjects.toObject();
        console.log("test: ", test);
        if(err || !foundProjects){
            console.log(err);
            res.redirect("back");
        }
        else{
            console.log(foundProjects);
            res.render("project/showProjectInfo",{project:foundProjects});
        }
    });
});

//Update Project Form
router.get("/:id/edit",isLoggedIn, function(req,res){
    Project.findById(mongoose.Types.ObjectId(req.params.id),function(err,foundProjects){
        if(err || !foundProjects){
            console.log(err);
            res.redirect("back");
        }
        else{
            res.render("project/editProject",{project:foundProjects});
        }
    });
});

//Update Project
router.put("/:id",function(req,res){
    Project.findByIdAndUpdate(req.params.id,
    {
        name: req.body.editName,
        image: req.body.editImage,
        description: req.body.editDescript
    },
    function(err,updatedBlog){
        if(err || !updatedBlog){
            res.redirect("/resume");
        }
        else{
            res.redirect("/resume/"+req.params.id);
        }
    });
});

router.delete("/:id", function(req, res){
   Project.findByIdAndRemove(req.params.id, function(err){
      if(err){
          res.redirect("/resume");
      } else {
          res.redirect("/resume");
      }
   });
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        if(String(req.user.username) == "admin"){
            return next();
        }
        else{
            res.redirect("/resume");
        }
    }
    else{
       res.redirect("/loginpage");
    }
}


module.exports = router;
