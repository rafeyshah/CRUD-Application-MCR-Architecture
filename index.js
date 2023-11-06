const express = require("express");
const log = require("morgan")("dev");
const bodyParser = require("body-parser");

const worksRoutes = require("./routes/works");
const userRoutes = require("./routes/user");
const groupRoutes = require("./routes/groups");
const workerRoutes = require("./routes/workers");
const entityRoutes = require("./routes/entity");

const db = require("./mongodb/database");

const app = express();

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({ extended: true });

db();
app.use(log);
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use("/", userRoutes);
app.use("/works", worksRoutes);
app.use("/groups", groupRoutes);
app.use("/workers", workerRoutes);
app.use("/entity", entityRoutes);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
