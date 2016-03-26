angular.module('starter.services', [])

.factory('Menu',['$http','$q', function($http,$q) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var menu = [{
    id: 0,
    title: 'BREAKFAST',
    lastText: '',
    imageUrl: 'img/bonda.png'
  }, {
    id: 1,
    title: 'SNACKS',
    lastText: '',
    imageUrl: 'img/dosa.png'
  }, {
    id: 2,
    title: 'SANDWICHES',
    lastText: '',
    imageUrl: 'img/chapati.png'
  }, {
    id: 3,
    title: 'VEGETARIAN',
    lastText: '',
    imageUrl: 'img/puri.png'
  }, {
    id: 4,
    title: 'NON-VEGETARIAN',
    lastText: '',
    imageUrl: 'img/juice.png'
  }];
  var mainMenu = [{
    title: 'Food',
    lastText: '',
    imageUrl: 'img/bonda.png',
    tag:"Serve with delicious taste",
    transitionTo:'menu'
  }, {
    title: 'Groceries',
    lastText: '',
    imageUrl: 'img/groc.png',
    tag:"Preparation for delicious taste",
    transitionTo:'items/gallery/grocery'
  }, {
    title: 'Fruits & Vegetables',
    lastText: '',
    imageUrl: 'img/veg.png',
    tag:"Healthy and Safe",
    transitionTo:'items/gallery/fruits'
  }];

  return {
    all: function() {
      return menu;
      /*return $http.get('http://localhost:8080/api/categories').success(function(retData){
        console.log("Getting categories response >>>",retData);
        return retData;
      }).error(function(err){
        console.log("Some thing went wrong >>>",err);
        return [];
      });*/
    },
    getMainMenu:function(){
      return mainMenu;
    },
    remove: function(chat) {
      menu.splice(menu.indexOf(chat), 1);
    },
    get: function(menuId) {
      for (var i = 0; i < menu.length; i++) {
        if (menu[i].id === parseInt(menuId)) {
          return menu[i];
        }
      }
      return null;
    }
  };
}])
.factory('Cusines', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var breakfast_items = [{
    id: 0,
    name: 'Dosa',
    lastText: '',
    face: 'img/dosa.png',
    price:30
  }, {
    id: 1,
    name: 'Puri',
    lastText: '',
    face: 'img/puri.png',
    price:40
  }, {
    id: 2,
    name: 'Chapathi',
    lastText: '',
    face: 'img/chapati.png',
    price:30
  }, {
    id: 3,
    name: 'Rice Items',
    lastText: '',
    face: 'img/rice.png',
    price:20
  }, {
    id: 4,
    name: 'Bonda',
    lastText: '',
    face: 'img/bonda.png',
    price:30
  },
  {
    id: 5,
    name: 'Juice',
    lastText: '',
    face: 'img/juice.png',
    price:30
  }];

  return {
    all: function() {
      return breakfast_items;
    },
    remove: function(chat) {
      menu.splice(menu.indexOf(chat), 1);
    },
    get: function(menuId) {
      for (var i = 0; i < menu.length; i++) {
        if (menu[i].id === parseInt(menuId)) {
          return menu[i];
        }
      }
      return null;
    }
  };
})
//Groceries
.factory('Grocery', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var grocery_items = [{
    id: 0,
    name: 'Dosa',
    lastText: '',
    face: 'img/groc.png',
    price:30
  }, {
    id: 1,
    name: 'Puri',
    lastText: '',
    face: 'img/groc.png',
    price:40
  }, {
    id: 2,
    name: 'Chapathi',
    lastText: '',
    face: 'img/groc.png',
    price:30
  }, {
    id: 3,
    name: 'Rice Items',
    lastText: '',
    face: 'img/groc.png',
    price:20
  }, {
    id: 4,
    name: 'Bonda',
    lastText: '',
    face: 'img/groc.png',
    price:30
  },
  {
    id: 5,
    name: 'Juice',
    lastText: '',
    face: 'img/groc.png',
    price:30
  }];

  return {
    all: function() {
      return grocery_items;
    },
    remove: function(chat) {
      menu.splice(menu.indexOf(chat), 1);
    },
    get: function(menuId) {
      for (var i = 0; i < menu.length; i++) {
        if (menu[i].id === parseInt(menuId)) {
          return menu[i];
        }
      }
      return null;
    }
  };
})

.factory('Fruits', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var grocery_items = [{
    id: 0,
    name: 'Dosa',
    lastText: '',
    face: 'img/veg.png',
    price:30
  }, {
    id: 1,
    name: 'Puri',
    lastText: '',
    face: 'img/veg.png',
    price:40
  }, {
    id: 2,
    name: 'Chapathi',
    lastText: '',
    face: 'img/veg.png',
    price:30
  }, {
    id: 3,
    name: 'Rice Items',
    lastText: '',
    face: 'img/veg.png',
    price:20
  }, {
    id: 4,
    name: 'Bonda',
    lastText: '',
    face: 'img/veg.png',
    price:30
  },
  {
    id: 5,
    name: 'Juice',
    lastText: '',
    face: 'img/veg.png',
    price:30
  }];

  return {
    all: function() {
      return grocery_items;
    },
    remove: function(chat) {
      menu.splice(menu.indexOf(chat), 1);
    },
    get: function(menuId) {
      for (var i = 0; i < menu.length; i++) {
        if (menu[i].id === parseInt(menuId)) {
          return menu[i];
        }
      }
      return null;
    }
  };
})

.factory('CustomDataServ', function() {
  // Might use a resource here that returns a JSON array

  var location = 'Getting your address';

  return {
    getLocation: function() {
      return location;
    },
    setLocation: function(loc) {
      location = loc;
    }
  };

})
.factory('SignUpIn',['$http','$q', function($http,$q)  {
  
  return {
    registerUser: function(userData) {
      return $http.post('/api/signup',userData).success(function(retData){
        console.log("Getting SignUp response >>>",retData);
        return retData;
      }).error(function(err){
        console.log("Some thing went wrong >>>",err);
        return [];
      });
    },
    loginUser: function(loginData) {
      return $http.post('/login?mapp=true',loginData).success(function(retData){
        console.log("Getting Login response >>>",retData);
        return retData;
      }).error(function(err){
        console.log("Some thing went wrong >>>",err);
        return [];
      });
    }
  };

}])
.factory('Orders',['$http','$q', function($http,$q)  {
  
  return {
    makeOrder: function(orderData) {
      return $http.post('/order',orderData).success(function(retData){
        console.log("Getting orders response >>>",retData);
        return retData;
      }).error(function(err){
        console.log("Some thing went wrong >>>",err);
        return [];
      });
    }
  };

}]);
