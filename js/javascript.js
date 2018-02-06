$(document).ready(function(){
	$.getJSON("https://api.fixer.io/latest", function(data){
		//var data_parsed = JSON.parse(data);
		console.log(data);
		document.getElementById("dades").innerHTML ="Divisa base:"+data.base+"<br/>";
		document.getElementById("dades").innerHTML +="Data:"+data.date+"<br/>";
		document.getElementById("dades").innerHTML +="Canvis<br/>";
	    document.getElementById("dades").innerHTML +="USD: "+data.rates.USD+"<br/>";
	    document.getElementById("dades").innerHTML +="AUD: "+data.rates.AUD+"<br/>";
	    document.getElementById("dades").innerHTML +="GBP: "+data.rates.GBP+"<br/>";
	    document.getElementById("dades").innerHTML +="JPY: "+data.rates.JPY+"<br/>";
	});

});
