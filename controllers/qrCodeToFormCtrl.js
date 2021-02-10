app.controller('QrCodeToFormController',function($scope, FormService){
    $scope.qrcode_input = '';
    $scope.form = {};
    $scope.canFillForm = false;

    $scope.genForm = () => {
       $scope.data = JSON.parse($scope.qrcode_input);
       FormService.getForm(parseInt($scope.data.idFormulaire)).then(response => {
           console.log(response.data);
           if (response.data){
                $scope.form = response.data;
                $scope.canFillForm = true;
           }
       });
    }

    $scope.fillForm = () => {
        let data = JSON.parse($scope.qrcode_input);
        for (let i = 0 ; i < $scope.form.fields.length ; i++){
            let id = $scope.form.fields[i].id;
            let currentFieldName = $scope.form.fields[i].name;
            let currentValue = data[currentFieldName];
            document.getElementById(id+'_'+currentFieldName).value = currentValue;
        }
    }
});