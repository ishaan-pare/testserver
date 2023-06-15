const Student = require("../schema/Student");


const studentrouter = require("express").Router();

const bodyParser = require("body-parser");

// create application/json parser
 
// create application/x-www-form-urlencoded parser

studentrouter.get("/getstudents", (req, res) => {
    Student.find({}).then((data, err) => {
        if (err) {
            res.status(500).json({
                error: true,
                message: "Server side error.",
                data: null
            });
        }
        if (data) {
            res.status(200).json({
                error: false,
                message: "Successfully got the data.",
                data: data
            });
        }
        else {
            res.status(200).json({
                error: true,
                message: "Data not found",
                data: null
            });
        }
    });
});

studentrouter.post("/poststudent", bodyParser.json(),(req, res) => {
    const {
        id,
        name,
        standard,
        age
    } = req.body;

    if (id && name && standard && age) {
        const newStudent = new Student({ id: id, name: name, standard: standard, age: age });
        newStudent.save().then((err) => {
            if (err) {
                res.status(200).json({
                    error: true,
                    message: "Server side error",
                    data: err
                });
            }
            else {
                res.status(500).json({
                    error: false,
                    message: "Successfully added the student",
                    data: newStudent
                });
            }
        })

    }
    else {
        res.status(500).json({
            error: true,
            message: "request unacceptable",
            data: null
        });
    }
});

module.exports = studentrouter;