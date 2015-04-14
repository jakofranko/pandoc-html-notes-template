// Get the headings
var headings = document.querySelectorAll("h1");

// Create the table of contents and insert it at the beginning of the document
var toc = document.createElement("div");
toc.setAttribute("class", "toc");

var tocHeader = document.createElement("h1");
tocHeader.innerHTML = "Table of Contents";
toc.appendChild(tocHeader);

var list = document.createElement("ul");
toc.appendChild(list);

for(var i in headings) {
	var h = headings[i],
		target = h.id,
		text = h.innerHTML;

	if(target != undefined || text != undefined) {
		var link = document.createElement("a");
	link.setAttribute("href", "#" + target);
	link.innerHTML = text;

	var listItem = document.createElement("li");
	listItem.appendChild(link);

	toc.getElementsByTagName("ul")[0].appendChild(listItem);	
	}
}

var container = document.getElementsByClassName("container");
var firstChild = container[0].firstChild;

firstChild.parentNode.insertBefore(toc, firstChild);