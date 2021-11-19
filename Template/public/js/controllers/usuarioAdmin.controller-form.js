(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("UsuarioAdminFormController", UsuarioAdminFormController);

        UsuarioAdminFormController.$inject = [
        "UsuarioAdminService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function UsuarioAdminFormController(
        UsuarioAdminService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cadastro = {};
        vm.titulo = "Novo Usuário Admin";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        activate();

        function activate() {
            if ($routeParams.id) {
                UsuarioAdminService.findById($routeParams.id).success(function (data) {
                    vm.cadastro = data;
                    vm.titulo = "Editando Usuário Admin";
                });
            }
        }

        function salvar() {
            UsuarioAdminService.save(vm.cadastro).success(function () {
                $location.path("/usuarioAdmin");
                alert("Usuário Admin cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();