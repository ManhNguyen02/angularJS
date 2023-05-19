// Create an angular module named "signupApp"
var app = angular.module("signupApp", []);

// Create a custom directive to compare two passwords
app.directive("compareTo", function() {
return {
require:"ngModel",
scope:{
otherModelValue:"=compareTo"
},
link:function(scope, element, attributes, ngModel) {

ngModel.$validators.compareTo = function(modelValue) {
return modelValue == scope.otherModelValue;
};

scope.$watch("otherModelValue", function() {
ngModel.$validate();
});
}
};
});

// Create a controller named "signupCtrl"
app.controller("signupCtrl", function($scope) {

// Initialize an object to store user data
$scope.user = {};

// Initialize a string to store the button text
$scope.buttonText = "Sign up";

// Define a function to submit the form
$scope.submitForm = function() {

// Check if the form is valid
if ($scope.signupForm.$valid) {

// Change the button text to indicate loading state
$scope.buttonText = "Signing up...";

// Simulate an asynchronous request to a server
setTimeout(function() {

// Reset the form fields
$scope.user = {};

// Reset the form state
$scope.signupForm.$setPristine();
$scope.signupForm.$setUntouched();

// Change the button text back to normal state
$scope.buttonText = "Sign up";

// Show an alert message
alert("You have signed up successfully!");

// Apply the changes to the scope
$scope.$apply();
},3000);

} else {

// Show an alert message
alert("Please fill in all the required fields.");

}

};

});
