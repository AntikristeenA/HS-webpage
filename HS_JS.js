

function searchF()
{
	//erase players	
	var remplayers = document.getElementById("playerEraser");
	remplayers.remove();
	//create div as a cointainer for players
	var playerErase = document.createElement('div');
	playerErase.id =  "playerEraser";
	var div = document.getElementById("players");
	div.appendChild(playerErase);
	//searching 
	var tag = document.getElementById("search").value;
	//soundsList.forEach(CreatePlayer(tag));	
	
		var i;
		for (i = 0; i < soundsList.length; i++) {
		if (soundsList[i].tag.includes(tag))
		{
		
		var player = document.createElement('audio');
		//player.id = "player";
		player.src = 'https://howsoundsbucket.s3.eu-central-1.amazonaws.com/Sounds/'+soundsList[i].name+'.mp3';
		player.crossorigin="anonymous";
		player.type = "audio/mpeg";
		player.controls = 'controls';
		//player.preload='auto';
		player.controls = 'download';
		var div = document.getElementById("playerEraser");
		div.appendChild(player);
		
	 
	 var btn = document.createElement('button');
		var btnTxt = document.createTextNode("Download");
		btn.id ='btndwl';
		
		btn.name=soundsList[i].name;
		btn.onclick="DL('soundsList[i].name')";
		
		btn.appendChild(btnTxt);
		//btn.classList.add("btn btn-secondary btn-block btn-lg pb-3 pt-3");
		//dl.appendChild(btn);
		div.appendChild(btn);
		
		
		
		
		
		
/* 		
		//hidden input
		var nameDld = document.createElement('input');
		nameDld.value =soundsList[i].name ;
		nameDld.type="hidden";
		nameDld.name = 'nameDld';
		dl.appendChild(nameDld);
		 */
		//new line
		var nl = document.createElement('br');
		div.appendChild(nl);
		}
	}
	
	//loading script for downloading
	var dscript = document.createElement('script');
		
		dscript.src='https://antikristeena.github.io/HS-webpage/downloaddoc.js'
		//dl.appendChild(btn);
		div.appendChild(dscript);
	
}



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
