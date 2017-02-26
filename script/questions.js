window.onload=function()
{
	var points=0;
	var form=document.forms["questions"];
	form.onsubmit=function()
	{
		console.log(form["q1"]);
		for(var i=0;i<form["q1"].length;i++)
			if(form["q1"][i].value=="true" && form["q1"][i].checked)
				points++;
		if(form["q2"].value=="20")
				points++;
		for(var i=0;i<form["q3"].length;i++)
			if(form["q3"][i].value=="true" && form["q3"][i].checked)
				points++;
		for(var i=0;i<form["q4"].length;i++)
			if(form["q4"][i].value=="true" && form["q4"][i].checked)
				points++;
		for(var i=0;i<form["q5"].length;i++)
			if(form["q5"][i].value=="true" && form["q5"][i].checked)
				points++;
		if(form["q6"].value=="4")
			points++;
		alert("congratulations, you answered correctly at "+points+" questions");
	}
}