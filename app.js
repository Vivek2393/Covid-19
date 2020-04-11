var helloApp = angular.module("helloApp", []);

helloApp.controller("CompanyCtrl",ctrl1);

function  ctrl1($scope,$http)
{
	$scope.vale = "XYZ";
	$http.get('https://pomber.github.io/covid19/timeseries.json')
	.then(function (response)
	{
		$scope.companies = response.data;
		$scope.countries = []
		
		for(country in $scope.companies )
		{	$scope.mixed= []		
			$scope.mixed.push(country);
			$scope.mixed.push($scope.companies[country][$scope.companies[country].length-1].confirmed)
			$scope.countries.push($scope.mixed);
		}
		
	   	 $scope.propertyName = 0;
		  $scope.reverse = true;
		  $scope.sortBy = function(propertyName) 
		  {
			$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
			$scope.propertyName = propertyName;
			
		
		  };
		
	});
};