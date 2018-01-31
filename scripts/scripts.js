var myApp = angular.module("myModule",[]);
/*var MyController = function($scope){
  $scope.message = "Hai how are you!!";
};*/
myApp.controller("MyController",function($scope){
  var employee = {
    firstName:"Lini",
    lastName:"Paul",
    gender:"Female",
    country:"India",
    state:"Kerala",
    city:"Kannur"
  };

  $scope.employee = employee;
});
