(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("AssuntosListController", AssuntosListController);

    AssuntosListController.$inject = ["AssuntoService"];

    function AssuntosListController(AssuntoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            AssuntoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            AssuntoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();