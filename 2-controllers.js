function FirstCtrl($scope){
	$scope.message = 'hello';

	$scope.changeMessage = function(){
		$scope.message = 'good bye';
	};
}

function SecondCtrl($scope){
	$scope.message = 'Hello from SecondCtrl';
}