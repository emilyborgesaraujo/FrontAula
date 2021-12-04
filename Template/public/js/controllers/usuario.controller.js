(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("UsuarioListController", UsuarioListController);

        UsuarioListController.$inject = ["UsuarioService"];

    function UsuarioListController(UsuarioService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            UsuarioService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            UsuarioService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();