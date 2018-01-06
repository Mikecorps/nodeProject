var module = angular.module('myDiv', ['pluginjs']);



module.controller('repeat', function ($scope,$rootScope) {
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
    $scope.send = function () {
        $rootScope.$emit("dataName", $scope.selected)
    }

});
module.controller('crtl', function ($scope,$rootScope) {
    $scope.selected = "segundo controlador";
    $rootScope.$on("dataName", function (event,data) {
        $scope.selected = "Dato del primer contrl: " + data;
        console.log(data)
    })
});