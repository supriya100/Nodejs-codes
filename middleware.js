const express = require('express');
const app = express();
const router = express.Router();


router.use((req, res, next) => {
  console.log('Router-level middleware activated');
  next();
});


router.get('/user', (req, res) => {
  res.send('User route');
});


app.use('/api', router);


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
