

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
		//player.preload='auto';
		
		player.controls = 'download';
		var div = document.getElementById("playerEraser");
		div.appendChild(player);
		//download
		var dl = document.createElement('a');
		dl.href = 'https://antikristeena.github.io/HS-webpage/Download/'+soundsList[i].name+'.jj';
		dl.download =soundsList[i].name+'.mp3';
		div.appendChild(dl);  
/* 		
		var dl = document.createElement('form');
		dl.action ='/download';
		dl.target ='_blank';
		dl.method = 'get';
		div.appendChild(dl);
		
		
		//dl.href = 'https://antikristeena.github.io/HS-webpage/Sounds/'+soundsList[i].name+'.mp3';
		//dl.download ='';
		
		//button
		var nameFile = document.createElement('label');
		var nameFileTxt = document.createTextNode(soundsList[i].name);
		nameFile.appendChild(nameFileTxt);
		dl.appendChild(nameFile);
		
		var btn = document.createElement('input');
		btn.type ="submit";
		var btnTxt = document.createTextNode("Download");
	 */
	 
	 var btn = document.createElement('button');
		var btnTxt = document.createTextNode("Download");
	 
		btn.appendChild(btnTxt);
		dl.appendChild(btn);
		
		
		//hidden input
		var nameDld = document.createElement('input');
		nameDld.value =soundsList[i].name ;
		nameDld.type="hidden";
		nameDld.name = 'nameDld';
		dl.appendChild(nameDld);
		
		//new line
		var nl = document.createElement('br');
		div.appendChild(nl);
		}
	}	
}


