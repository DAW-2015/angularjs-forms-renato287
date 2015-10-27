var app = angular.module('formCliente', []);

app.controller('formController', ['$scope', function($scope) {
  this.master = {};

  this.update = function(cliente) {
    this.master = angular.copy(cliente);
  };

  this.reset = function() {
    $scope.cliente = {};
  };

  this.reset();
}]);


app.directive('conferecpf', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.conferecpf = function(modelValue, viewValue) {
        
        if (ctrl.$isEmpty(modelValue)) {
          return false;
        }

        if (viewValue.length != 11) {
          return false;
        } else {
          return true;
        }
      };
    }
  };
});

