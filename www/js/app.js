// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ionic-material', 'ionMdInput'])

.run(function($ionicPlatform, $ionicPopup) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
        console.log("window.Connection:"+window.Connection);
        // Check for network connection
        if(window.Connection) {
            console.log("navigator.connection.type::"+navigator.connection.type);
          if(navigator.connection.type == Connection.NONE) {
            $ionicPopup.confirm({
              title: 'No Internet Connection',
              content: 'Sorry, no Internet connectivity detected. Please reconnect and try again.'
            })
            .then(function(result) {
              if(!result) {
                ionic.Platform.exitApp();
              }
            });
          }
        }
    });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);

    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('mainactivity', {
        url: '/mainactivity',
        templateUrl: 'templates/main-activity.html',
        controller: 'MainActivityCtrl'
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })

    .state('ordertrack', {
        url: '/ordertrack',
        templateUrl: 'templates/order-track.html'
    })

    .state('feedback', {
        url: '/feedback',
        templateUrl: 'templates/feedback.html'
    })

    .state('app.hotels', {
        url: '/hotels',
        views: {
            'menuContent': {
                templateUrl: 'templates/hotels-list.html',
                controller: 'HotelCtrl'
            }
        }
    })

    .state('app.menu', {
        url: '/menu',
        views: {
            'menuContent': {
                templateUrl: 'templates/food-menu.html',
                controller: 'MenuCtrl'
            }
        }
    })
    .state('app.main', {
        url: '/main/items',
        views: {
            'menuContent': {
                templateUrl: 'templates/main-menu.html',
                controller: 'MainMenuCtrl'
            }
        }
    })

    .state('app.gallery', {
        url: '/gallery/:menuId',
        views: {
            'menuContent': {
                templateUrl: 'templates/gallery.html',
                controller: 'GalleryCtrl'
            },
            'fabContent': {
                templateUrl: 'templates/galleryFAB.html',
                controller: 'GalleryFABCtrl'
            }
        }
    })
        .state('app.grocery', {
        url: '/items/gallery/grocery',
        views: {
            'menuContent': {
                templateUrl: 'templates/grocery_gallery.html',
                controller: 'GroceryCtrl'
            },
            'fabContent': {
                templateUrl: 'templates/galleryFAB.html',
                controller: 'GalleryFABCtrl'
            }
        }
    })
        .state('app.fruits', {
        url: '/items/gallery/fruits',
        views: {
            'menuContent': {
                templateUrl: 'templates/fruits_gallery.html',
                controller: 'FruitsCtrl'
            },
            'fabContent': {
                templateUrl: 'templates/galleryFAB.html',
                controller: 'GalleryFABCtrl'
            }
        }
    })

    .state('app.checkcart', {
        url: '/cart',
        views: {
            'menuContent': {
                templateUrl: 'templates/showcart.html',
                controller: 'CartCtrl'
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: '<button id="fab-profile" class="button button-fab button-fab-bottom-right button-energized-900"><i class="icon ion-plus"></i></button>',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/mainactivity');
})
.directive('starRating',
function() {
return {
restrict : 'A',
template : '<ul class="rating">'+ ' <li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
   + '  <i class="icon ion-ios-star"></i>'
   + ' </li>'
   + '</ul>',
scope : {
 ratingValue : '=',
 max : '=',
 onRatingSelected : '&'
},
link : function(scope, elem, attrs) {
 var updateStars = function() {
  scope.stars = [];
  for ( var i = 0; i < scope.max; i++) {
   scope.stars.push({
    filled : i < scope.ratingValue
   });
  }
 };
 
 scope.toggle = function(index) {
  scope.ratingValue = index + 1;
  scope.onRatingSelected({
   rating : index + 1
  });
 };
 
 scope.$watch('ratingValue',
  function(oldVal, newVal) {
   if (newVal) {
    updateStars();
   }
  }
 );
}
};
});
