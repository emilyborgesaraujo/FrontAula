(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("CategoriasListController", CategoriasListController);

    CategoriasListController.$inject = ["CategoriaService"];

    function CategoriasListController(CategoriaService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            CategoriaService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            CategoriaService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();