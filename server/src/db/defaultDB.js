const mongoose = require("mongoose");
const Todo = require("../models/todos");

require("./mongoose");

const todo1 = new Todo({ title: "Learn React", complete: false });
const todo2 = new Todo({ title: "Learn NodeJS", complete: false });
const todo3 = new Todo({ title: "Learn Express", complete: false });
const todo4 = new Todo({ title: "Learn MongoDB", complete: false });

const setUpDefaultDB = async () => {
  await todo1.save();
  await todo2.save();
  await todo3.save();
  await todo4.save();
};

setUpDefaultDB();

//module.exports=setUpDefaultDB;
