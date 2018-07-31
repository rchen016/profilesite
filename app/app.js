var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    //techStack      = require("./models/techStack"),
    methodOverride = require("method-override"),
    mongoose       = require("mongoose"),
    Project        = require("./models/project"),
    Comment        = require("./models/comment"),
    passport       = require("passport"),
    LocalStrategy  = require("passport-local"),
    User           = require("./models/user"),
    seedDB         = require("./seed");

var authRoutes      = require("./routes/index"),
    commentRoutes   = require("./routes/comments"),
    techStackRoutes = require("./routes/techStack"),
    projectRoutes   = require("./routes/project");


const ObjectId = mongoose.Schema.Types.ObjectId;

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var url = process.env.DATABASEURL || "mongodb://localhost/projects_store";
//var mongodbUri = 'mongodb://admin:root@ds139267.mlab.com:39267/mywebsitedb';
var mongodbUri = 'mongodb://admin:root@ds133621.mlab.com:33621/dbrc2'
//mongoose.connect("mongodb://localhost/projects_store");
mongoose.connect(mongodbUri);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine","ejs");
app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/public'));

//
//seedDB();

//Passport Config
app.use(require("express-session")({
    secret: "lalala falala",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   console.log(req.user);
   if(req.user){
       res.locals.currentLoggedIn = req.user.username;
   }
   else{
       res.locals.currentLoggedIn = "";
   }
   next();
});

var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

conn.once('open', function() {
    // Wait for the database connection to establish, then start the app.
    app.use("/resume/:id/techStacks",techStackRoutes);
    app.use("/resume/:id/comments",commentRoutes);
    app.use("/resume", projectRoutes);

    app.use(authRoutes);
    // app.listen(process.env.PORT, process.env.IP, function(){
    //     console.log("Site Server Started");
    // });
    app.listen(27017);
});
