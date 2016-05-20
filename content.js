
var elements = document.getElementsByClassName("mytable");

for (var i = 0; i < elements.length; i++) {
			var element = elements[i];
			if (element.nodeName === "SELECT" && element.attributes["name"].value === "IN_TERM") {
				// add more options.
				
				//  && element.name =="IN_TERM"
				console.log(element);
				insertOptionsIntoSelect(element);
				
				break;
			}
}

function insertOptionsIntoSelect(form) {
		
		// todo: this should not be static.
		codes = ["201600", "201610", "201620", "201700", "201710", "201720"];
		names = ["Summer 2016", "Fall 2016", "Spring 2017", "Summer 2017", "Fall 2017", "Spring 2018"];
		
		for (var i = 0; i < codes.length; i++) {
			// make a new option.
			var newOption = document.createElement("option");
			newOption.value = codes[i];
			newOption.innerHTML = names[i];
			
			// add it to the list.
			form.appendChild(newOption);
		}
}