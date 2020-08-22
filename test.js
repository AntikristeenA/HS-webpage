
const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(express.urlencoded({extended: true}))

app.get('/download', (req, res) => {
	
	//const fname = req.body.nameDld
	//res.download('https://antikristeena.github.io/HS-webpage/Sounds/'+fname+'.mp3');
	res.download('Sounds/cloth sound.mp3');
  //res.send('supp');

});


	app.get('/', function (req, res) {
  res.send('hello world')
})

const port = process.env.PORT || '8080';
app.listen(port, () => console.log(`Server started on Port ${port}`)); 