(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("CursosFormController", CursosFormController);

    CursosFormController.$inject = [
        "CursoService", 
        "CategoriaService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function CursosFormController(
        CursoService,
        CategoriaService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.curso = {};
        vm.descricao = "Novo Curso";
        vm.item = null;
        vm.salvar = salvar;
        vm.select = select;

        vm.adicionarItem = adicionarItem;
        vm.salvarItem = salvarItem;
        vm.editarItem = editarItem;
        vm.removerItem = removerItem;
        var itemSelecionado = -1;

        activate();

        function activate() {
            if ($routeParams.id) {
                CursoService.findById($routeParams.id).success(function (data) {
                    vm.curso = data;
                    vm.descricao = "Editando Curso";
                });
            }
        }

        function salvar() {
            CursoService.save(vm.curso).success(function () {
                $location.path("/cursos");
                alert("Curso cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

        function adicionarItem() {
            vm.item = {}
            vm.modalTitulo = 'Novo Item'
            itemSelecionado = (vm.curso.categoria && vm.curso.categoria.length) || 0;
        }

        function salvarItem() {
            CategoriaService.findById(vm.item.categoria.id).success(function(data) {
                vm.item = data;
                vm.curso.categoria = vm.curso.categoria || [];
                vm.curso.categoria[itemSelecionado] = vm.item;
                itemSelecionado = -1;
                vm.item = null;
                $scope.$apply();
            });
        }

        function editarItem(item) {
            itemSelecionado = vm.curso.categoria.indexOf(item);
            vm.modalTitulo = 'Editando Item'
            vm.item = angular.copy(item);
        }

        function removerItem(item) {
            let pos = vm.curso.categoria.indexOf(item);
            vm.curso.categoria.splice(pos, 1);
            $scope.$apply();
        }

    function select(valor){
        return '"'+valor+'"';
    }

    }
})();