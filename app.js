var xyz = document.getElementById('hel');

fetch("https://pomber.github.io/covid19/timeseries.json")
.then(response => response.json())
.then(data=>populateTable(data));

function populateTable(data)
{
	 var x = document.createElement("TABLE");
	 x.setAttribute("id", "myTable");
	 document.body.appendChild(x);
		
	for(country in data)
	{
		var y = document.createElement("TR");
		y.setAttribute("id", "myTr");
		document.getElementById("myTable").appendChild(y);

		var z = document.createElement("TD");
		var t = document.createTextNode(country);
		z.appendChild(t);
		
		var z1 = document.createElement("TD");
		var t1 = document.createTextNode(data[country][data[country].length-1].confirmed);
		z1.appendChild(t1);
		
		y.appendChild(z);
		y.appendChild(z1);
			
	}
	xyz.innerText =data['India'][data['India'].length-1].confirmed;
}