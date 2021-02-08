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
        QrCodeService.getQrCode($scope.celibataire).then(response => {
            if (response.data){
                console.log(response.data);
            }
        })
    }
});