const express = require("express");
const response_json = require("../utils/response.utils.json");

express.response.sendStatus = function (status_code, payload = {}) {
  let response = {};
  response_data_Obj = response_json[status_code];
  response.success = status_code.toString()[0] === "4" ? false : true;
  response.message = response_data_Obj.msg;
  response.data = payload;
  this.status(response_data_Obj.status || 200);
  this.json(response);
};
