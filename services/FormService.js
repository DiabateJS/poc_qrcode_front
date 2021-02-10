app.factory('FormService', function($http, Constants){
    let service = {};
    service.getForms = () => {
        let url = Constants.URL_BASE+'forms';
        return $http.get(url);
    }

    service.getForm = (id) => {
        let url = Constants.URL_BASE+'forms/'+id;
        return $http.get(url);
    }
    
    return service;
});