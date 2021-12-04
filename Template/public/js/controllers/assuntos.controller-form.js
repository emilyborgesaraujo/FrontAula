(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("AssuntoFormController", AssuntoFormController);

    AssuntoFormController.$inject = [
        "AssuntoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function AssuntoFormController(
        AssuntoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.assunto = {};
        vm.descricao = "Novo Assunto";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                AssuntoService.findById($routeParams.id).success(function (data) {
                    vm.assunto = data;
                    vm.descricao = "Editando Assunto";
                });
            }
        }

        function salvar() {
            AssuntoService.save(vm.assunto).success(function () {
                $location.path("/assuntos");
                alert("Assunto cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();