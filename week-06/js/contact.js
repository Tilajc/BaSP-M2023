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

    function isNumber(c){
        for (var i=0; i<10; i++){
            if (c == i){
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

    function validateComment(comment){
        if(comment.length>=3){
            for(var i=0; i<comment.length; i++){
                if(!(isLowLetter(comment[i]) || isUpLetter(comment[i]) || isNumber(comment[i]))){
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    function validateAll(name, lastName, email, o1, o2, comment){
        if(validateNames(name) && validateNames(lastName) && validateEmail(email) && validateOption(o1,o2) && validateComment(comment)){
            return true;
        }
        return false;
    }

    function validateAllInformation(name, lastName, email, o1, o2, comment){
            var array = [];
            if(!validateNames(name)){
                array.push('Invalid Name: "' + name + '"');
            }
            if(!validateNames(lastName)){
                array.push('\nInvalid Last name: "' + lastName + '"');
            }
            if(!validateEmail(email)){
                array.push('\nInvalid Email "' + email + '"');
            }
            if(!validateOption(o1, o2)){
                array.push('\nInvalid Option "' + o1 + '"');
            }
            if(!validateComment(comment)){
                array.push('\nInvalid comment "' + comment + '"');
            }
            return array;
        }

    function validateOption(o1,o2){
        if(o1 != o2){
            return true;
        }
        return false;
    }

    console.log(validateOption('holi', 'holi'));

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

    var inputOption = document.getElementById('options');
    var invalidOption = document.getElementsByTagName('option');

    inputOption.addEventListener('blur', function(event){
        if((!validateOption(event.target.value, invalidOption[0].value))){
            inputOption.classList.add('red-border');
            errorMessage[3].classList.remove('none');
        }
    })

    inputOption.addEventListener('focus', function(){
            inputOption.classList.remove('red-border');
            errorMessage[3].classList.add('none');
    })

    var inputComment = document.getElementById('comments');

    inputComment.addEventListener('blur', function(event){
        if(!validateComment(event.target.value)){
            inputComment.classList.add('red-border');
            errorMessage[4].classList.remove('none');
        }
    })

    inputComment.addEventListener('focus', function(){
            inputComment.classList.remove('red-border');
            errorMessage[4].classList.add('none');
    })

    var submitButton=document.querySelector('input[type="submit"]');

    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        if (validateAll(inputName.value, inputLastName.value, inputEmail.value, inputOption.value, invalidOption[0].value ,inputComment.value)){
            alert('Name: ' + inputName.value +
            '\nLast name: ' + inputLastName.value +
            '\nEmail: ' + inputEmail.value +
            '\nOption: ' + inputOption.value +
            '\nComment: ' + inputComment.value
            );
        } else{
            alert(validateAllInformation(inputName.value, inputLastName.value, inputEmail.value, inputOption.value, invalidOption[0].value , inputComment.value));
        }
    });
}