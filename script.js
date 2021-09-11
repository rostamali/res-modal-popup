const resModalPopUp = document.getElementById('res-modal');
const resModalMessage = document.getElementById('res-modal-message');

const billingCountry = document.getElementById('billing_country');
billingCountry.addEventListener('change', function(){
    console.log(billingCountry.value);

    if(billingCountry.value === 'BN'){
        resModalPopUp.style.display = 'none';
    }
    else{
        resModalPopUp.style.display = 'block';
        resModalMessage.innerText = `Lamentablemente aún no podemos asegurar cervezas frescas en el país que seleccionaste. Por favor escoge otra opción.`;
        
    }
});

const billingCity = document.getElementById('billing_city');
billingCity.addEventListener('change', function(){
    
    const billingCountryValue = billingCity.value;
    console.log(billingCountryValue.toLowerCase());

    if(billingCountryValue.toLowerCase() === 'rajshahi'){
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