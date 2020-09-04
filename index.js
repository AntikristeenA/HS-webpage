
var http = require('http');
const https = require("https");
var fs = require('fs');
//amazon
var AWS = require('aws-sdk');
var uuid = require('uuid');


//var formidable = require('formidable');

var nodemailer = require('nodemailer');
var url = require('url');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')





app.use(express.urlencoded({extended: true}))


//download



app.get('/download', (req, res) =>{
	
	const fname = req.body.nameDld
	res.download('https://antikristeena.github.io/HS-webpage/Sounds/'+fname+'.mp3');
	
	
});

/* 
//download
var download = function(url, dest, cb) {
  var file = fs.createWriteStream(dest);
  http.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);
    });
  });
}
app.get(fname, function (req, res) {
    var file = 'https://antikristeena.github.io/HS-webpage/Sounds/'+fname
	var dest ='Downloads'
    return download(file, dest);
});


 */

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
//routing contact sent
     fs.readFile('submitc.html', function(err, data) {
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


//routing request sent
     fs.readFile('submitr.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();

});

	
})




//routing Landing page
app.get('/', (req, res) => {
   fs.readFile('https://antikristeena.github.io/HS-webpage/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
});



//routing contact
app.get('/contact', function (req, res) {
     fs.readFile('https://antikristeena.github.io/HS-webpage/contact.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
});



//routing request
app.get('/request', function (req, res) {
     fs.readFile('https://antikristeena.github.io/HS-webpage/request.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
});

//routing index
app.get('/index', function (req, res) {
     fs.readFile('https://antikristeena.github.io/HS-webpage/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
});

//routing about
app.get('/about', function (req, res) {
     fs.readFile('https://antikristeena.github.io/HS-webpage/about.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
});
});


/* //SSL certificate
const hostname = 'howsounds.me';
const httpsPort = 443;

const httpsOptions = {
	cert: fs.readFileSync('CS/server.crt'),
	key: fs.readFileSync('CS/server.key')
};
const httpsServer = https.createServer(httpsOptions, app);

httpsServer.listen(httpsPort, hostname);
 */
























function searchF()
{

	//searching 
	var tag = document.getElementById("search").value;
	//soundsList.forEach(CreatePlayer(tag));	
	
		//errase players and buttons
	var ErraseMe = SearchErraser();
	
	
	//creating space in search results
	var space = document.createElement('br');
	ErraseMe.appendChild(space);
	var space2 = document.createElement('br');
	ErraseMe.appendChild(space2);
	
	


	//soundsList.forEach(CreatePlayer(tag));	
	
		var i;
		var j;
		j = 0;
		for (i = 0; i < soundsList.length; i++) {
		if (soundsList[i].tag.includes(tag))
		{
		j++;
		
		if (j%2==0)
		{
			//adding name of the record
			colAR.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;'+soundsList[i].name;
			
			//new line
			var nl = document.createElement('br');
			colAR.appendChild(nl);
			
			//adding audio
			var player = document.createElement('audio');
			player.src = 'https://howsoundsbucket.s3.eu-central-1.amazonaws.com/Sounds/'+soundsList[i].name+'.mp3';
			player.crossorigin="anonymous";
			player.type = "audio/mpeg";
			player.controls = 'controls';
			player.controlsList="nodownload";
			
			colAR.appendChild(player);
			
			//adding a line
			var hr = document.createElement('hr');
			colAR.appendChild(hr);
			
			//adding button
			var btn = document.createElement('button');
			var btnTxt = document.createTextNode("Download");
			btn.onclick="DL('soundsList[i].name')";
			btn.name=soundsList[i].name;
			btn.appendChild(btnTxt);
			
			
			colBR.appendChild(btn);
			btn.classList.add('download');
			btn.classList.add('btn');
			//btn.classList.add('btn-secondary');
			btn.classList.add('btn-block');
			btn.classList.add('btn-lg');
			btn.classList.add('pb-3');
			btn.classList.add('pt-3');
			btn.classList.add('mt-3');
			
		}else{
			
			//row create
			var row = document.createElement('div');
			ErraseMe.appendChild(row);
			row.classList.add('row');
			
			//create left column audio c
			var col = document.createElement('div');
			row.appendChild(col);
			col.classList.add('col-lg-4');
			
			
			
			//adding name of the record
			col.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;'+soundsList[i].name;	
			
			//new line
			var nl = document.createElement('br');
			col.appendChild(nl);
			
			//adding audio
			var player = document.createElement('audio');
			player.src = 'https://howsoundsbucket.s3.eu-central-1.amazonaws.com/Sounds/'+soundsList[i].name+'.mp3';
			player.crossorigin="anonymous";
			player.type = "audio/mpeg";
			player.controls = 'controls';
			player.controlsList="nodownload";
			col.appendChild(player);
			
			//adding a line
			var hr = document.createElement('hr');
			col.appendChild(hr);
			
			//column button create
			var col = document.createElement('div');
			row.appendChild(col);
			col.classList.add('col-lg-2');

			//adding button
			var btn = document.createElement('button');
			var btnTxt = document.createTextNode("Download");
			btn.onclick="DL('soundsList[i].name')";
			btn.name=soundsList[i].name;
			btn.appendChild(btnTxt);
			
			
			col.appendChild(btn);
			btn.classList.add('download');
			btn.classList.add('btn');
			//btn.classList.add('btn-secondary');
			btn.classList.add('btn-block');
			btn.classList.add('btn-lg');
			btn.classList.add('pb-3');
			btn.classList.add('pt-3');
			btn.classList.add('mt-3');
			
			
			//Right column audio create
			var colAR = document.createElement('div');
			row.appendChild(colAR);
			colAR.classList.add('col-lg-4');
			
			//Right column button create
			var colBR = document.createElement('div');
			row.appendChild(colBR);
			colBR.classList.add('col-lg-2');
			
			
			//adding flex
			var flexxx = document.createElement('div');
			var flexxx2 = document.createElement('div');
			colAR.appendChild(flexxx);
			colBR.appendChild(flexxx2);
			flexxx.style.width='300px';
			flexxx2.style.width='150px';

			}
		}
	}
	if (j==0)
	{
		SearchErraser();
		var noFound = document.getElementById('noFound');
		noFound.style.visibility='visible'; 
		
	}
	else{
		//close Button
		var closeButton = document.getElementById('closeButton');
		closeButton.style.visibility='visible';
	}
	//loading script for downloading
	/* var dscript = document.createElement('script');
		
		dscript.src='https://antikristeena.github.io/HS-webpage/downloaddoc.js'
		//dl.appendChild(btn);
		ErraseMe.appendChild(dscript); */
	

	
}


//function for categorie sorting
function category(cat)
{

	//setting colorDepth
	var blackbtn = document.getElementsByClassName('blackbtn');
	var i;
	for (i = 0; i < blackbtn.length; i++)
	{
		blackbtn[i].style.color = 'white';
	}
	
	var blackbtnColor = document.getElementById(cat+"B");
	blackbtnColor.style.color = 'orange';
	
	//errase players and buttons
	var ErraseMe = document.getElementById(cat+"E");
	ErraseMe.remove();
	ErraseMe = document.createElement('div');
	ErraseMe.id = cat+'E';
	var playerErasser  = document.getElementById(cat);
	playerErasser.appendChild(ErraseMe);
	

	//searching 
	var tag = cat
	//soundsList.forEach(CreatePlayer(tag));	
	
		var i;
		var j;
		j = 0;
		for (i = 0; i < soundsList.length; i++) {
		if (soundsList[i].tag.includes(tag))
		{
		j++;
		
		if (j%2==0)
		{
			//adding name of the record
			colAR.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;'+soundsList[i].name;
			
			//new line
			var nl = document.createElement('br');
			colAR.appendChild(nl);
			
			//adding audio
			var player = document.createElement('audio');
			player.src = 'https://howsoundsbucket.s3.eu-central-1.amazonaws.com/Sounds/'+soundsList[i].name+'.mp3';
			player.crossorigin="anonymous";
			player.type = "audio/mpeg";
			player.controls = 'controls';
			player.controlsList="nodownload";
			
			colAR.appendChild(player);
			
			//adding a line
			var hr = document.createElement('hr');
			colAR.appendChild(hr);
			
			//adding button
			var btn = document.createElement('button');
			var btnTxt = document.createTextNode("Download");
			btn.name=soundsList[i].name;
			btn.onclick="DL('soundsList[i].name')";
			btn.appendChild(btnTxt);
			
			colBR.appendChild(btn);
			btn.classList.add('download');
			btn.classList.add('btn');
			//btn.classList.add('btn-secondary');
			btn.classList.add('btn-block');
			btn.classList.add('btn-lg');
			btn.classList.add('pb-3');
			btn.classList.add('pt-3');
			btn.classList.add('mt-3');
			
		}else{
			
			//row create
			var row = document.createElement('div');
			ErraseMe.appendChild(row);
			row.classList.add('row');
			
			//create left column audio c
			var col = document.createElement('div');
			row.appendChild(col);
			col.classList.add('col-lg-4');
			
			
			
			//adding name of the record
			col.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;'+soundsList[i].name;	
			
			//new line
			var nl = document.createElement('br');
			col.appendChild(nl);
			
			//adding audio
			var player = document.createElement('audio');
			player.src = 'https://howsoundsbucket.s3.eu-central-1.amazonaws.com/Sounds/'+soundsList[i].name+'.mp3';
			player.crossorigin="anonymous";
			player.type = "audio/mpeg";
			player.controls = 'controls';
			player.controlsList="nodownload";
			col.appendChild(player);
			
			//adding a line
			var hr = document.createElement('hr');
			col.appendChild(hr);
			
			//column button create
			var col = document.createElement('div');
			row.appendChild(col);
			col.classList.add('col-lg-2');

			//adding button
			var btn = document.createElement('button');
			var btnTxt = document.createTextNode("Download");
			btn.name=soundsList[i].name;
			btn.onclick="DL('soundsList[i].name')";
			btn.appendChild(btnTxt);
			
			col.appendChild(btn);
			btn.classList.add('download');
			btn.classList.add('btn');
			//btn.classList.add('btn-secondary');
			btn.classList.add('btn-block');
			btn.classList.add('btn-lg');
			btn.classList.add('pb-3');
			btn.classList.add('pt-3');
			btn.classList.add('mt-3');
			
			
			//Right column audio create
			var colAR = document.createElement('div');
			row.appendChild(colAR);
			colAR.classList.add('col-lg-4');
			
			//Right column button create
			var colBR = document.createElement('div');
			row.appendChild(colBR);
			colBR.classList.add('col-lg-2');
			
			
			//adding flex
			var flexxx = document.createElement('div');
			var flexxx2 = document.createElement('div');
			colAR.appendChild(flexxx);
			colBR.appendChild(flexxx2);
			flexxx.style.width='300px';
			flexxx2.style.width='150px';

			}
		}
	}
	
	//loading script for downloading
	/* var dscript = document.createElement('script');
		
		dscript.src='https://antikristeena.github.io/HS-webpage/downloaddoc.js'
		//dl.appendChild(btn);
		ErraseMe.appendChild(dscript); */
	
}

function hideAlert()
{
	var noFound = document.getElementById('noFound');
	noFound.style.visibility='hidden'; 
}

function SearchErraser()
{
	var cat= 'searchField';
	var ErraseMe = document.getElementById(cat+"E");
	ErraseMe.remove();
	ErraseMe = document.createElement('div');
	ErraseMe.id = cat+'E';
	var playerErasser  = document.getElementById(cat);
	playerErasser.appendChild(ErraseMe);
	
	//close Button
	var closeButton = document.getElementById('closeButton');
	closeButton.style.visibility='hidden';
	return ErraseMe;
}


//function for enter in search
function keyF()
{
var input = document.getElementById("search");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    searchF()
	
  }
  
});
}


function clean(){
	document.getElementById('search').value='';
}

function searchValue(){
	var val =document.getElementById('search');
	if(val.value=='')
		val.value='Search sounds...';
}


function copyrightF() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("copyright").innerHTML = '©'+ n +' HowSounds, Inc.  All Rights Reserved.';
}




/* 
//download script
$('.download').on('click', function () {
	var filename = $(this).attr('name');
    $.ajax({
        url: 'https://howsoundsbucket.s3.eu-central-1.amazonaws.com/Downloads/'+filename+'.howsounds',
        method: 'GET',
        xhrFields: {
            responseType: 'blob'
        },
        success: function (data) {
            var a = document.createElement('a');
            var url = window.URL.createObjectURL(data);
            a.href = url;
            a.download = filename+'.mp3';
            document.body.append(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        }
    })
})
 */

//server
const port = process.env.PORT || '8080';
app.listen(port, () => console.log(`Server started on Port ${port}`));  
