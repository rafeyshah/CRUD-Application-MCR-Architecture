const express = require('express');
const log = require('morgan')('dev');
const bodyParser = require('body-parser');
const worksRoutes = require("./routes/works");
const userRoutes = require("./routes/user");
const db = require('./mongodb/database');


const app = express()
var router = express.Router();

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

db();
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use('/works',router);
app.use('/', router);

worksRoutes(router);
userRoutes(router)


app.listen(3000, () => console.log('Example app listening on port 3000!'))