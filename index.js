const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const studentrouter = require("./routes/student");



const app = express();

app.use(cors());
app.use("/api/v1", studentrouter);

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect("mongodb+srv://ishaan:ishaan@cluster0.ovkf58q.mongodb.net/students?retryWrites=true&w=majority", options).then(() => {
    console.log("Connected successfully to database");
});


app.listen(8000, () => {
    console.log("Server started running on port 8000");
});


