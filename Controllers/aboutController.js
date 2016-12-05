module.exports = function(app) {
    app.controller('aboutController', ['$scope', '$location',function($scope, $location) {
      console.log("working")
      new GMaps({
    div: '#map',
    lat: -12.043333,
    lng: -77.028333
  });
    }]);
};
