var validationApp = angular.module('validationApp', []);

validationApp.controller('mainController', function ($scope){
    $scope.submitFor = function (isValid){
        if(isValid){
            alert('form is Valid');
        }
    };
    
});