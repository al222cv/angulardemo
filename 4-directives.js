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

myApp.directive('message', function(myData){
	return {
		restrict: 'E', //Kan vara E, A eller C
		
		scope: {
			text: '=',
		},
		
		template: '{{text}} <button ng-click="removeMessage()">X</button>',
		
		link: function(scope, element, attrs){
		
			scope.removeMessage = function(){
				myData.removeMessage(scope.$parent.$index);
			};
		
		// scope: {
		// 	text: '=',
		// 	hideDeleteButton: '@'
		// },
		// template: '{{text}} <button ng-hide="hideDeleteButton" ng-click="removeMessage()">X</button>',
		}
	}	
});

myApp.controller('FirstCtrl', function($scope, myData){
	$scope.messages = myData.messages;

	$scope.addMessage = function(message){
		myData.addMessage(message);
	};

});

myApp.controller('SecondCtrl', function($scope, myData){
	$scope.messages = myData.messages;
});