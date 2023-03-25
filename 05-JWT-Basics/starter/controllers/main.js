const { BadRequest } = require('../errors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {
  const { username, password } = req.body;
  //moongosse
  //Joi
  //check in the customer - we are using it here
  if (!username || !password) {
    throw new BadRequest('Plesase Provide Username and Password');
  }
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
  res.status(200).json({ msg: 'user created', token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  try {
    res.status(200).json({
      msg: `Hello, ${req.user.username}`,
      secret: `Here is your authorized secret data.Your lucky number is :${luckyNumber}`,
    });
  } catch (error) {
    throw new BadRequest('Not authorized access to this route');
  }
};

module.exports = {
  login,
  dashboard,
};
