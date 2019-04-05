angular.module('primeiraApp').controller('UserDataCtrl', [
  '$scope',
  '$http',
  '$location',
  'msgs',
  'tabs',
  'consts',
  UserDataController
])

function UserDataController($scope, $http, $location, msgs, tabs, consts) {

  $scope.getUser = function() {
    const page = parseInt($location.search().page) || 1
    const url = `${consts.apiUrl}/usersData?skip=${(page - 1) * 10}&limit=10`
    $http.get(url).then(function(resp) {
      $scope.usersData = resp.data
      $scope.userData = {}
      //initCreditsAndDebts()
      $http.get(`${consts.apiUrl}/usersData/count`).then(function(resp) {
        $scope.pages = Math.ceil(resp.data.value / 10)
        tabs.show($scope, {tabList: true, tabCreate: true})
      })
    })
  }

  $scope.createUser = function() {
    const url = `${consts.apiUrl}/usersData`;
    $http.post(url, $scope.userData).then(function(response) {
      $scope.userData = {}
      //initCreditsAndDebts()
      $scope.getUser()
      msgs.addSuccess('Operação realizada com sucesso!!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.showTabUpdate = function(knifeData) {
    $scope.userData = knifeData
    //initCreditsAndDebts()
    tabs.show($scope, {tabUpdate: true})
  }

  $scope.updateUser = function() {
    const url = `${consts.apiUrl}/usersData/${$scope.userData._id}`
    $http.put(url, $scope.userData).then(function(response) {
      $scope.userData = {}
      //initCreditsAndDebts()
      $scope.getUser()
      tabs.show($scope, {tabList: true, tabCreate: true})
      msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.showTabDelete = function(knifeData) {
    $scope.userData = knifeData
    //initCreditsAndDebts()
    tabs.show($scope, {tabDelete: true})
  }

  $scope.deleteUser = function() {
    const url = `${consts.apiUrl}/usersData/${$scope.userData._id}`
    $http.delete(url, $scope.userData).then(function(response) {
       $scope.userData = {}
       //initCreditsAndDebts()
       $scope.getUser()
       tabs.show($scope, {tabList: true, tabCreate: true})
       msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
       msgs.addError(resp.data)
    })
  }

  $scope.getUser()
}
