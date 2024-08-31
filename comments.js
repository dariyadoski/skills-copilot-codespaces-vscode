// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a new comment
app.post('/comments', (req, res) => {
  const comment = req.body.comment;
  console.log(comment);
  res.send('Comment is ' + comment);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
// Run the server
// $ node comments.js
// Server is running on http://localhost:3000
// Open a new terminal and send a POST request
// $ curl -X POST http://localhost:3000/comments -d 'comment=This is a comment'
// Comment is This is a comment
// You will see the comment printed in the server console