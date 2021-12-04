(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("CategoriaFormController", CategoriaFormController);

    CategoriaFormController.$inject = [
        "CategoriaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function CategoriaFormController(
        CategoriaService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.categoria = {};
        vm.descricao = "Nova Categoria";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                CategoriaService.findById($routeParams.id).success(function (data) {
                    vm.categoria = data;
                    vm.descricao = "Editando Categoria";
                });
            }
        }

        function salvar() {
            CategoriaService.save(vm.categoria).success(function () {
                $location.path("/categorias");
                alert("Categoria cadastrada com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();