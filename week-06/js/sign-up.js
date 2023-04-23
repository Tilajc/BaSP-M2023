window.onload = function(){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    function validateEmail(email){
        if (emailExpression.test(email)){
                return true;
            }
            return false;
        }

    function isUpLetter(c){
        for (i=65; i<=90; i++){
            if (c.charCodeAt(0) == i){
                return true;
            }
        }
        return false;
    }

    function isLowLetter(c){
        for (i=97; i<=122; i++){
            if (c.charCodeAt(0) == i){
                return true;
            }
        }
        return false;
    }

    function isNumber(c){
        for (i=0; i<10; i++){
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

    function validateNames(n){
        if(n.length>=3 && n.length<=30){
            var verifier=true;
            cont=0;
            while((cont<n.length) && (verifier==true)){
                if (cont==0 || cont==n.indexOf(' ')+1){
                    if(!isUpLetter(n[cont])){
                        verifier=false;
                    }
                }  else{
                    if(!isLowLetter(n[cont])){
                        verifier=false;
                    }
                }
                console.log(cont);
                cont++;
                if(cont==n.indexOf(' ')){
                    cont++;
                }
            }
        }
        return verifier;
    }


    var emailInput = document.getElementsByTagName('input');
    var emailError = document.getElementsByClassName('error');

    emailInput[8].addEventListener('blur', function(event){
        console.log('Blur', event.target.value);
        if(!validateEmail(event.target.value)){
            emailInput[8].classList.add('red-border');
            emailError[8].classList.remove('none');
        }
    })

    emailInput[8].addEventListener('focus', function(event){
        emailInput[8].classList.remove('red-border');
        emailError[8].classList.add('none');
    })

    var passwordInput = document.getElementsByTagName('input');
    var passwordError = document.getElementsByClassName('error');

    passwordInput[9].addEventListener('blur', function(event){
        if(!validatePassword(event.target.value)){
            passwordInput[9].classList.add('red-border');
            passwordError[9].classList.remove('none');
        }
    })

    passwordInput[9].addEventListener('focus', function(event){
        if(!validatePassword(event.target.value)){
            passwordInput[9].classList.remove('red-border');
            passwordError[9].classList.add('none');
        }
    })

    var inputName = document.querySelector('input');
    var nameError = document.getElementsByClassName('error');

    inputName.addEventListener('blur', function(event){
        if(!validateNames(event.target.value)){
            inputName.classList.add('red-border');
            nameError[0].classList.remove('none');
        }
    })

    inputName.addEventListener('focus', function(event){
        inputName.classList.remove('red-border');
        nameError[0].classList.add('none');
    })

    var inputLastname = document.getElementById('lastname');
    var lastnameError = document.getElementsByClassName('error');

    inputLastname.addEventListener('blur', function(event){
        console.log('blur', event.target.value);
        if(!validateNames(event.target.value)){
            inputLastname.classList.add('red-border');
            lastnameError[1].classList.remove('none');
        }
    })

    inputLastname.addEventListener('focus', function(event){
        if(!validateNames(event.target.value)){
            inputLastname.classList.remove('red-border');
            lastnameError[1].classList.add('none');
        }
    })
}