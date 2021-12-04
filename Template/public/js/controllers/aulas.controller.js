(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("AulaListController", AulaListController);

    AulaListController.$inject = ["AulaService"];

    function AulaListController(AulaService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            AulaService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            AulaService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();