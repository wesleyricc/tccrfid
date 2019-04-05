angular.module('primeiraApp').constant('consts', {
  appName: 'EasyCUT',
  version: '1.0',
  owner: 'Wesley Ricardo',
  year: '2019',
  site: 'https://www.facebook.com/wesleyricc',
  apiUrl: 'http://localhost:3003/api',
}).run(['$rootScope', 'consts', function($rootScope, consts) {
  $rootScope.consts = consts
}])
