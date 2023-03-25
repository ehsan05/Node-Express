const express = require('express');
const app = express();
// let { people } = require('./data');
const people = require('./routes/people');
const auth = require('./routes/auth');

// static assets
app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

//api/people will be base so we remove in all method of route
app.use('/api/people', people);
app.use('/login', auth);

app.listen(5000, () => {
  console.log('Server is listening on port 5000....');
});
