(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("AulasFormController", AulasFormController);

        AulasFormController.$inject = [
        "AulaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function AulasFormController(
        AulaService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.aula = {};
        vm.descricao = "Nova Aula";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                AulaService.findById($routeParams.id).success(function (data) {
                    vm.aula = data;
                    vm.descricao = "Editando Aula";
                });
            }
        }

        function salvar() {
            AulaService.save(vm.aula).success(function () {
                $location.path("/aulas");
                alert("Aula cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();