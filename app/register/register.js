'use strict';

angular.module('myApp.register', ['ngRoute','firebase', 'satellizer'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/register', {
    templateUrl: 'register/register.html',
    controller: 'RegisterCtrl'
  });
}])

.controller('RegisterCtrl', ['$scope','$location','$firebaseAuth','$auth', function($scope,$location,$firebaseAuth, $auth) {
 	$scope.mesg = 'Hello';
 	var firebaseObj = new Firebase("https://blistering-heat-2473.firebaseio.com");
var auth = $firebaseAuth(firebaseObj);

 var login={};
$scope.login=login;

 $scope.signUpTwitter = function(provider) {
      $auth.authenticate(provider);
    };

        $scope.signUpExpress = function () {
                $auth.signup($scope.user)
  .then(function(response) {
    // Redirect user here to login page or perhaps some other intermediate page
    // that requires email address verification before any other part of the site
    // can be accessed.
  })
  .catch(function(response) {
    // Handle errors here.
  });

        };
        

        $scope.signUp = function() {
    if (!$scope.regForm.$invalid) {
        var email = $scope.user.email;
        var password = $scope.user.password;
        if (email && password) {
	login.loading = true;
            auth.$createUser(email, password)
                .then(function() {
                    // do things if success
                    console.log('User creation success');
                    $location.path('/home');
                }, function(error) {
                    // do things if failure
                    console.log(error);
                    $scope.regError = true;
                    $scope.regErrorMessage = error.message;
                });
        }
    }
};
}]);
