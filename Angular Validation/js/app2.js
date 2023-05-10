var validationApp = angular.module('validationApp',[]);

validationApp.controller('mainController',function($scope){
    $scope.sumbitForm = function(isValid){
        if(isValid){
            aflert('form is Valid');
        }
    };
});