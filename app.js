var xyz = document.getElementById('hel');

fetch("https://pomber.github.io/covid19/timeseries.json")
.then(response => response.json())
.then(data=>populateTable(data));

function populateTable(data)
{
	 var tbl = document.createElement("TABLE");
	 tbl.setAttribute("id", "myTable");
	 tbl.setAttribute("class","table table-striped");
	 
	 var tHead = tbl.createTHead();
	 tHead.setAttribute("id", "tHead");
	 
	 var row = tHead.insertRow(0);
	 var cell =row.insertCell(0);
	 cell.innerHTML = "<b>Countries</b>"
	 
	 var cell1 =row.insertCell(1);
	 cell1.innerHTML = "<b>Counts</b>"
	 
	 xyz.appendChild(tbl);
	
	var tbody = document.createElement("TBODY");
	
	document.getElementById("myTable").appendChild(tbody)
	
	var totalCount =0;
		
	for(country in data)
	{		
		var y = document.createElement("TR");
	
		tbody.appendChild(y);

		var z = document.createElement("TD");
		var t = document.createTextNode(country);
		z.appendChild(t);
		
		var z1 = document.createElement("TD");
		var casesInCountry = data[country][data[country].length-1].confirmed;
		totalCount  = totalCount + casesInCountry;
		var t1 = document.createTextNode(casesInCountry);
		z1.appendChild(t1);
		
		y.appendChild(z);
		y.appendChild(z1);
			
	}
//	xyz.innerText +=totalCount;	
}