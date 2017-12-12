const app = angular.module('app', [])

app.component('app', {
  controller: 'appController',
  templateUrl: 'templates/app.html',
});

app.controller('appController', ($scope, $http) => {
  $scope.board = [[1, 1, 1, 1], [0, 1, 0, 0], [1, 0, 1, 1]];

  $scope.getSuccessor = (currentBoard) => {
    $http.post('/successor', { currentBoard })
      .then((response) => {
        $scope.board = response.data;
      });
  };

  setInterval(() => {
    $scope.getSuccessor($scope.board);
  }, 1000);
});

// app.controller('appController', ($scope, $http) => {
//
//   $scope.board = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
//
//   $scope.getSuccessor = (currentBoard) => {
//     $http.post('/successor', { currentBoard: currentBoard })
//     .then(function(response) {
//       $scope.board = response.data;
//     }.bind(this));
//   };
//
//   setInterval(() => {
//     $scope.getSuccessor($scope.board);
//   }, 1000);
//
//
//
// });



// $scope.getSuccessor($scope.board);

// $http.post('/successor', { currentBoard: [[1, 1, 1], [1, 1, 1], [1, 1, 1]] })
// .then(function(response) {
//   $scope.board = response.data;
// }.bind(this));

//
// app.service('generateSuccessor', () => {
//   this.ones = () => [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
// });

//const app = angular.module('app', []);

// app.controller('appController', ['generateSuccessor', '$scope', ($scope, generateSuccessor) => {
//   $scope.callgenerateSuccessor = () => {
//     generateSuccessor();
//   };
// }]);
//
// app.factory('generateSuccessor', [() => {
//   console.log([[1, 1, 1], [1, 1, 1], [1, 1, 1]]);
//   return [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
// }]);
