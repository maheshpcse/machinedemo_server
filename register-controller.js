var Cryptr = require('cryptr');
var express = require("express");
// cryptr = new Cryptr('myTotalySecretKey');

module.exports.register = function (req, res) {
  var today = new Date();
  var encryptedString = cryptr.encrypt(req.body.password);
  var users = {
    "name": req.body.name,
    "email": req.body.email,
    "password": encryptedString,
    "created_at": today,
    "updated_at": today
  }

  res.json({
    status: true,
    data: results,
    message: 'user registered sucessfully'
  })
};