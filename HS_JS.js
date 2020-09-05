

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
			btn.onclick=function(){
			DL(this.name);;return false;
			};
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
			btn.onclick=function(){
			DL(this.name);;return false;
			};
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
		
		
		
	/* 	//loading script for downloading
	var dscript = document.createElement('script');
		
		dscript.src='https://antikristeena.github.io/HS-webpage/downloaddoc.js'
		//dl.appendChild(btn);
		var Bo = document.getElementById('bottomD');
		Bo.appendChild(dscript); */
	}
	
	

	
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
			
			btn.onclick=function(){
			DL(this.name);;return false;
			};
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
			btn.onclick=function(){
			DL(this.name);;return false;
			};
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
	
	/* //loading script for downloading
	var dscript = document.createElement('script');
		
		dscript.src='https://antikristeena.github.io/HS-webpage/downloaddoc.js'
		//dl.appendChild(btn);
		var Bo = document.getElementById('bottomD');
		Bo.appendChild(dscript); */
	
}

function homeContent()
{
	var dynamicContent = dynamicContedCleanUp();
	
	var Cform = document.createElement('div');
	dynamicContent.appendChild(Cform);
	Cform.id='bigLetters';
	Cform.innerHTML ='Free';
	
	var newLine = document.createElement('br');
	dynamicContent.appendChild(newLine);
	
	var Dform = document.createElement('div');
	dynamicContent.appendChild(Dform);
	Dform.id='mediumLetters';
	Dform.innerHTML ='Sound Library';
	
	var newLine = document.createElement('br');
	dynamicContent.appendChild(newLine);
	
	var Eform = document.createElement('div');
	dynamicContent.appendChild(Eform);
	Eform.id='normalLetters';
	Eform.innerHTML ='Free sound library and audio service for Your videos, commercials, animations, games...';
	
	var newLine = document.createElement('br');
	dynamicContent.appendChild(newLine);
	var newLine = document.createElement('br');
	dynamicContent.appendChild(newLine);
	var newLine = document.createElement('br');
	dynamicContent.appendChild(newLine);
	
	var rowEl = document.createElement('div');
	dynamicContent.appendChild(rowEl);
	rowEl.classList.add('row');
	
	var rowElcol3 = document.createElement('div');
	rowEl.appendChild(rowElcol3);
	rowElcol3.classList.add('col-sm-2');
	
	var rowElcol = document.createElement('div');
	rowEl.appendChild(rowElcol);
	rowElcol.classList.add('col-bg-6');
	
	var rowElButton = document.createElement('button');
	rowElcol.appendChild(rowElButton);
	rowElButton.classList.add('btn');
	rowElButton.innerHTML='Learn more';
	rowElButton.id='LMButton';
	rowElButton.onclick=function(){
		document.getElementById('about').click();
			;;return false;
	};
	
	var newLine = document.createElement('br');
	rowElcol.appendChild(newLine);
	var newLine = document.createElement('br');
	rowElcol.appendChild(newLine);
	var newLine = document.createElement('br');
	rowElcol.appendChild(newLine);
	var newLine = document.createElement('br');
	rowElcol.appendChild(newLine);
	var newLine = document.createElement('br');
	rowElcol.appendChild(newLine);
	var newLine = document.createElement('br');
	rowElcol.appendChild(newLine);
	var newLine = document.createElement('br');
	rowElcol.appendChild(newLine);
	var newLine = document.createElement('br');
	rowElcol.appendChild(newLine);
	var newLine = document.createElement('br');
	rowElcol.appendChild(newLine);

	
	var rowElcol2 = document.createElement('div');
	rowEl.appendChild(rowElcol2);
	rowElcol2.classList.add('col-sm-4');
	
}

function requestContent()
{
	var dynamicContent = dynamicContedCleanUp();
	
	var CformContainer = document.createElement('div');
	dynamicContent.appendChild(CformContainer);
	CformContainer.id='CformContainer';
	CformContainer.classList.add('float-right');
	
	var Cform = document.createElement('form');
	CformContainer.appendChild(Cform);
	Cform.action='/submitr';
	Cform.method='post';
	
	var newLine = document.createElement('br');
	Cform.appendChild(newLine);
	
	var CformLabelMail = document.createElement('label');
	Cform.appendChild(CformLabelMail);
	CformLabelMail.innerHTML = 'Your Email:';
	
	var newLine = document.createElement('br');
	Cform.appendChild(newLine);
	
	var CformMail = document.createElement('input');
	Cform.appendChild(CformMail);
	CformMail.type = 'text';
	CformMail.id = 'email';
	CformMail.name = 'emailr';
	CformMail.classList.add('form-control-lg');
	CformMail.classList.add('form-control');
	
	var newLine = document.createElement('br');
	Cform.appendChild(newLine);
	
	var CformLabelDescription = document.createElement('label');
	Cform.appendChild(CformLabelDescription);
	CformLabelDescription.innerHTML = 'Sound Description:';
	
	var newLine = document.createElement('br');
	Cform.appendChild(newLine);
	
	var CformDescription = document.createElement('textarea');
	Cform.appendChild(CformDescription);
	CformDescription.type = 'text';
	CformDescription.id = 'description';
	CformDescription.name = 'describer';
	CformDescription.style="height:200px; width:400px"
	CformDescription.classList.add('form-control-lg');
	CformDescription.classList.add('form-control');
	
	var newLine = document.createElement('br');
	Cform.appendChild(newLine);
	
/* 	var CformSubmition = document.createElement('input');
	Cform.appendChild(CformSubmition);
	CformSubmition.type = 'submit';
	CformSubmition.value = 'SUBMIT';
	CformSubmition.classList.add('btn');
	CformSubmition.classList.add('btn-block');
	CformSubmition.classList.add('btn-lg'); */
	
	var CformSubmition = document.createElement('input');
	Cform.appendChild(CformSubmition);
	CformSubmition.type = 'submit';
	CformSubmition.id = 'submitR';	
	
	var btnSub = document.createElement('button');
	Cform.appendChild(btnSub);
	btnSub.innerHTML = 'SUBMIT'
	btnSub.classList.add('btn');
	btnSub.classList.add('btn-block');
	btnSub.classList.add('btn-lg');
	btnSub.onclick=function(){
			alert('Your request has been sent!<br> If your contact is correct, we will get back to You soon.');;return false;
			CformSubmition.click();
			};
	
		

	
	var newLine = document.createElement('br');
	CformContainer.appendChild(newLine);
	var newLine = document.createElement('br');
	CformContainer.appendChild(newLine);
	var newLine = document.createElement('br');
	CformContainer.appendChild(newLine);
	var newLine = document.createElement('br');
	CformContainer.appendChild(newLine);
	var newLine = document.createElement('br');
	CformContainer.appendChild(newLine);
	
}



