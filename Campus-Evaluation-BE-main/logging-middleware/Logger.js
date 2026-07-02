const express = require("express");
const axios=require("axios")
const cors = require("cors");

const app = express();
app.use(express.json());
const logRoutes=require("./routes/logRoutes")
app.use("/api/log",logRoutes)

app.use(cors());
app.listen(6000,() => {
    console.log("server started a 6000")
})