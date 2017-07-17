function ubigeosService(angular, app) {

	app.service('ubigeosService', ubigeosService);

	ubigeosService.$inject = ['$http'];
	function ubigeosService($http){
        this.getUbigeos = function(){
            return $http.get('/api/ubigeos');
        };
	}
}
module.exports = ubigeosService;