app.factory('QrCodeService', function($http, Constants){
    let service = {};
    service.getQrCode = request => {
        let url = Constants.URL_BASE+'qrcodes';
        return $http.post(url, request);
    }
    return service;
});