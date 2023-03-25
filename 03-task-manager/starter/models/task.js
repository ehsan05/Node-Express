const mongoose = require('mongoose');

//setup scheme
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must Provide Name'],
    trim: true,
    maxlength: [20, 'Max can not be more than 20 Characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

//setup the model
module.exports = mongoose.model('Task', TaskSchema);
