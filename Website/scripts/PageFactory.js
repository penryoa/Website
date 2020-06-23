// import TwoColumnTemplate from './TwoColumnTemplate';
// const TwoColumnTemplate = require('./path/to/Customer')

function PageFactory () {

	this.createPage = function(myTitle, myContent, type) {
		var pg;

		if (type=="StandardContentPage"){
			pg = new TwoColumnTemplate(myTitle, myContent);
		}

		return pg;
	}

}

/**
	Throws in helpers.js and has it load in the basic imports used all around. 
	This is here separately because this code will be used for every layout.
*/
function writeImports(){
	document.write("<script type=\"text/javascript\" src=\"../scripts/helpers.js\"></script>"
		// include other imports here
		+ "<script> loadBasicImports(); </script>");
}

// TODO: put this in separate file.
class TwoColumnTemplate {

	constructor(title, content){
		this.titleString = "Addi | " + title;
		this.bodyURL = "../pages/" + content + "_content.html";
	}

	writeBody(){
		document.write("<body>"
			+ "<div class=\"row\">"
			// <!-- Site navigation menu -->
			+ "<div id=\"nav-placeholder\" class=\"column left_two-column-layout\">"
			+ "<script> loadNavbar(); </script>"
			+ "</div>"
			// <!-- Main content -->
			+ "<div id=\"bodyID\" class=\"column right_two-column-layout pg_content\">"
			+ "</div></div>"
			+ "<script> load_url(\"" + this.bodyURL + "\");</script>"
			+ "</body>");
		
	}

}

/**
was a class, then a function, kind of anything. 
currently unused. 

var pageContainer = function (title, content) {
 	this.title = title;
 	this.content = content;
}
*/