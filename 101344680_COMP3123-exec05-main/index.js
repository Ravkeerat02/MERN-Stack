const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const fs = require('fs');

// const { request } = require('http');

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
app.use(express.urlencoded())
router.get('/home', (req,res) => {
  //res.send('This is home router');
  const filePath = path.join(__dirname,'home.html');
  res.sendFile(filePath);
});

/*
- Return all details from user.json file to client as JSON format
*/
app.use(express.json())
router.get('/profile', (req,res) => {
  const filePath = path.join(__dirname,'user.json');
  //res.send('This is profile router');
  let data = fs.readFileSync(filePath,{encoding:'utf-8'});
  data = JSON.parse(data);
  res.json({data})
});

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req,res) => {
  const {username, password} = req.query;
  const filePath = path.join(__dirname, 'user.json');
  const data = fs.readFileSync(filePath, 'utf8');
  const user = JSON.parse(data)

  let response;

  if (user.username == username) {
    if (user.password == password) {
      response = {status: true, message: 'Valid user'}
    } else {
      response = {status: false, message: 'Invalid password'}
    }
  } else {
    response = {status: false, message: 'Invalid username'}
  }


  res.json(response);
});

router.get('/logout/:username', (req, res) => {
  const username = req.query.username;
  res.send(`<b>${username} successfully logged out<b>`);
});

app.use('/',router);
app.listen(process.env.port  || 8081);
console.log(`Web Server is listening on` + (process.env.port || 8081));

  //res.send('This is login router');

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:username', (req,res) => {
  const username = req.params.username; 
  res.send(`<b>${username}</b> successfully logout.<b>$`);
});

app.use('/', router);

app.listen(process.env.port || 4000);

console.log('Web Server is listening at port '+ (process.env.port || 4000));