const express = require("express");

// Connect to Database
require("./config/dbConnect");

const app = express();

//Set json format
app.use(express.json());

app.use("/books", require("./router/bookRouter"));

app.listen(4000, () => console.log("LIBRARY SERVER READY!"));
