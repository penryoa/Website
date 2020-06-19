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

	constructor(t, c){
		this.titleString = "Addi | " + t;
		this.bodyHTML = c;
	}

	writeBody(){
		document.write("<body>"
			+ "<div class=\"row\">"
			// <!-- Site navigation menu -->
			+ "<div id=\"nav-placeholder\" class=\"column left_two-column-layout\">"
			+ "<script> loadNavbar(); </script>"
			+ "</div>"
			// <!-- Main content -->
			+ "<div class=\"column right_two-column-layout pg_content\">"
			+ this.bodyHTML
			+ "</div></div></body>");
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