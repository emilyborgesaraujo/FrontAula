(function () {
    "use strict";

    angular
        .module("MyApp")
        .controller("InstituicaoFormController", InstituicaoFormController);

    InstituicaoFormController.$inject = [
        "InstituicaoService",
        "$location",
        "$routeParams",
        "$scope",
    ];

    function InstituicaoFormController(
        InstituicaoService,
        $location,
        $routeParams
    ) {
        var vm = this;
        vm.instituicao = {};
        vm.titulo = "Nova Instituição";
        vm.item = null;
        vm.salvar = salvar;

        activate();

        function activate() {
            if ($routeParams.id) {
                InstituicaoService.findById($routeParams.id).success(function (data) {
                    vm.instituicao = data;
                    vm.titulo = "Editando Instituição";
                });
            }
        }

        function salvar() {
            InstituicaoService.save(vm.instituicao).success(function () {
                $location.path("/instituicao");
                //message('sucesso', 'Instituição cadastrada com sucesso!');
                alert("Instituição cadastrada com sucesso!!");
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
                tipo = 'alert alert-error';
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