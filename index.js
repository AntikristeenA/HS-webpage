


var nodemailer = require('nodemailer');

const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(express.urlencoded({extended: true}))

//Contact
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



//Request
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
	
	return res.redirect('/submitr.html');
res.end()
	
})

app.get('/', (req, res) => {
   res.send('index.html');
});


//redirect('index.html');


/*


app.get('/', (req, res) => {
   res.redirect('index.html');
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


