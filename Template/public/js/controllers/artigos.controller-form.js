(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("ArtigoFormController", ArtigoFormController);

        ArtigoFormController.$inject = [
        "ArtigoService", 
        "CategoriaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function ArtigoFormController(
        ArtigoService,
        CategoriaService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.artigo = {};
        vm.descricao = "Novo Artigo";
        vm.item = null;
        vm.salvar = salvar;

        vm.adicionarItem = adicionarItem;
        vm.salvarItem = salvarItem;
        vm.editarItem = editarItem;
        vm.removerItem = removerItem;
        var itemSelecionado = -1;

        activate();

        function activate() {
            if ($routeParams.id) {
                ArtigoService.findById($routeParams.id).success(function (data) {
                    vm.artigo = data;
                    vm.descricao = "Editando Artigo";
                });
            }
        }

        function salvar() {
            ArtigoService.save(vm.artigo).success(function () {
                $location.path("/artigos");
                alert("Artigo cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

        function adicionarItem() {
            vm.item = {}
            vm.modalTitulo = 'Novo Item'
            itemSelecionado = (vm.artigo.categoria && vm.artigo.categoria.length) || 0;
        }

        function salvarItem() {
            CategoriaService.findById(vm.item.categoria.id).success(function(data) {
                vm.item = data;
                vm.artigo.categoria = vm.artigo.categoria || [];
                vm.artigo.categoria[itemSelecionado] = vm.item;
                itemSelecionado = -1;
                vm.item = null;
                $scope.$apply();
            });
        }

        function editarItem(item) {
            itemSelecionado = vm.artigo.categoria.indexOf(item);
            vm.modalTitulo = 'Editando Item'
            vm.item = angular.copy(item);
        }

        function removerItem(item) {
            let pos = vm.artigo.categoria.indexOf(item);
            vm.artigo.categoria.splice(pos, 1);
            $scope.$apply();
        }

    }
})();