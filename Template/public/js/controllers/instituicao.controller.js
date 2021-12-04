(function() {
    "use strict";

    angular
        .module("MyApp")
        .controller("InstituicaoListController", InstituicaoListController);

        InstituicaoListController.$inject = ["InstituicaoService"];

    function InstituicaoListController(InstituicaoService) {
        var vm = this;

        vm.item = null;
        vm.itens = [];
        vm.busca = "";
        vm.remover = remover;
        vm.buscar = activate;

        activate();

        function activate() {
            var query = vm.busca ? { $text: { $search: vm.busca } } : {};
            InstituicaoService.find(query).then(function(result) {
                vm.itens = result.data;
            });
        }

        function remover(item) {
            InstituicaoService.remove(item.id).success(function() {
                activate();
            });
        }
    }
})();