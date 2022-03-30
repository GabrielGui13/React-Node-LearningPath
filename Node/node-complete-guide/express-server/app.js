const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./util/path");
const expressHbs = require("express-handlebars");

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs",

  }),
); //pug is a express built in template, handlebars not, this initializes handlebars
//app.set('view engine', 'pug') //tell express we are using a html template
//app.set("view engine", "hbs"); //
app.set('view engine', 'ejs') //setting ejs as default express template (already built in)
app.set("views", "views"); //set views to another folder, it could be any name, like templates

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false })); //to parse the request body as a middleware
app.use(express.static(path.join(rootDir, "public"))); //pass a static folder to server content
//will handle any request that tries to find a file

/* app.use((req, res, next) => { //just the / would run for all routes that start with it
    console.log('This always runs!');
    next() //allow the request to travel on to the next middleware
}) */

app.use("/admin", adminData.routes); //adds /admin to next paths
app.use(shopRoutes); //in second place if we were using 'use' instead of 'get'

app.use((req, res, next) => {
  //will handle all http requests and paths
  res.status(404);
  //.send('<h1>Page not found</h1>')
  //.sendFile(path.join(rootDir, 'views', '404.html'))
  res.status(404).render("404", { 
    pageTitle: "Page Not Found",
    path: null 
  });
});

app.listen(PORT, () => {
  console.log(`Server is up and running in PORT ${PORT}`);
});
