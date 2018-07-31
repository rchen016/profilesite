var mongoose = require("mongoose");

var projectSchema = new mongoose.Schema({
       name: String,
       image: String,
       description: String,
       comments: [
           {
             type: mongoose.Schema.Types.ObjectId,
             ref: "Comment"
           }
       ],
       techStacks: []
    });

module.exports = mongoose.model("Project", projectSchema);
