/* 
//OPTION 2: using a controller
app.controller("myCtrl", function($scope) {
  $scope.firstName = "John";
  $scope.lastName= "Doe";
});
*/

 
//OPTION 3: using a directive
app.directive("testingOneDiv", function() {
	return {
		template : "<h1>Made by Directive ONE!</h1> <p>This is pretty cool to write in the first directive.</p>"
  	};
});

app.directive("testingTwoDiv", function(){
	return {
    	template : "<h1>Made by Directive TWO!</h1> <p>This is pretty cool to write in the second directive.</p>"
  };
});

app.controller("testingController",function($scope) {
	$scope.favWord = "iridosiclitis";
	$scope.yourFavWord = "..?";
});


/*
// Lol bad attempt, but trying
app.controller("indexContent", function($scope){
	$scope.content = "<p> click on the links on the right to do stuff my dude<p><c1>Testing one font? What do u think?</c1><p><c2>Testing one font? What do u think?</c2><p><c3>Testing one font? What do u think?</c3><p><c4>Testing one font? What do u think?</c4>"
})
*/
