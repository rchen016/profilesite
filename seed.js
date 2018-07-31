var mongoose = require("mongoose");
var Project = require("./models/project");
var Comment   = require("./models/comment");

var data = [
    {
        name: "Project 1", 
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e5a31d03ddee66863a599421f792e07b&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Project 2", 
        image: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b934f71d8055c9013853b2fe286d66f0&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Project 3", 
        image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e3b92161cef01773ab8e0f83d4da1126&auto=format&fit=crop&w=1350&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Project 4", 
        image: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=45fbe9046945ce711c299b8c6d26d998&auto=format&fit=crop&w=1031&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Project 5", 
        image: "https://images.unsplash.com/photo-1496243975092-6ec259c776e2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2565329d9d44aece28956ec9481c540c&auto=format&fit=crop&w=1050&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },
    {
        name: "Project 6", 
        image: "https://images.unsplash.com/photo-1490810194309-344b3661ba39?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c9830a4c5f51d1c7cb2492c29e152302&auto=format&fit=crop&w=1590&q=80",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    }
];

function seedDB(){
   //Remove all campgrounds
  Project.remove({}, function(err){
      if(err){
          console.log(err);
      }
      else{
          console.log("hi");
      }
        if(err){
            console.log(err);
        }
        console.log("removed projects!");
        Comment.remove({}, function(err) {
            if(err){
                console.log(err);
            }
            console.log("removed comments!");
             //add a few campgrounds
            // data.forEach(function(seed){
            //     Project.create(seed, function(err, campground){
            //         if(err){
            //             console.log(err);
            //         } 
            //         else {
            //             console.log("added a projects");
            //             //create a comment
            //             Comment.create(
            //                 {
            //                     text: "here is my email homer@gmail.com",
            //                     author: "Homer"
            //                 }, function(err, comment){
            //                     if(err){
            //                         console.log(err);
            //                     } else {
            //                         campground.comments.push(comment._id);
            //                         campground.save();
            //                         console.log("Created new comment");
            //                     }
            //                 });
            //         }
            //     });
            // });
            
        });
    }); 
    //add a few comments
}

module.exports = seedDB;