function contactContent()
{
	var dynamicContent = dynamicContedCleanUp();
	
	var CformContainer = document.createElement('div');
	dynamicContent.appendChild(CformContainer);
	CformContainer.id='CformContainer';
	CformContainer.classList.add('float-right');
	
	var Cform = document.createElement('form');
	CformContainer.appendChild(Cform);
	Cform.action='/submit';
	Cform.method='post';
	
	var CformLabel = document.createElement('label');
	Cform.appendChild(CformLabel);
	CformLabel.innerHTML = 'Your Name:';
	
	var newLine = document.createElement('br');
	Cform.appendChild(newLine);
	
	var CformName = document.createElement('input');
	Cform.appendChild(CformName);
	CformName.type = 'text';
	CformName.id = 'name';
	CformName.name = 'name';
	CformName.classList.add('form-control-lg');
	CformName.classList.add('form-control');
	
	var newLine = document.createElement('br');
	Cform.appendChild(newLine);
	
	var CformLabelMail = document.createElement('label');
	Cform.appendChild(CformLabelMail);
	CformLabelMail.innerHTML = 'Your Email:';
	
	var newLine = document.createElement('br');
	Cform.appendChild(newLine);
	
	var CformMail = document.createElement('input');
	Cform.appendChild(CformMail);
	CformMail.type = 'text';
	CformMail.id = 'email';
	CformMail.name = 'email';
	CformMail.classList.add('form-control');
	CformMail.classList.add('form-control-lg');
	
	var newLine = document.createElement('br');
	Cform.appendChild(newLine);
	
	var CformLabelDescription = document.createElement('label');
	Cform.appendChild(CformLabelDescription);
	CformLabelDescription.innerHTML = 'Sound Description:';
	
	var newLine = document.createElement('br');
	Cform.appendChild(newLine);
	
	var CformDescription = document.createElement('textarea');
	Cform.appendChild(CformDescription);
	CformDescription.type = 'text';
	CformDescription.id = 'description';
	CformDescription.name = 'description';
	CformDescription.style="height:200px; width:400px"
	CformDescription.classList.add('form-control');
	CformDescription.classList.add('form-control-lg');
	
	var newLine = document.createElement('br');
	Cform.appendChild(newLine);
	var newLine = document.createElement('br');
	Cform.appendChild(newLine);
	
	var CformSubmition = document.createElement('input');
	Cform.appendChild(CformSubmition);
	CformSubmition.type = 'submit';
	CformSubmition.id = 'submitC';
	 CformSubmition.value = 'SUBMIT';
	CformSubmition.classList.add('btn');
	CformSubmition.classList.add('btn-block');
	CformSubmition.classList.add('btn-lg'); 
	CformSubmition.onsubmit=function(){
			alert('Your request has been sent!<br> If your contact is correct, we will get back to You soon.');;return false;
			};
	
	/* var btnSub = document.createElement('button');
	Cform.appendChild(btnSub);
	btnSub.innerHTML = 'SUBMIT'
	btnSub.classList.add('btn');
	btnSub.classList.add('btn-block');
	btnSub.classList.add('btn-lg');
	btnSub.onclick=function(){
			alert('Your request has been sent!<br> If your contact is correct, we will get back to You soon.');;return false;
			CformSubmition.click();
			}; */
	
	
	
	var newLine = document.createElement('br');
	CformContainer.appendChild(newLine);


	
}



function hideAlert()
{
	var noFound = document.getElementById('noFound');
	noFound.style.visibility='hidden'; 
}

function hideSucess()
{
	var sucess = document.getElementById('sucess');
	sucess.style.visibility='hidden'; 
}

function showSucess()
{
	var sucess = document.getElementById('sucess');
	sucess.style.visibility='show'; 
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


function DL(filename){

    $.ajax({
        //url: 'https://howsoundsbucket.s3.eu-central-1.amazonaws.com/Downloads/'+filename+'.howsounds',
		url: 'https://howsoundsbucket.s3.eu-central-1.amazonaws.com/Sounds/'+filename+'.mp3',
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
}

function dynamicContedCleanUp(){
	document.getElementById('dynamicContent').remove();
	var dynamicContent = document.createElement('div');
	var contentContainer = document.getElementById('contentContainer');
	contentContainer.appendChild(dynamicContent);
	dynamicContent.id='dynamicContent';
	
	return(dynamicContent);
}


function copyrightF() {
	
	
	
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("copyright").innerHTML = '©'+ n +' HowSounds, Inc.  All Rights Reserved.';
}