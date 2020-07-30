/**
* loads the navbar into a div; this nav bar will be on the left side.
*
* no param, no return.
*
* TODO: take in @param {String} orientation. It tells if it's a top navbar, side nav bar, so on.
*
*/
function loadNavbar() {
	var pageRefs = [
		["home", "../pages/index.html"],
		["about this site", "../pages/about-this-site.html"],
		["about me", "../pages/about-me.html"],
		["education & skills", "../pages/resume.html"]
		];

	document.write('<nav class="navbar__list navbar__list_left">');

	for (var i = 0; i < pageRefs.length; i++) {
		document.write('\n<li><a href="' + pageRefs[i][1] + '">'+pageRefs[i][0]+'</a>');
	}
	// <li><a href="/pages/practice.html">coding practice</a>

	document.write('</nav>');
	// <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
	// <source media="(min-width:465px)" srcset="img_white_flower.jpg">
	// document.write("<picture>");
	
	document.write('<div class="d-none d-md-block"><img src="../items/navbar_img.png" alt="vertical flowers" width=100%></div>');
	document.write('<div class="d-block d-md-none"><img src="../items/navbar_small_img.png" alt="horizontal flowers" width=100%></div>');
	// document.write("</picture>");
	// return "</ul>" 
	// + "<img src=\"../items/navbar_img.png\" id=\"navbar_img\" alt=\"some flowers\"width=100%>" 
	// + "<img src=\"../items/navbar_small_img.png\" id=\"navbar_small_img\" alt=\"some flowers\"width=100%>";
}

/**
* TODO: make this work.
* loads the navbar into a div; this nav bar will be on the top.
*
* no param, no return.
*/
function loadNavbarTOP(){
	var pageRefs = [
		["home", "../pages/index.html"],
		["about this site", "../pages/about-this-site.html"],
		["about me", "../pages/about-me.html"],
		["education & skills", "../pages/resume.html"]
		];

	document.write('<nav id="navbar" class="navbar__list navbar__list_top">');

	for (var i = 0; i < pageRefs.length; i++) {
		document.write('\n<li><a href="' + pageRefs[i][1] + '">'+pageRefs[i][0]+'</a>');
	}

	document.write('</nav>');
}


/**
* loads the basic imports like the stylesheet and JQuery into a div. 
*
* no param, no return.
*/
function loadBasicImports(){
	document.write('<meta charset="utf-8"/>');
	document.write('<link rel="icon" type="image/png" href="../items/favicon.png"/>');
	document.write('<meta name="viewport" content="width=device-width, initial-scale=1">');
	document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">');
	document.write('<link rel="stylesheet 2" type="text/css" href="../stylesheets/stylesheet.css"/>');
	// document.write("<script src=\"https://code.jquery.com/jquery-1.10.2.js\"></script>");
	document.write('<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>');
	document.write('<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>');
	// + "<link rel=\"stylesheet\" type=\"text/css\" href=\"../stylesheets/stylesheet.css\"/>"
	// + "<script src=\"https://code.jquery.com/jquery-1.10.2.js\"></script>";
}

/**
* loads the basic imports like the stylesheet and JQuery into a div. 
*
* @param {String} url - the name of the file to be loaded 
* no return.
*/
function load_url(url) {
	// url = '../pages/' + url + '_content.html';
    // document.getElementById("bodyID").innerHTML='<object type="text/html" data="'+url+'" ></object>';
	$("#body-placeholder").load(url);
}

/**
* attempting to handle a sticky navbar at the top
*
* no param, no return.
* (requires navbar: id="nav-placeholder".)
*/
// function handle_sticky(){
// 	window.onscroll = function() {myFunction()};

// 	var navbar = document.getElementById("nav-placeholder");
// 	// var body = document.getElementById("bodyID");
// 	var sticky = navbar.offsetTop;

// 	function myFunction() {
// 	  if (window.pageYOffset > sticky) {
// 	    navbar.classList.add("sticky");
// 	    // body.classList.add("padded");
// 	  } else {
// 	    navbar.classList.remove("sticky");
// 	    // body.classList.remove("padded");
// 	  }
// 	}
// }


function handle_navbar() {
	var navbar = document.getElementById("nav-placeholder");
	var body = document.getElementById("body-placeholder");

	$(document).ready(function () {
		if ($(window).outerWidth > 768){
			navbar.classList.add("fixed-top");
			navbar.classList.add("one");
			body.classList.add("two");
		} else {
			navbar.classList.remove("fixed-top");
			navbar.classList.remove("one");
			body.classList.remove("two");
		}
	});
}

