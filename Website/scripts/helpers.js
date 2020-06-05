function loadNavbar() {
	var pageRefs = [["home", "../pages/index.html"],
		["release info", "../pages/release-info.html"],
		["resume", "../pages/resume.html"]];

	document.write("<ul class=\"navbar__list\">");

	for (var i = 0; i < pageRefs.length; i++) {
		document.write("\n<li><a href=\"" + pageRefs[i][1] + "\">"+pageRefs[i][0]+"</a>");
	}
	// <li><a href="/pages/practice.html">coding practice</a>

	document.write("</ul>");
}