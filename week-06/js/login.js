window.onload = function(){

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailInput = document.getElementById('email');
    var errorE = document.querySelector('.error');

    function validateEmail(email){
    if (emailExpression.test(email)){
            return true;
        }
        return false;
    }

    emailInput.addEventListener('blur', function(event){
        console.log('blur', event.target.value);
        if (!validateEmail(event.target.value)){
            emailInput.classList.add('red-border');
            errorE.classList.remove('none');
        }
    });

    emailInput.addEventListener('focus', function(){
        emailInput.classList.remove('red-border');
        errorE.classList.add('none');
    });

    function isUpLetter(c){
        for (var i=65; i<=90; i++){
            if (c.charCodeAt(0) == i){
                return true;
            }
        }
        return false;
    }

    function isLowLetter(c){
        for (var i=97; i<=122; i++){
            if (c.charCodeAt(0) == i){
                return true;
            }
        }
        return false;
    }

    function isNumber(c){
        for (var i=0; i<10; i++){
            if (c == i){
                return true;
            }
        }
        return false;
    }

    function isSpecialCharacter(c){
        if(!(isUpLetter(c) || isLowLetter(c) || isNumber(c))){
            return true;
        }
        return false;
    }

    function validatePassword(password){
        if ((password.length>=8) && (password.length<=20)){
            var lowLetter=false;
            var upLetter=false;
            var specialCharacter=false;
            var number=false;
            var cont=0;
            while((cont<password.length) && (lowLetter==false ||
                 upLetter==false || specialCharacter==false || number==false)){
                if(isLowLetter(password[cont])){
                    lowLetter=true;
                }else if(isUpLetter(password[cont])){
                    upLetter=true;
                }else if(isSpecialCharacter(password[cont])){
                    specialCharacter=true;
                }else if(isNumber(password[cont])){
                    number=true;
                }
                cont++;
            }
            if(!(lowLetter==false || upLetter==false || specialCharacter==false || number==false)){
                return true;
            }
            return false;
        }
        return false;
    }

    var passwordInput = document.querySelector('input[type="password"]');
    var errorP = document.getElementsByTagName('p');
    passwordInput.addEventListener('blur', function(event){
        console.log('blur', event.target.value);
        if(!validatePassword(event.target.value)){
            passwordInput.classList.add('red-border');
            errorP[2].classList.remove('none');
        }
    });

    passwordInput.addEventListener('focus', function(event){
        passwordInput.classList.remove('red-border');
        errorP[2].classList.add('none');
    });

    var submitButton=document.querySelector('input[type="submit"]');

    submitButton.addEventListener('click', function(event){
        if ((validateEmail(emailInput.value)) && (validatePassword(passwordInput.value))){
            event.preventDefault();
            alert('Email: ' + emailInput.value + ' Password: ' + passwordInput.value);
        } else{
            alert('Fill using valid information');
        }
    });
}