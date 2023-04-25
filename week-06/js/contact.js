window.onload = function(){

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

    function validateNames(n){
        if(n.length>3 && n.length<=30){
            var verifier=true;
            var cont=0;
            while((cont<n.length) && (verifier==true)){
                if(!(isUpLetter(n[cont]) || (isLowLetter(n[cont]) || (n[cont]==' ')))){
                    verifier=false;
                }
                cont++;
            }
        }
        return verifier;
    }


    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    function validateEmail(email){
        if (emailExpression.test(email)){
                return true;
            }
        return false;
    }

    var errorMessage = document.getElementsByClassName('error');

    var inputName = document.getElementById('name');

    inputName.addEventListener('blur', function(event){
        if(!validateNames(event.target.value)){
            inputName.classList.add('red-border');
            errorMessage[0].classList.remove('none');
        }
    });

    inputName.addEventListener('focus', function(){
        inputName.classList.remove('red-border');
        errorMessage[0].classList.add('none');
    });

    var inputLastName = document.getElementById('last-name');

    inputLastName.addEventListener('blur', function(event){
        if(!validateNames(event.target.value)){
            inputLastName.classList.add('red-border');
            errorMessage[1].classList.remove('none');
        }
    });

    inputLastName.addEventListener('focus', function(event){
        if(!validateNames(event.target.value)){
            inputLastName.classList.remove('red-border');
            errorMessage[1].classList.add('none');
        }
    });

    var inputEmail = document.getElementById('email');

    inputEmail.addEventListener('blur', function(event){
        if(!validateEmail(event.target.value)){
            inputEmail.classList.add('red-border');
            errorMessage[2].classList.remove('none');
        }
    });

    inputEmail.addEventListener('focus', function(){
        inputEmail.classList.remove('red-border');
        errorMessage[2].classList.add('none');
    });
}