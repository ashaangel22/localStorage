var form = document.getElementById("form");

form.addEventListener("submit", function(e){
	e.preventDefault();
	console.log("submit");
	var formData = new FormData(form);
	var entries = {};
	for(var pair of formData.entries()){
		console.log(pair);
		entries[pair[0]] = pair[1];
	}
	console.log(entries);
	var JSONData = JSON.stringify(entries);
	localStorage.setItem(entries.genre, JSONData);
	console.log(localStorage);
});