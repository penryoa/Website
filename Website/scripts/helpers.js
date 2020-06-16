function loadNavbar() {
	var pageRefs = [
		["home", "../pages/index.html"],
		["about this site", "../pages/about-this-site.html"],
		["education & skills", "../pages/resume.html"]
		];

	document.write("<ul class=\"navbar__list\">");

	for (var i = 0; i < pageRefs.length; i++) {
		document.write("\n<li><a href=\"" + pageRefs[i][1] + "\">"+pageRefs[i][0]+"</a>");
	}
	// <li><a href="/pages/practice.html">coding practice</a>

	document.write("</ul>");
	document.write("<img src=\"../items/navbar_img.png\" id=\"navbar_img\" alt=\"some flowers\"width=100%>");
	document.write("<img src=\"../items/navbar_small_img.png\" id=\"navbar_small_img\" alt=\"some flowers\"width=100%>");
}

function loadBasicImports(){
	document.write("<meta charset=\"utf-8\"/>");
	document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"../stylesheets/stylesheet.css\"/>");
	document.write("<script src=\"https://code.jquery.com/jquery-1.10.2.js\"></script>");
}