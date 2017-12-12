const app = angular.module('app', []);

app.component('app', {
  controller: 'appController',
  templateUrl: 'templates/app.html',
});

app.controller('appController', ($scope, $http) => {
  $scope.board = null;

  $scope.handleclick = (number) => {
    $scope.getStartingBoard(number, number);
  };

  $scope.getStartingBoard = (x, y) => {
    $http.post('/start', { x, y })
      .then((response) => {
        $scope.board = response.data;
      });
  };

  $scope.getSuccessor = (currentBoard) => {
    $http.post('/successor', { currentBoard })
      .then((response) => {
        $scope.board = response.data.successor;
        if (response.data.isSame) {
          clearInterval($scope.refreshIntervalId);
        }
      });
  };

  $scope.refreshIntervalId = setInterval(() => {
    if ($scope.board != null) {
      $scope.getSuccessor($scope.board);
    }
  }, 1000);
});
