'use strict';

angular.module('reviewCloudApp')
  .controller('MainCtrl', function($scope, $http, socket, $interval, $timeout, reviewFactory) {
    $scope.first = true;
    $scope.second = false;
    $scope.third = false;

    $scope.search = function(){
      $scope.first = false;
      $scope.second = true;
    }

    $scope.details = function(hotel){
      $scope.hotelInfo = hotel;
    }

    $scope.hotels = reviewFactory.hotels;

  });