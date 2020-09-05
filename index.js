
var http = require('http');
const https = require("https");
var fs = require('fs');
//amazon
var AWS = require('aws-sdk');
var uuid = require('uuid');



var nodemailer = require('nodemailer');
var url = require('url');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')





app.use(express.urlencoded({extended: true}))




//Contact mail
app.post('/submit', (req, res) =>{
	
	const name = req.body.name
	const email = req.body.email
	const description = req.body.description 
	
	
	
	var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'howsounds.project@gmail.com',
    pass: 'UEe9GR5t'
  }
});

var mailOptions = {
  from: email,
  to: 'howsounds.project@gmail.com',
  subject: 'Contact -' + name,
  text: description +'\n \n'+ email
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  
});	
/* //routing contact sent
     fs.readFile('submitc.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();

}); */

//routing contact sent
     fs.readFile('/', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();

});

	
})



//Request mail
app.post('/submitr', (req, res) =>{
	
	const emailr = req.body.emailr
	const describer = req.body.describer
	
	
	
	var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'howsounds.project@gmail.com',
    pass: 'UEe9GR5t'
  }
});

var mailOptions = {
  from: emailr,
  to: 'howsounds.project@gmail.com',
  subject: 'Request',
  text: describer +'\n\n'+ emailr
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
  
});	


/* //routing request sent
     fs.readFile('submitr.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();

}); */
//routing request sent
     fs.readFile('/', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();

});

	
})




//routing Landing page
app.get('/', (req, res) => {
   fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
});


/* 
//routing contact
app.get('/contact', function (req, res) {
     fs.readFile('contact.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
});



//routing request
app.get('/request', function (req, res) {
     fs.readFile('request.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
});

//routing index
app.get('/index', function (req, res) {
     fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
});

//routing about
app.get('/about', function (req, res) {
     fs.readFile('about.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
});
 */



//server
const port = process.env.PORT || '8080';
app.listen(port, () => console.log(`Server started on Port ${port}`));  
