(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("CursoEmAndamentoListController", CursoEmAndamentoListController);

        CursoEmAndamentoListController.$inject = ["CursoEmAndamentoService"];

    function CursoEmAndamentoListController(CursoEmAndamentoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            CursoEmAndamentoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            CursoEmAndamentoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();