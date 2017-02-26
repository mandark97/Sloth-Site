window.onload=function()
{

	
	var start=document.getElementById("start");
	var player=document.getElementById("player");
	player.style.position = "absolute";
	player.style.left=100+'px';
	player.style.top=300+'px';
	playerPositionx=100;
	playerPositiony=300;
	var fruit=document.getElementById("fruit");
	fruit.style.position = 'absolute';
	fruit.style.left=300+'px';
	fruit.style.top=300+'px';
	var scor=document.getElementById("scor");
	var points=0;
	var time=10;
	start.onclick=function()
	{
		
		timer=setInterval(function(){time--;$("#time").text(time);},1000);
		setTimeout(magie,10*1000);
		window.onkeydown=function(event)
		{
			if(event.keyCode==68)
			{
				playerPositionx=Number(playerPositionx)+10;
				player.style.left=playerPositionx+'px';
			}
			if(event.keyCode==87)
			{

				playerPositiony=Number(playerPositiony)-10;
				player.style.top=playerPositiony+'px';
			}
			if(event.keyCode==83)
			{
				playerPositiony=Number(playerPositiony)+10;
				player.style.top=playerPositiony+'px';
			}
			if(event.keyCode==65)
			{

				playerPositionx=Number(playerPositionx)-10;
				player.style.left=playerPositionx+'px';
			}
			if(Math.abs(Number(playerPositiony)-parseInt(fruit.style.top))<50 && Math.abs(Number(playerPositionx)-parseInt(fruit.style.left))<50)
			{
				fruit.style.left=(300+Math.random()*300+1)+'px';
				fruit.style.top=(300+Math.random()*300+1)+'px';
				scor.innerHTML=++points;
			}
			console.log(playerPositionx+"\n"+playerPositiony+"\n");
			console.log(fruit.style.left+'\n'+fruit.style.top);
			
		}
	}
}
function magie()
{
	player.style.left=100+'px';
	player.style.top=300+'px';
	playerPositionx=100;
	playerPositiony=300;
	fruit.style.left=300+'px';
	fruit.style.top=300+'px';
	points=0;
	scor.innerHTML=points;
	time=10;
	clearInterval(timer);
	$("#time").text(time);
	window.onkeydown=function(){};
}