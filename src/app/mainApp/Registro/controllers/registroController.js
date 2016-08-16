/**
 * Created by Summoner_Rift on 16/08/2016.
 */
(function () {
    angular
        .module('app.mainApp.registro')
        .controller('registroController',registroController);
    
    function registroController() {
        var vm = this;
        vm.numero=5;
        activate();


        function activate() {
            console.log("Controller activado");
            console.log(vm);
        }
    }
})();