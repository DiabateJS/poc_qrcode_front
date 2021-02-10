app.controller('MainController',function($scope, FormService){
    
    $scope.data = {};

    $scope.fields = {};

    $scope.forms = [];
    $scope.form = {};

    $scope.loadData = () => {
        FormService.getForms().then(response => {
            if (response.data){
                console.log(response.data);
                $scope.forms = response.data;
            }
        }, error => {
            console.log('Error !');
            console.log(error);
        });
    } 

    $scope.genQrCode = () => {
        $scope.data['idFormulaire'] = $scope.form.id;
        $scope.form.fields.forEach(field => {
            $scope.data[field.name] = document.getElementById(field.id+'_'+field.name).value; 
        });
        $scope.qrcode_data = JSON.stringify($scope.data);
    }

    $scope.onFormChange = (id) => {
        FormService.getForm(id).then(response => {
            if (response.data){
                console.log(response.data);
                $scope.form = response.data;
            }
        }, error => {
            console.log('Error !');
            console.log(error);
        });     
    }
});