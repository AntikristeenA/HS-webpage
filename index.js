
var http = require('http');
var fs = require('fs');


var nodemailer = require('nodemailer');

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
	return res.redirect('/index.html');

res.end()
	
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


//routing request sent
//app.get('/request', function (req, res) {
     fs.readFile('form.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
//});
});
	//return res.redirect('/submitr.html');
//res.end()
	
})


//server
const port = process.env.PORT || '8080';
app.listen(port, () => console.log(`Server started on Port ${port}`)); 

//routing Landing page
app.get('/', (req, res) => {
   fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
});



//routing contact
app.get('/contact', function (req, res) {
     fs.readFile('Contact.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
});


//routing request
app.get('/request', function (req, res) {
     fs.readFile('form.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
});

/* 
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
 */





/*



app.get('/', (req, res) => {
   res.render('index.html');
});



const port = 8080;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});




const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

body('name', 'Empty name').isLength({ min: 1 }).withMessage('Name empty.'), 
body('age', 'Invalid age').optional({ checkFalsy: true }).isISO8601(),
sanitizeBody('name').trim().escape(),
sanitizeBody('date').toDate(),

(req, res, next) => {
    // Extract the validation errors from a request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        // There are errors. Render form again with sanitized values/errors messages.
        // Error messages can be returned in an array using `errors.array()`.
        }
    else {
        // Data from form is valid.
    }
}
 */
//


