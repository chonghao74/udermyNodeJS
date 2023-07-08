const express = require("express");
const app = express();
const url = require("url");
const path = require("path");
const bodyparser = require("body-parser");//post only
// const favicon = require('serve-favicon')


//middleware
app.use(bodyparser.urlencoded({ extended: true }));//post only
app.use(express.static("public"))//static file
// app.use(favicon(path.join(__dirname, "public", "icons")));


app.get("/", (req, res) => {
    console.log(path.join(__dirname, "index.html"));
    res.sendFile(path.join(__dirname, "index.html"));
})

app.post("/login", (req, res) => {
    console.log(req.body);
    let { at, pd } = req.body
    res.send("Good AT->" + at + "  PD->" + pd);
});

app.get("/login", (req, res) => {
    console.log(req.query);
    let { gat, gpd } = req.query
    res.send("Good AT->" + gat + "  PD->" + gpd);
});

app.get("/fruit/:something", (req, res) => {
    res.status(200).send(req.params);
});

app.get("/employee/:id", (req, res) => {
    res.status(200).send(req.params);
});

app.get("/fruit/:something/:count", (req, res) => {
    let { something, count } = req.params;//destructing on object
    console.log(`I love ${something} (${count}))`);
    res.status(200).send(req.params);
});

app.get("/name/Tim", (req, res) => {
    let Tim = { name: "tim", age: 18 };
    res.send(Tim);
});


//routing for all

app.get("/*", (req, res) => {
    res.status(404).sendFile(path.join(__dirname, "error.html"));
})

// app.get("*", (req, res) => {
//     console.log(res.statusCode);

//     console.log(path.join(__dirname, "index.html"));
//     res.status(404).sendFile(path.join(__dirname, "error.html"));
// })

app.listen(3030, () => {
    console.log("Express Running Success");
});