window.onload=function()
{
	$("#slothStuff").click(start);
}
function start()
{
	var audio=new Audio();
	audio.src="../images/SlothSong.mp3"
	audio.play();
	audio.addEventListener('ended', function() {location.reload();});
	var elements=document.getElementsByTagName("*");
	for(var i=0;i<elements.length;i++)
	{
		elements[i].style.position = 'fixed';
		elements[i].style.left=(Math.random()*1000+1)+'px';
		elements[i].style.top=(Math.random()*1000+1)+'px';
		elements[i].style.background=getRandomColor();
	}
	randomStuff();
	//var animate=setInterval(randomStuff,5);
}
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
function randomStuff()
{
	var dir="../images/randomStuff/";
	var fileext=".jpg";
	var i=1;
	var timeout=setInterval(function(){
		if(i==78)
			clearInterval(timeout);
		else
		{
			$("<img />").attr('src',dir+'sloth ('+i+')'+fileext)
			.css({"position":"fixed","left":((Math.random()*500+1)+'px'),"top":((Math.random()*500+1)+'px'),
				"transform":"rotate("+(Math.random()*90+1)+"deg)"})
			.appendTo("body");
			i++;}
		},1000);
}
