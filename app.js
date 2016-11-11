angular.module( 'Todos',[])
  .service('Services',function(){
    var self = this

    self.Todo = []

    self.list = function() {return self.Todo}
    self.add = function(Todo) {self.Todo.push(Todo)}
})

  .controller('ListMessageController',function ($scope, Services){
    $scope.Todo = Services.list()
})

  .controller('AddMessageController', function($scope, Services){
    $scope.title = ''
    $scope.save = function(){
      if($scope.title !== '')
      {
        var t = {title: $scope.title}
        var c = {done: $scope.done}
        Services.add(t)
        Services.add(c)
        resetForm()
      }

    }

    function resetForm(){$scope.title =''}
})
