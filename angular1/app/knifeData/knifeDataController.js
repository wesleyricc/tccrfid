angular.module('primeiraApp').controller('KnifeDataCtrl', [
  '$scope',
  '$http',
  '$location',
  'msgs',
  'tabs',
  'consts',
  KnifeDataController
])

function KnifeDataController($scope, $http, $location, msgs, tabs, consts) {

  $scope.getKnifeData = function() {
    const page = parseInt($location.search().page) || 1
    const url = `${consts.apiUrl}/knifesData?skip=${(page - 1) * 10}&limit=10`
    $http.get(url).then(function(resp) {
      $scope.knifesData = resp.data
      $scope.knifeData = {}
      //initCreditsAndDebts()
      $http.get(`${consts.apiUrl}/knifesData/count`).then(function(resp) {
        $scope.pages = Math.ceil(resp.data.value / 10)
        tabs.show($scope, {tabList: true, tabCreate: true})
      })
    })
  }

  $scope.createKnifeData = function() {
    const url = `${consts.apiUrl}/knifesData`;
    $http.post(url, $scope.knifeData).then(function(response) {
      $scope.knifeData = {}
      //initCreditsAndDebts()
      $scope.getKnifeData()
      msgs.addSuccess('Operação realizada com sucesso!!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.showTabUpdate = function(knifeData) {
    $scope.knifeData = knifeData
    //initCreditsAndDebts()
    tabs.show($scope, {tabUpdate: true})
  }

  $scope.updateKnifeData = function() {
    const url = `${consts.apiUrl}/knifesData/${$scope.knifeData._id}`
    $http.put(url, $scope.knifeData).then(function(response) {
      $scope.knifeData = {}
      //initCreditsAndDebts()
      $scope.getKnifeData()
      tabs.show($scope, {tabList: true, tabCreate: true})
      msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
      msgs.addError(resp.data.errors)
    })
  }

  $scope.showTabDelete = function(knifeData) {
    $scope.knifeData = knifeData
    //initCreditsAndDebts()
    tabs.show($scope, {tabDelete: true})
  }

  $scope.deleteKnifeData = function() {
    const url = `${consts.apiUrl}/knifesData/${$scope.knifeData._id}`
    $http.delete(url, $scope.knifeData).then(function(response) {
       $scope.knifeData = {}
       //initCreditsAndDebts()
       $scope.getKnifeData()
       tabs.show($scope, {tabList: true, tabCreate: true})
       msgs.addSuccess('Operação realizada com sucesso!')
    }).catch(function(resp) {
       msgs.addError(resp.data)
    })
  }


  $scope.getKnifeData()
}
