(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("CursoListController", CursoListController);

    CursoListController.$inject = ["CursoService"];

    function CursoListController(CursoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            CursoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            CursoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();