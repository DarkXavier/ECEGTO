/**
 * Created by Summoner_Rift on 16/08/2016.
 */
(function () {
    'use strict';
        angular
            .module('app.mainApp.registro')
            .config(moduleConfig)
    
    function moduleConfig($stateProvider, triMenuProvider) {
        $stateProvider
            .state('triangular.admin-default.registro',{
                url: '/registro', //Nombre que quiero en mi url
                templateUrl: 'app/mainApp/Registro/registro.tmpl.html', //Dirección del archivo a usar
                controller: 'registroController', //nombre del controlador
                controllerAs: 'vm' //se renombra al scope
            });

        triMenuProvider.addMenu({
            name: 'Nuevo Registro',
            icon: 'fa fa-archive',
            type: 'dropdown',
            priority: 6.1,
            children:[{
                name: 'Paciente',
                state: 'triangular.admin-default.registro',
                type: 'link'
            }]
        })
    }

})();
