const resModalPopUp = document.getElementById('res-modal');
const resModalMessage = document.getElementById('res-modal-message');

const billingCountry = document.getElementById('billing_country');
billingCountry.addEventListener('change', function(){
    console.log(billingCountry.value);

    if(billingCountry.value === 'CL'){
        resModalPopUp.style.display = 'none';
    }
    else{
        resModalPopUp.style.display = 'block';
        resModalMessage.innerText = `"Lamentablemente aún no podemos asegurar cervezas frescas en el país que seleccionaste. Por favor escoge otra opción.

        Cobertura actual: Chile"`;
    }
});

const billingCity = document.getElementById('billing_city');
billingCity.addEventListener('change', function(){
    
    const billingCityValue = billingCity.value;
    const billingCityValueLowerCase = billingCityValue.toLowerCase();
    const billingCityValueChecker = billingCityValueLowerCase === 'santiago' || billingCityValueLowerCase === ' santiago' || billingCityValueLowerCase === 'santiago ' || billingCityValueLowerCase === 'stgo' || billingCityValueLowerCase === ' stgo' || billingCityValueLowerCase === 'stgo ' || billingCityValueLowerCase === 'región metropolitana' || billingCityValueLowerCase === ' región metropolitana' || billingCityValueLowerCase === 'región metropolitana ' || billingCityValueLowerCase === 'región metropolitana de santiago' || billingCityValueLowerCase === ' región metropolitana de santiago' || billingCityValueLowerCase === 'región metropolitana de santiago ' || billingCityValueLowerCase === 'santiago región metropolitana' || billingCityValueLowerCase === ' santiago región metropolitana' || billingCityValueLowerCase === 'santiago región metropolitana ' || billingCityValueLowerCase === 'metropolitana' || billingCityValueLowerCase === ' metropolitana' || billingCityValueLowerCase === 'metropolitana ';

    if(billingCityValueChecker){
        resModalPopUp.style.display = 'none';
    }
    else{
        resModalPopUp.style.display = 'block';
        resModalMessage.innerText = `"Lamentablemente aún no podemos asegurar cervezas frescas en la ciudad que seleccionaste. Por favor escoge otra opción

        Cobertura actual: Santiago o Región Metropolitana"`;
    }
});

function resCloseModal(){
    resModalPopUp.style.display = 'none';
}

'santiago', 'stgo', 'región metropolitana', 'región metropolitana de santiago', 'santiago región metropolitana', 'metropolitana';

