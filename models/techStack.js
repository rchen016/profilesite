var mongoose = require("mongoose");

var techstackSchema = mongoose.Schema({
   url: String
});

module.exports = mongoose.model("Techstack", techstackSchema);
