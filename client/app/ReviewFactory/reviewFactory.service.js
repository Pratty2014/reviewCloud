'use strict';

angular.module('reviewCloudApp')
  .factory('reviewFactory', function () {
    return {
      hotels: [
      	{
      		name : 'Ace Hotel',
      		price: "$500",
      		path: '/hotel-reviews-mgmgram.json'
  		}, 
  		{
  			name: 'Hotel Penn',
  			price: "$100",
  			path: '/hotel-reviews-hotelpenn.json'
  		}, 
  		{
  			name: 'Marriot Marquis',
  			price: "$400",
  			path: '/hotel-reviews-marriot-marquis.json'
  		}
  		]
    };
  });