angular.module( 'Todos',[])
  .service('Services',function(){
    var self = this

    self.Message = [ { mes: ''}]
    self.check = [{ ch: ''}]

    self.list = function() {return self.Message}

    self.add = function(Message) {self.Message.push(Message)}
})

  .controller('ListMessageController',function ($scope, Services){
    $scope.Message = Services.list()
    $scope.checkc = function(){
      var c = {ch: $scope.ch}
      Services.add(c)
    }

})

  .controller('AddMessageController', function($scope, Services){
    $scope.save = function(){
      var m = {mes: $scope.mes}
      Services.add(m)
      resetForm()
    }

    function resetForm(){$scope.mes =''}
})
