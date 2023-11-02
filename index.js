const express = require('express')
const app = express()
const worksRoutes = require("./routes/works");
var db = require('./mongodb/database');

db();
app.use("/works", worksRoutes)

app.listen(3000, () => console.log('Example app listening on port 3000!'))