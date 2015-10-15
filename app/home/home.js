'use strict';

angular.module('myApp.home', ['ngRoute','firebase', 'satellizer'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','$location','CommonProp','$firebaseAuth', '$auth',function($scope,$location,CommonProp,$firebaseAuth, $auth) {
var login={};
        $scope.loginExpress = function(provider) {
            // var user = {
            //   email: $scope.email,
            //   password: $scope.password
            // };
                login.loading = true;

            console.log($scope.user);
            $auth.login($scope.user)
            .then(function (reresponses) {
                        login.loading = false;

                console.log('in success');
                $location.path('/welcome');

            })
            .catch(function(response) {
    // Handle errors here, such as displaying a notification
    // for invalid email and/or password.
    console.log(response);
                $location.path('/welcome');
  });
        };

 var firebaseObj = new Firebase("https://blistering-heat-2473.firebaseio.com");
    var loginObj = $firebaseAuth(firebaseObj);

    loginObj.$onAuth(function(authData) {
    if(authData){
        CommonProp.setUser(authData.password.email);
        $location.path('/welcome');
    }
 });
  
  $scope.user = {};
  var login={};

$scope.test = function(){
	login.loading = true;
}

$scope.login=login;
  $scope.SignIn = function(e) {
    login.loading = true;
    e.preventDefault();
    var username = $scope.user.email;
    var password = $scope.user.password;
    loginObj.$authWithPassword({
            email: username,
            password: password
        })
        .then(function(user) {
            //Success callback
		login.loading = false;
            console.log('Authentication successful');
	CommonProp.setUser(user.password.email);
		$location.path('/welcome');
        }, function(error) {
            //Failure callback
		login.loading = false;
            console.log('Authentication failure');
        });
}
}])
.service('CommonProp',['$location','$firebaseAuth',function($location,$firebaseAuth) {
    var user = '';
    var firebaseObj = new Firebase("https://blistering-heat-2473.firebaseio.com");
    var loginObj = $firebaseAuth(firebaseObj);
  
    return {
        getUser: function() {
            if(user == ''){
                user = localStorage.getItem('userEmail');
            }
            return user;
        },
        setUser: function(value) {
            localStorage.setItem("userEmail", value);
            user = value;    
        },
        logoutUser:function(){
            loginObj.$unauth();
            user='';
            localStorage.removeItem('userEmail');
            $location.path('/home');
        }
    };
}])
.directive('laddaLoading', [
    function() {
        return {
            link: function(scope, element, attrs) {
                var Ladda = window.Ladda;
                var ladda = Ladda.create(element[0]);
                // Watching login.loading for change
                scope.$watch(attrs.laddaLoading, function(newVal, oldVal) {
                    // if true show loading indicator
                    if (newVal) {
                        ladda.start();
                    } else {
                        ladda.stop();
                    }
                });
            }
        };
    }
]);
