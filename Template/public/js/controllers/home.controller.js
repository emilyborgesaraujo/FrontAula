(function() {
    "use strict";

    angular.module("MyApp").controller("HomeController", HomeController);

    HomeController.$inject = ["$rootScope", "$location", "$window"];

    function HomeController($rootScope, $location, $window) {
        var vm = this;
        var itemSelecionado = -1;

        vm.cidadesPage = cidadesPage;
        vm.estadosPage = estadosPage;
        vm.instituicaoPage = instituicaoPage;
        vm.usuarioPage = usuarioPage;
        vm.cargosPage = cargosPage;
        vm.aulasPage = aulasPage;
        vm.cursosPage = cursosPage;
        vm.categoriasPage = categoriasPage;
        vm.assuntosPage = assuntosPage;
        vm.artigosPage = artigosPage;
        vm.isAdministrador = isAdministrador;

        activate();

        function activate() {
        }

        function isAdministrador (){
            return $window.localStorage.administrador;
        };

        function cidadesPage() {
            $location.path("/cidade");
        }

        function estadosPage() {
            $location.path("/estado");
        }

        function instituicaoPage() {
            $location.path("/instituicao");
        }

        function usuarioPage() {
            $location.path("/usuario");
        }

        function cargosPage() {
            $location.path("/cargos");
        }

        function aulasPage() {
            $location.path("/aulas");
        }

        function cursosPage() {
            $location.path("/cursos");
        }

        function categoriasPage() {
            $location.path("/categorias");
        }

        function assuntosPage() {
            $location.path("/assuntos");
        }

        function artigosPage() {
            $location.path("/artigos");
        }
    }
})();