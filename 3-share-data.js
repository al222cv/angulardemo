var myApp = angular.module('myApp', []);

myApp.factory('myData', function(){
	return { 
		message: 'Message from a service',

		setMessage: function(newMessage){
			this.message = newMessage;
		}
	};
});

myApp.controller('FirstCtrl', function($scope, myData){
	$scope.data = myData;

	$scope.changeMessage = function(message){
		myData.setMessage(message);
	};
})

myApp.controller('SecondCtrl', function($scope, myData){
	$scope.data = myData;
});