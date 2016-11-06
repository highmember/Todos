angular.module( 'Todos',[])
  .service('Services',function(){
    var self = this

<<<<<<< HEAD
    self.Message = [ { mes: ''}]
    self.check = [{ ch: ''}]
=======
    self.Message = [ { mes: 'weef'}]
>>>>>>> 67969ce2eb223e5099e5159ec36517ee838f9b77

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
