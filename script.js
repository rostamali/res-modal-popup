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
        resModalMessage.innerText = `Lamentablemente aún no podemos asegurar cervezas frescas en el país que seleccionaste. Por favor escoge otra opción.`;
        
    }
});

const billingCity = document.getElementById('billing_city');
billingCity.addEventListener('change', function(){
    
    const billingCityValue = billingCity.value;
    const billingCityValueLowerCase = billingCityValue.toLowerCase();
    const billingCityValueChecker = billingCityValueLowerCase === 'santiago' || billingCityValueLowerCase === 'stgo' || billingCityValueLowerCase === 'región metropolitana' || billingCityValueLowerCase === 'región metropolitana de santiago' || billingCityValueLowerCase === 'santiago región metropolitana' || billingCityValueLowerCase === 'metropolitana';

    if(billingCityValueChecker){
        resModalPopUp.style.display = 'none';
    }
    else{
        resModalPopUp.style.display = 'block';
        resModalMessage.innerText = `Lamentablemente aún no podemos asegurar cervezas frescas en la ciudad que seleccionaste. Por favor escoge otra opción`;
    }
});

function resCloseModal(){
    resModalPopUp.style.display = 'none';
}
document.classList.add('background-overly');

