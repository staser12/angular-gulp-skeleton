angular.module("AngularApp")
    .controller("DemoController", function(DemoService, $scope, $location) {
        $scope.configFromFactory = DemoService.config.test;

        $scope.goToFirst = function() {
            console.log("opening first view");
            $location.path('/first');
        };
    });