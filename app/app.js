'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.register',
  'myApp.welcome',
  'myApp.addPost',
  'myApp.test',
  'satellizer'
]).
config(['$routeProvider', '$authProvider', function($routeProvider, $authProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
