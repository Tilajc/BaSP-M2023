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

    function validatePassword(password){
        if ((password.length>=8) && (password.length<=20)){
            var lowLetter=false;
            var upLetter=false;
            var number=false;
            for(var i=0; i<password.length; i++){
                switch(true){
                    case isLowLetter(password[i]): lowLetter=true;
                    break;
                    case isUpLetter(password[i]): upLetter=true;
                    break;
                    case isNumber(password[i]): number=true;
                    break;
                    default: return false;
                }
            }
            if(!(lowLetter==false || upLetter==false || number==false)){
                return true;
            }
        }
        return false;
    }

    function validateAllInformation(email, password){
        var array = [];
        if(!validateEmail(email)){
            array.push('The field Email is wrong ' + email);
        }
        if(!validatePassword(password)){
            array.push('\nThe field Password is wrong ' + password);
        }

        return array;
    }

    var passwordInput = document.querySelector('input[type="password"]');
    var errorP = document.getElementsByTagName('p');

    passwordInput.addEventListener('blur', function(event){
        if(!validatePassword(event.target.value)){
            passwordInput.classList.add('red-border');
            errorP[2].classList.remove('none');
        }
    });

    passwordInput.addEventListener('focus', function(){
        passwordInput.classList.remove('red-border');
        errorP[2].classList.add('none');
    });

    var modal=document.querySelector('.modal')
    var modalContainer=document.querySelector('.modal-container');
    var modalClose=document.querySelector('.modal-close');
    var modalP=document.querySelector('.modal-msg');

    modalClose.addEventListener('click', function(){
        modal.classList.add('none');
        modalContainer.classList.remove('modal-container-red');
        modalClose.classList.remove('modal-close-red');
        modalContainer.classList.remove('modal-container-green');
        modalClose.classList.remove('modal-close-green');
    })

    var submitButton=document.querySelector('input[type="submit"]');

    submitButton.addEventListener('click', function(event){

        var url = `https://api-rest-server.vercel.app/login?email=${emailInput.value}&password=${passwordInput.value}`;

        event.preventDefault();

        if ((validateEmail(emailInput.value)) && (validatePassword(passwordInput.value))){
            fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                if(!response.success){throw new Error(JSON.stringify(response))}
                modal.classList.remove('none');
                modal.classList.add('flex');
                modalContainer.classList.add('modal-container-green');
                modalClose.classList.add('modal-close-green');
                modalP.innerHTML=JSON.stringify(response) + '\nEmail: ' + emailInput.value + '\nPassword: ' + passwordInput.value;
            })
            .catch(function(error){
                modal.classList.remove('none');
                modal.classList.add('flex');
                modalContainer.classList.add('modal-container-red');
                modalClose.classList.add('modal-close-red');
                modalP.innerHTML=error;
            })
        } else{
            modal.classList.remove('none');
            modal.classList.add('flex');
            modalContainer.classList.add('modal-container-red');
            modalClose.classList.add('modal-close-red');
            modalP.innerHTML=validateAllInformation(emailInput.value, passwordInput.value);
        }
    });
}