(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("UsuarioAdminListController", UsuarioAdminListController);

        UsuarioAdminListController.$inject = ["UsuarioAdminService"];

    function UsuarioAdminListController(UsuarioAdminService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            UsuarioAdminService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            UsuarioAdminService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();