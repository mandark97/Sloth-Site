$(document).ready(function()
{
	$("#p1").mouseenter(function()
	{

		$("#p2").css("color","red");
	});
	$("#p1").mouseleave(function()
	{
		$("#p2").css("color","blue");
	});
	$("#p2").mouseenter(function()
	{

		$("#p1").css("color","red");
	});
	$("#p2").mouseleave(function()
	{
		$("#p1").css("color","blue");
	});
	$("#button").click(function()
	{
		var text=window.prompt("ceva");
		var nrPar=parseInt(text);
		var cuv=text.slice(2);
		var ceva;
		if(nrPar==1)
			ceva=$("#p1").text();
		else
			ceva=$("#p2").text();
		var rgx=new RegExp(cuv,"g");
		alert(ceva.match(rgx).length);
	});
			/*alert($("#p1").match(/cuv/g).length + "ds");
			}
		else
			alert($("#p2").match(/cuv/g).length + "ds");*/

	});