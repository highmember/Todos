angular.module( 'Todos',[])
  .service('Services',function(){
    var self = this

    self.Message = []

    self.list = function() {return self.Message}
    self.add = function(Message) {self.Message.push(Message)}
})

  .controller('ListMessageController',function ($scope, Services){
    $scope.Message = Services.list()
})

  .controller('AddMessageController', function($scope, Services){
    $scope.mes = ''
    $scope.save = function(){
      if($scope.mes !== '')
      {
        var m = {mes: $scope.mes}
        Services.add(m)
        resetForm()
      }

    }

    function resetForm(){$scope.mes =''}
})
