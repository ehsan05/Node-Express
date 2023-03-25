const express = require('express');
const {
  getAllJobs,
  getJob,
  UpdateJob,
  DeleteJob,
  createJob,
} = require('../controllers/jobs');
const Router = express.Router();

Router.route('/').get(getAllJobs);
Router.route('/:id').get(getJob).patch(UpdateJob).delete(DeleteJob);
Router.route('/').post(createJob);


module.exports = Router;