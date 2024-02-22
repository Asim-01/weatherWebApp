const express = require('express');
const app = express();
const port = 8000;
const path = require('path');
const hbs = require('hbs')

const sPath = (path.join(__dirname, '../public'))
const vPath = (path.join(__dirname, '../templates/views'))
const pPath = (path.join(__dirname, '../templates/partials'))

// console.log(pPathPath);
app.use(express.static(sPath));
app.set('view engine', 'hbs');
app.set('views', vPath)
hbs.registerPartials(pPath)


app.get('/', (req, res) => {
    res.render("index");
});

app.get('/about', (req, res) => {
    res.render("about");
});

app.get('/weather', (req, res) => {
    res.render("Weather");
});

app.get('*', (req, res) => {
    res.render("404error",{
        msg:"(.)(.)ps page not found"
    })
});

app.listen(port);

// nodemon .\src\app.js -e js,hbs,html,css