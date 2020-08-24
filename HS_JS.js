

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
		
		
		
		
		
		
/* 		
		//download
		var dl = document.createElement('a');
		dl.href = 'https://howsoundsbucket.s3.eu-central-1.amazonaws.com/Downloads/'+soundsList[i].name+'.howsounds';
		dl.crossorigin="anonymous";
		dl.download =soundsList[i].name+'.mp3';
		div.appendChild(dl);  */ 
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
		btn.id ='btndwl';
		btn.name=soundsList[i].name;
		btn.onclick="DL('soundsList[i].name')";
		btn.appendChild(btnTxt);
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

$('#btndwl').on('click', function () {
	var filename = $('#btndwl').attr('name');
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
});
	
}

