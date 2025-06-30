const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.use(express.static(path.join(__dirname, "public"))); // to serve static files like css, js, images etc.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.get("/", (req,res) => {
    res.render("home.ejs");
});

/* app.get("/ig/:username", (req,res) => {
    const followers = ["adam","bob","steve", "abc"];
    let { username } = req.params ; //username is embedded using .params
     res.render("Instagram.ejs" , {username, followers});
});
*/
app.get("/ig/:username", (req,res) => {
    let {username} = req.params;
    const instaData = require("./data.json");
    console.log(instaData);
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", {data});
});

app.get("/rolldice" , (req,res) => {
    let diceValue = Math.floor(Math.random() * 6) + 1;
    res.render("rolldice.ejs" , {num : diceValue});
    
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
}
);