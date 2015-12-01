// main
angular.module("AngularApp", ['ngRoute'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
     when('/first', {
        templateUrl: 'first.html',
        controller: 'FirstController'
     }).
     when('/second', {
        templateUrl: 'second.html',
        controller: 'SecondController'
     }).
     when('/demo', {
        templateUrl: 'demo.html',
        controller: 'DemoController'
     }).
     otherwise({
       redirectTo: '/first'
     });
}])
.controller("FirstController", function($scope, $location) {

    $scope.goToSecond = function() {
        console.log("opening second view");
        $location.path('/second');
    };

})
.controller("SecondController", function($scope, $location) {

    $scope.goToFirst = function() {
        console.log("opening demo view");
        $location.path('/demo');
    };

});