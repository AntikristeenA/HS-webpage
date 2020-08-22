

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
		player.src = 'https://antikristeena.github.io/HS-webpage/Sounds/'+soundsList[i].name+'.mp3';
		player.type = "audio/mpeg";
		player.controls = 'controls';
		
		player.controls = 'download';
		var div = document.getElementById("playerEraser");
		div.appendChild(player);
		//download
		var dl = document.createElement('a');
		dl.href = 'https://antikristeena.github.io/HS-webpage/Sounds/'+soundsList[i].name+'.mp3';
		dl.download ='';
		div.appendChild(dl);
		//button
		var btn = document.createElement('button');
		var btnTxt = document.createTextNode("Download");
		btn.appendChild(btnTxt);
		dl.appendChild(btn);
		
		//new line
		var nl = document.createElement('br');
		div.appendChild(nl);
		}
	}	
}


