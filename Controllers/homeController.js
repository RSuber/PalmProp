 module.exports = function(app) {
    app.controller('homeController', ['$scope', '$location',function($scope, $location) {
      $scope.myInterval = 3000;
        $scope.slides = [
          {
            image: '/Images/StockSnap_L9VZ6SOGBB.jpg'
          },
          {
            image: '/Images/StockSnap_Q5T8D3FB2E.jpg'
          },
          {
            image: '/Images/StockSnap_QSZKSNAIYN.jpg'
          },
          {
            image: '/Images/StockSnap_T77502ZQ5U.jpg'
          }
        ];
    }]);
};
