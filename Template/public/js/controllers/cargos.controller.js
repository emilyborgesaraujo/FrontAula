(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("CargosListController", CargosListController);

    CargosListController.$inject = ["CargoService"];

    function CargosListController(CargoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            CargoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            CargoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();