(function() {
  'use strict';

  var app = angular.module('myCareer', ['ngMaterial', 'ngRoute']);

  app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
      .when('/events', {
        template: '<events></events>'
      })
      .otherwise({
        redirectTo: '/events'
      })
  }]);

  app.component('headerComp', {
    templateUrl: 'src/components/header.html',
    bindings: {},
    controller: ['$mdSidenav', function($mdSidenav) {
      var vm = this;

      vm.openMenu = openMenu;

      function openMenu() {
        $mdSidenav('left').toggle();
      }
    }]
  })

  app.component('events', {
    templateUrl: 'src/components/events.html',
    bindings: {},
    controller: [function() {
      var vm = this;
      vm.results = [];

      vm.getResults = getResults;
      vm.clearFilters = clearFilters;

      vm.filters = [
        {type: 'select', label: 'Student Group', options: ['All', '1', '2'], value: 'All'},
        {type: 'select', label: 'Event Type', options: ['All', '1', '2'], value: 'All'},
        {type: 'select', label: 'Event Format', options: ['All', '1', '2'], value: 'All'},
        {type: 'text', label: 'Employer Name', value: ''}
      ];

      function getResults() {
        // Hardcode results instead of $http.get()
        vm.results = [
          {
            name: 'Event 1',
            dateAndTime: '4/22/2017, 9:00AM - 1:00PM',
            status: 'closed',
            registrants: 0
          },
          {
            name: 'Event 2',
            dateAndTime: '4/23/2017, 10:00AM - 12:00PM',
            status: 'open',
            registrants: 14
          },
          {
            name: 'Event 3',
            dateAndTime: '5/1/2017, 6:00PM - 8:00PM',
            status: 'open',
            registrants: 11
          },
          {
            name: 'Event 1',
            dateAndTime: '4/22/2017, 9:00AM - 1:00PM',
            status: 'closed',
            registrants: 0
          },
          {
            name: 'Event 2',
            dateAndTime: '4/23/2017, 10:00AM - 12:00PM',
            status: 'open',
            registrants: 14
          },
          {
            name: 'Event 3',
            dateAndTime: '5/1/2017, 6:00PM - 8:00PM',
            status: 'open',
            registrants: 11
          },
          {
            name: 'Event 1',
            dateAndTime: '4/22/2017, 9:00AM - 1:00PM',
            status: 'closed',
            registrants: 0
          },
          {
            name: 'Event 2',
            dateAndTime: '4/23/2017, 10:00AM - 12:00PM',
            status: 'open',
            registrants: 14
          },
          {
            name: 'Event 3',
            dateAndTime: '5/1/2017, 6:00PM - 8:00PM',
            status: 'open',
            registrants: 11
          },
          {
            name: 'Event 1',
            dateAndTime: '4/22/2017, 9:00AM - 1:00PM',
            status: 'closed',
            registrants: 0
          },
          {
            name: 'Event 2',
            dateAndTime: '4/23/2017, 10:00AM - 12:00PM',
            status: 'open',
            registrants: 14
          },
          {
            name: 'Event 3',
            dateAndTime: '5/1/2017, 6:00PM - 8:00PM',
            status: 'open',
            registrants: 11
          },
          {
            name: 'Event 1',
            dateAndTime: '4/22/2017, 9:00AM - 1:00PM',
            status: 'closed',
            registrants: 0
          },
          {
            name: 'Event 2',
            dateAndTime: '4/23/2017, 10:00AM - 12:00PM',
            status: 'open',
            registrants: 14
          },
          {
            name: 'Event 3',
            dateAndTime: '5/1/2017, 6:00PM - 8:00PM',
            status: 'open',
            registrants: 11
          }
        ];
      }

      function clearFilters() {
        for (var i = 0; i < vm.filters.length; i++) {
          vm.filters[i].value = (vm.filters[i].type === 'text') ? '' : 'All';
        }
      }

    }]
  });
})(angular);