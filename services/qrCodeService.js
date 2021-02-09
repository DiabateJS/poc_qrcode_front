app.factory('QrCodeService', function($http, Constants){
    let service = {};
    service.getQrCode = request => {
        let url = Constants.URL_BASE+'qrcodes';
        console.log(url);
        return $http.post(url, request);
    }
    return service;
});