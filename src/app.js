const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8080;

// Path
const staticPath = path.join(__dirname,"../public");
const viewsPath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

// Set Hbs Engine
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);


app.use(express.static(staticPath))


// Routing
app.get("/",(req,res)=>{
    res.render("index")
});

app.get("/weather",(req,res)=>{
    res.render("weather");
});

app.get("/about",(req,res)=>{
    res.render("about");
});



app.get("/weather/*",(req,res)=>{
    res.render("404error");
});
app.get("/about/*",(req,res)=>{
    res.render("404error");
});
app.get("*",(req,res)=>{
    res.render("404error");
});

app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`);
})