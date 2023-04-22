window.onload = function(){

    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var emailInput = document.getElementById('email');
    console.log('email input tiene: ', emailInput);
    emailInput.addEventListener('blur', function(event){
        console.log('blur', event.target.value)
        if (!emailExpression.test(event.target.value)){
            alert('The email is wrong');
        }
    })

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

    var passwordInput = document.querySelector('input[type="password"]');

    passwordInput.onblur=function(event){
        if ((event.target.value.length>=8) && (event.target.value.length<=20)){
            var lowLetter=false;
            var upLetter=false;
            var specialCharacter=false;
            var number=false;
            var cont=0;
            while((cont<event.target.value.length) && (lowLetter==false || upLetter==false || specialCharacter==false || number==false)){
                console.log('el while se itero: ', cont, ' veces');
                if(isLowLetter(event.target.value[cont])){
                    lowLetter=true;
                }else if(isUpLetter(event.target.value[cont])){
                    upLetter=true;
                }else if(isSpecialCharacter(event.target.value[cont])){
                    specialCharacter=true;
                }else if(isNumber(event.target.value[cont])){
                    number=true;
                }
                cont++;
            }
            console.log('Tiene caracter lower?', lowLetter);
            console.log('Tiene caracter upper?', upLetter);
            console.log('Tiene caracter especial?', specialCharacter);
            console.log('Tiene caracter number?', number);
            if((lowLetter==false || upLetter==false || specialCharacter==false || number==false)){
                alert('The password is wrong');
            }
        }else{
            alert('The password is wrong');
        }
    }
}