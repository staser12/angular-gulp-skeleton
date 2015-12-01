angular.module("AngularApp")
  .constant("config", (function () {
      var test = "TEST";
      return {
          test: test
      };
  }()))
  .factory('DemoService', function (config) {
    return {
      config: config
    };
  });