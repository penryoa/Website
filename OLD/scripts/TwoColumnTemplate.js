// import * from './PageContainer.js';

export default class TwoColumnTemplate {
	constructor(t, c) {
		this.titleString = "Addi | " + t;
		this.bodyHTML = c;
	}

	writeBody() {
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




// TODO: there's no JavaScript interfaces, but things that kind of simulate it. may be worth trying or not, idk.
// class TwoColumnPageType {

// 	constructor(pg){
// 		this.pageContainer = pg;
// 	}

// 	// function createHTML(){
// 	// 	return getHeader() + getBody() + getFooter();
// 	// }

// 	getHeader(){
// 		return ""
// 		// "<!DOCTYPE html>" 
// 			+ "<html><head>"
// 			+ "<title>Addi's Site | " + pg.title + "</title>"
// 			+ "<script type=\"text/javascript\" src=\"../scripts/helpers.js\"></script>"
// 			// include imports later
// 			+ "<script> loadBasicImports(); </script></head>";
// 	}

// 	getBody(){
// 		return "<body>"
// 			+ "<div class=\"row\">"
// 			// <!-- Site navigation menu -->
// 			+ "<div id=\"nav-placeholder\" class=\"column left_two-column-layout\">"
// 			+ "<script> loadNavbar(); </script>"
// 			+ "</div>"
// 			// <!-- Main content -->
// 			+ "<div class=\"column right_two-column-layout pg_content\">"
// 			+ pg.htmlContent
// 			+ "</div></div></body>";
// 	}

// }




