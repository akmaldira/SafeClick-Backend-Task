const os = require('os');
var client_machine_name = os.cpus();
const db = require('../models');
const Data = db.Data;

exports.get = (req, res) => {
    Data.find()
        .then((result) => {
            res.status(200).send(client_machine_name)
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message,
            })
        })
}

exports.add = (req, res) => {
    Data.create(req.body)
        .then((result) => {
            res.status(201).send({
                data: result,
            })
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message,
            })
        })
}