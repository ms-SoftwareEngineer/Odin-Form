let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
function passwordValidation(){
    if(password.value === confirmPassword.value){
        confirmPassword.setCustomValidity('');
    }else{
        confirmPassword.setCustomValidity('Passwords do not match');
    }
}

confirmPassword.addEventListener('change',passwordValidation);