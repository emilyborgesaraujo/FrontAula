(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("EstadoFormController", EstadoFormController);

    EstadoFormController.$inject = [
        "EstadoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function EstadoFormController(
        EstadoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Estado";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                EstadoService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Estado";
                });
            }
        }

        function salvar() {
            EstadoService.save(vm.cadastro).success(function () {
                $location.path("/estado");
                alert("Estado cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    

    }
})();