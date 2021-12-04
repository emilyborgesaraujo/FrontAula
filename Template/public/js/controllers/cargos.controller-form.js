(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("CargosFormController", CargosFormController);

    CargosFormController.$inject = [
        "CargoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function CargosFormController(
        CargoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.cargo = {};
        vm.descricao = "Novo Cargo";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                CargoService.findById($routeParams.id).success(function (data) {
                    vm.cargo = data;
                    vm.descricao = "Editando Cargo";
                });
            }
        }

        function salvar() {
            CargoService.save(vm.cargo).success(function () {
                $location.path("/cargos");
                alert("Cargo cadastrado com sucesso!!");
            }).error(function (erro) {
                alert(JSON.stringify(erro));
            });
        }

        function message(tipo, mensagem) {
            let text = "";
            if (tipo === 'info') {
                tipo = 'alert alert-info';
                text = 'Informação!';
            }
            if (tipo === 'sucesso') {
                tipo = 'alert alert-success';
                text = 'Sucesso!';
            }
            if (tipo === 'erro') {
                tipo = 'alert alert-danger';
                text = 'Erro!';
            }
            let message = '<div id="alerta" class="' + tipo + '" id="bsalert">';
            message += '    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> ';
            message += '    <strong>' + text + '</strong> ' + mensagem + '  ';
            message += ' </div> ';
            $("#divPrincipal").append(message);
    
            setTimeout(function(){ 
                $("#alerta").alert('close');
             }, 3000);
        }


    }
})();