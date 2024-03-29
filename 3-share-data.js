var myApp = angular.module('myApp', []);

myApp.factory('myData', function(){
	return { 
	
		messages: [
			'Message from a service',
			'Another message'
		],

		addMessage: function(newMessage){
			this.messages.push(newMessage);
		},

		removeMessage: function(index){
			this.messages.splice(index, 1);
		}
	
	};

});

myApp.controller('FirstCtrl', function($scope, myData){
	$scope.messages = myData.messages;

	$scope.addMessage = function(message){
		myData.addMessage(message);
	};

});

myApp.controller('SecondCtrl', function($scope, myData){
	$scope.messages = myData.messages;

	$scope.removeMessage = function(index){
		myData.removeMessage(index);
	};

});