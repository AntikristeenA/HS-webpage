

function searchF()
{
	//errase players and buttons
	var ErraseMe = document.getElementById("ErraseMe");
	ErraseMe.remove();
	ErraseMe = document.createElement('div');
	ErraseMe.id = 'ErraseMe';
	var playerErasser  = document.getElementById("playerErasser");
	playerErasser.appendChild(ErraseMe);
	

	//searching 
	var tag = document.getElementById("search").value;
	//soundsList.forEach(CreatePlayer(tag));	
	
		var i;
		for (i = 0; i < soundsList.length; i++) {
		if (soundsList[i].tag.includes(tag))
		{
		//row create
		var row = document.createElement('div');
		ErraseMe.appendChild(row);
		row.classList.add('row');
		
		//column audio create
		var col = document.createElement('col');
		row.appendChild(col);
		col.classList.add('col-lg-8');
		
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
		player.controls = 'download';
		col.appendChild(player);
		
		
		//column button create
		var col = document.createElement('col');
		row.appendChild(col);
		col.classList.add('col-lg-4');
		
		//adding button
		var btn = document.createElement('button');
		var btnTxt = document.createTextNode("Download");
		btn.onclick="DL('soundsList[i].name')";
		btn.appendChild(btnTxt);
		
		col.appendChild(btn);
		btn.classList.add('download');
		btn.classList.add('btn');
		btn.classList.add('btn-secondary');
		btn.classList.add('btn-block');
		btn.classList.add('btn-lg');
		btn.classList.add('pb-3');
		btn.classList.add('pt-3');
		btn.classList.add('mt-3');
		
		
		
/* 		
		//adding d-flex field audio
		var playerFlex = document.createElement('div');
		playerFlex.id =  "playerFlex";
		var div = document.getElementById("playerEraser");
		div.appendChild(playerFlex);
		
		
		//name of the record
		playerFlex.innerHTML = '- '+soundsList[i].name;	
		
		//new line
		var nl = document.createElement('br');
		playerFlex.appendChild(nl);
		
		//if we need to add class
		//playerFlex.classList.add('');
		
		//adding d-flex field button
		
		var playerFlexB = document.createElement('div');
		playerFlexB.id =  "erButton";
		var divB = document.getElementById("DlButton");
		divB.appendChild(playerFlexB);
		
		//if we need to add class
		//playerFlexB.classList.add('');
			
		
		
		var player = document.createElement('audio');
		//player.id = "player";
		player.src = 'https://howsoundsbucket.s3.eu-central-1.amazonaws.com/Sounds/'+soundsList[i].name+'.mp3';
		player.crossorigin="anonymous";
		player.type = "audio/mpeg";
		player.controls = 'controls';
		//player.preload='auto';
		player.controls = 'download';
		var div = document.getElementById("playerFlex");
		div.appendChild(player);
		
		
	 
	 var btn = document.createElement('button');
		var btnTxt = document.createTextNode("Download");
		btn.id ='btndwl';
		btn.name=soundsList[i].name;
		btn.onclick="DL('soundsList[i].name')";
		btn.appendChild(btnTxt);
		
		
		playerFlexB.appendChild(btn);
		
		//download button style
		//class download is important for downloading function
		btn.classList.add('download');
		btn.classList.add('btn');
		btn.classList.add('btn-secondary');
		btn.classList.add('btn-block');
		btn.classList.add('btn-lg');
		btn.classList.add('pb-3');
		btn.classList.add('pt-3');
		//btn.classList.add('mb-5');
		btn.classList.add('mt-3');


		//new line
		var nl = document.createElement('br');
		div.appendChild(nl); */
		}
	}
	
	//loading script for downloading
	var dscript = document.createElement('script');
		
		dscript.src='https://antikristeena.github.io/HS-webpage/downloaddoc.js'
		//dl.appendChild(btn);
		ErraseMe.appendChild(dscript);
	
}


//function for categorie sorting
function category(cat)
{

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
		for (i = 0; i < soundsList.length; i++) {
		if (soundsList[i].tag.includes(tag))
		{
		//row create
		var row = document.createElement('div');
		ErraseMe.appendChild(row);
		row.classList.add('row');
		
		//column audio create
		var col = document.createElement('col');
		row.appendChild(col);
		col.classList.add('col-lg-8');
		
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
		player.controls = 'download';
		col.appendChild(player);
		
		
		//column button create
		var col = document.createElement('col');
		row.appendChild(col);
		col.classList.add('col-lg-4');
		
		//adding button
		var btn = document.createElement('button');
		var btnTxt = document.createTextNode("Download");
		btn.onclick="DL('soundsList[i].name')";
		btn.appendChild(btnTxt);
		
		col.appendChild(btn);
		btn.classList.add('download');
		btn.classList.add('btn');
		btn.classList.add('btn-secondary');
		btn.classList.add('btn-block');
		btn.classList.add('btn-lg');
		btn.classList.add('pb-3');
		btn.classList.add('pt-3');
		btn.classList.add('mt-3');
		}
	}
	
	//loading script for downloading
	var dscript = document.createElement('script');
		
		dscript.src='https://antikristeena.github.io/HS-webpage/downloaddoc.js'
		//dl.appendChild(btn);
		ErraseMe.appendChild(dscript);
	
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




function copyrightF() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("copyright").innerHTML = '©'+ n +' HowSounds, Inc.  All Rights Reserved.';
}