(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("UsuarioFormController", UsuarioFormController);

        UsuarioFormController.$inject = [
        "UsuarioService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function UsuarioFormController(
        UsuarioService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Usuário";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                UsuarioService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Usuário";
                });
            }
        }

        function salvar() {
            UsuarioService.save(vm.cadastro).success(function () {
                $location.path("/usuario");
                alert("Usuário cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();