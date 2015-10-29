var app = angular.module('formCliente', []);

function TestaCPF(strCPF) { var Soma; var Resto; Soma = 0; if (strCPF == "00000000000") return false; for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); Resto = (Soma * 10) % 11; if ((Resto == 10) || (Resto == 11)) Resto = 0; if (Resto != parseInt(strCPF.substring(9, 10)) ) return false; Soma = 0; for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i); Resto = (Soma * 10) % 11; if ((Resto == 10) || (Resto == 11)) Resto = 0; if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false; return true; }


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
        
        // if (ctrl.$isEmpty(modelValue)) {
        //   return false;
        // }

        return TestaCPF(modelValue);
      };
    }
  };
});

app.directive('conferetel', function() {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$validators.conferecpf = function(modelValue, viewValue) {
        
        // if (ctrl.$isEmpty(modelValue)) {
        //   return false;
        // }

        if (modelValue.length != 10){
          return false;
        } else {
          return true;
        }
      };
    }
  };
});