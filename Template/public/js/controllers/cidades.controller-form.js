(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("CidadeFormController", CidadeFormController);

    CidadeFormController.$inject = [
        "CidadeService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function CidadeFormController(
        CidadeService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cidade = {};
        vm.titulo = "Nova Cidade";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                CidadeService.findById($routeParams.id).success(function (data) {
                    vm.cidade = data;
                    vm.titulo = "Editando Cidade";
                });
            }
        }

        function salvar() {
            CidadeService.save(vm.cidade).success(function () {
                $location.path("/cidade");
                alert("Cidade cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();