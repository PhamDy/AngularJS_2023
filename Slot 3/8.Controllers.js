// var app = angular.module("myApp", []);
// app.controller("myCtrl", function($scope){
//     $scope.firstName = "Pham"
//     $scope.lastName = "Dy"
//     $scope.fullName = function(){
//         return $scope.firstName + " " + $scope.lastName;
//     };
// });

var app = angular.module("myApp", []);
app.controller("namesCtrl", function($scope){
    $scope.names = [
        {name: 'Jani', country: 'Norway'},
        {name: 'Hege', country: 'Sweden'},
        {name: 'Kaki', country: 'Denmark'},
    ];
});