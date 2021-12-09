angular
    .module("MyApp", ["ngRoute", "satellizer"])
    .config(function($routeProvider, $locationProvider, $authProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when("/", {
                templateUrl: "partials/login.html",
                controller:"LoginCtrl"
            })
            .when("/login", {
                templateUrl: "partials/login.html",
                controller:"LoginCtrl"
            })
            .when("/home", {
                templateUrl: "partials/home.html",
            })
            .when("/cidade", {
                templateUrl: "partials/cidade.html",
            })
            .when("/cidade/:id", {
                templateUrl: "partials/cidade-form.html",
            })
            .when("/cidade/new", {
                templateUrl: "partials/cidade-form.html",
            })
            .when("/estado", {
                templateUrl: "partials/estado.html",
            })
            .when("/estado/:id", {
                templateUrl: "partials/estado-form.html",
            })
            .when("/estado/new", {
                templateUrl: "partials/estado-form.html",
            })
            .when("/usuario", {
                templateUrl: "partials/usuario.html",
            })
            .when("/usuario/:id", {
                templateUrl: "partials/usuario-form.html",
            })
            .when("/usuario/new", {
                templateUrl: "partials/usuario-form.html",
            })
            .when("/instituicao", {
                templateUrl: "partials/instituicao.html",
            })
            .when("/instituicao/:id", {
                templateUrl: "partials/instituicao-form.html",
            })
            .when("/instituicao/new", {
                templateUrl: "partials/instituicao-form.html",
            })
            .when("/cargos", {
                templateUrl: "partials/cargos.html",
            })
            .when("/cargos/:id", {
                templateUrl: "partials/cargos-form.html",
            })
            .when("/cargos/new", {
                templateUrl: "partials/cargos-form.html",
            })
            .when("/aulas", {
                templateUrl: "partials/aulas.html",
            })
            .when("/aulas/:id", {
                templateUrl: "partials/aulas-form.html",
            })
            .when("/aulas/new", {
                templateUrl: "partials/aulas-form.html",
            })
            .when("/cursos", {
                templateUrl: "partials/cursos.html",
            })
            .when("/cursos/:id", {
                templateUrl: "partials/cursos-form.html",
            })
            .when("/cursos/new", {
                templateUrl: "partials/cursos-form.html",
            })
            .when("/categorias", {
                templateUrl: "partials/categorias.html",
            })
            .when("/categorias/:id", {
                templateUrl: "partials/categorias-form.html",
            })
            .when("/categorias/new", {
                templateUrl: "partials/categorias-form.html",
            })
            .when("/assuntos", {
                templateUrl: "partials/assuntos.html",
            })
            .when("/assuntos/:id", {
                templateUrl: "partials/assuntos-form.html",
            })
            .when("/assuntos/new", {
                templateUrl: "partials/assuntos-form.html",
            })
            .when("/artigos", {
                templateUrl: "partials/artigos.html",
            })
            .when("/artigos/:id", {
                templateUrl: "partials/artigos-form.html",
            })
            .when("/artigos/new", {
                templateUrl: "partials/artigos-form.html",
            })
            .otherwise({
                templateUrl: "partials/404.html",
            });
    })
    .run(function($rootScope, $window) {
        
    })
    .directive("ngConfirmClick", [
        function() {
            return {
                link: function(scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Are you sure?";
                    var clickAction = attr.confirmedClick;
                    element.bind("click", function(event) {
                        if (window.confirm(msg)) {
                            scope.$eval(clickAction);
                        }
                    });
                },
            };
        },
    ]);