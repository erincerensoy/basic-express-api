const express = require("express");

const app = express();

const port = process.env.PORT || '3000';

app.get("/", (req, res) => {

    res.send("Your Express API is up and running at last :) heaven & hell ronnie james dio");

});

app.listen(port, () => {

    console.log("listening at http://localhost:${port}");
});