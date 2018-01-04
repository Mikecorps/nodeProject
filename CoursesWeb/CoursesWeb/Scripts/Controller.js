var module = angular.module('myDiv', []);
module.controller('repeat', function ($scope) {
    $scope.courses = [{
        nombre: "algo",
        rama: "programacion",
        duracion: "15 dias"
    },
    {
        nombre: "algo2",
        rama: "programacion",
        duracion: "1 dias"
    },
    {
        nombre: "algo3",
        rama: "programacion",
        duracion: "14 dias"
    }];

    $scope.options = ["algo", "sdvsd", "4545454"];
    $scope.selected;


});