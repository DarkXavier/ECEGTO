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
        vm.user={
            user:"",
            password:"",
            confirm:"",
            nombre:"",
            aPaterno:"",
            aMaterno:"",
            mail:"",
            telefono:"",
            direccion:"",
            sucursal:"",
            celular:"",
            ine:"",
            foto:"",
            tipo:""

        };
        activate();


        function activate() {
            console.log("Controller activado");
            console.log(vm);
        }
    }
})();