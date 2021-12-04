(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("ArtigoListController", ArtigoListController);

        ArtigoListController.$inject = ["ArtigoService"];

    function ArtigoListController(ArtigoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            ArtigoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            ArtigoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();