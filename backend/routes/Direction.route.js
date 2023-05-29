let mongoose = require('mongoose');
let express = require('express');
let router = express.Router();

// require Schema
let ItemSchema = require('../models/Item');

// Making Post route for requesting data from api
// Storing data to database
router.route('/createItem').post((req, res, next) => {
        console.log(req)
  const directionObject = {
          description: req.body.description,
          userInput: req.body.userInput
        };

        ItemSchema.create(directionObject, (error, data) => {
          if (error) {
            return next(error)
          } else {
            console.log(data)

          }
        })
        res.json("Data Loaded Successfully");


});
// Making route for GET request of complete data


module.exports = router;