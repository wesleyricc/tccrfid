angular.module('primeiraApp').config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('dashboard', {
      url: "/dashboard",
      templateUrl: "dashboard/dashboard.html"
    }).state('knifeData', {
      url: "/knifesData?page",
      templateUrl: "knifeData/tabs.html"
    }).state('userData', {
      url: "/usersData?page",
      templateUrl: "userData/tabs.html"
    })

    $urlRouterProvider.otherwise('/dashboard')
}])
