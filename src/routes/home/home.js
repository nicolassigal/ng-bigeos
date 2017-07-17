function homeController(angular, app) {
    'use strict'; 
    app.controller('homeCtrl', homeCtrl);

    homeCtrl.$inject = ['ubigeosService'];

    function homeCtrl(ubigeosService){
        var self = this; //jshint ignore:line

        function getUbigeos(){
            ubigeosService.getUbigeos().then(function (response){
                if(response.data){
                self.ubigeos = response.data;
                } else {
                    var err = {msg: 'no hay ubigeos disponibles por el momento. Por favor intente nuevamente.'};
                    self.ubigeos_errors.push(err)
                }
                
            })
            .catch(function(err){
                var err = err || {msg: 'Ha ocurrido un error inesperado, por favor intente nuevamente.'};
                self.ubigeos.errors.push(err);
            })
        }
        function init(){
            self.ubigeos = {};
            self.ubigeos_errors = [];
            getUbigeos();
        }
        init();
    }
}
module.exports = homeController;