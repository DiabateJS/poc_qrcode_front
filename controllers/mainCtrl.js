app.controller('MainController',function($scope, QrCodeService){
    $scope.celibataire = {
        titre:'',
        nom:'',
        prenom:'',
        dateNaissance:'',
        villeNaissance:'',
        nomPrenomPere:'',
        nomPrenomMere:'',
        numCertifCelibat:'',
        dateDelivrance:new Date(),
        ville:''
    };

    $scope.genQrCode = () => {
        $scope.qrcode_data = JSON.stringify($scope.celibataire);
    }
});