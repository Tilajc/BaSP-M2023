window.onload = function(){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    function validateEmail(email){
        if (emailExpression.test(email)){
                return true;
            }
            return false;
        }

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
        if (c != ' '){
            for (var i=0; i<10; i++){
                if (c == i){
                    return true;
                }
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

    function validateID(id){
        if(id.length>7){
            for (var i=0; i<id.length; i++){
                if((!isNumber(id[i]))){
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    function validatePhoneNumber(n){
        if(n.length==10){
            for (var i=0; i<n.length; i++){
                if((!isNumber(n[i]))){
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    function validateAddress(a){
        if(a.length>=5){
            var letterVerifier=false;
            var numberVerifier=false;
            var spaceVerifier=false;
            var verifier=true;
            var cont=0;
            while((cont<a.length) && (verifier==true)){
                if((isUpLetter(a[cont]) || (isLowLetter(a[cont])))){
                    letterVerifier=true;
                } else if(isNumber(a[cont])){
                    numberVerifier=true;
                } else if(a[cont]==' '){
                    spaceVerifier=true;
                } else {
                    verifier=false;
                }
                cont++;
            }
            if(letterVerifier==true && numberVerifier==true && spaceVerifier==true && verifier==true){
                return true;
            }
        }
        return false;
    }

    function validateZip(z){
        if(z.length>3 && z.length<6){
            for(var i=0; i<z.length; i++){
                if(!isNumber(z[i])){
                    return false;
                }
            }
            return true;
        } else{
            return false;
        }
    }

    function validateLocality(l){
        if(l.length>3){
            for (var i=0; i<l.length; i++){
                if(!(isNumber(l[i]) || isLowLetter(l[i]) || isUpLetter(l[i]) || (l[i]==' '))){
                    return false;
                }
            }
            return true;
        }
    }

    function confirmPassword(p1,p2){
        if(p1===p2){
            return true;
        }
        return false;
    }

    function validateBirthDate(a){
        var birthDate = new Date(a);
        var currentDate = new Date();
        var diference = currentDate.getTime()-birthDate.getTime();
        var age = Math.floor(diference/(1000*60*60*24*365));
        if(age>=12){
            return true;
        }
        return false;
    }

    function validateAll(name, lastName, id, birthDate, phoneNumber,
        address, zipCode, locality, email, password, cPassword){
        if(validateNames(name) && validateNames(lastName) && validateID(id) &&
        validateBirthDate(birthDate) && validatePhoneNumber(phoneNumber) && validateAddress(address) &&
        validateZip(zipCode) && validateLocality(locality) && validateEmail(email) &&
        validatePassword(password) && confirmPassword(password, cPassword)){
            return true;
        }
        return false;
    }

    function validateAllInformation(name, lastName, id, birthDate, phoneNumber,
        address, zipCode, locality, email, password, cPassword){
            var array = [];
            if(!validateNames(name)){
                array.push('Invalid Name: "' + name + '"');
            }
            if(!validateNames(lastName)){
                array.push('\nInvalid Last name: "' + lastName + '"');
            }
            if(!validateID(id)){
                array.push('\nInvalid ID: "' + id + '"');
            }
            if(!validateBirthDate(birthDate)){
                array.push('\nInvalid Birth Date: "' + birthDate + '"');
            }
            if(!validatePhoneNumber(phoneNumber)){
                array.push('\nInvalid Phone number "' + phoneNumber + '"');
            }
            if(!validateAddress(address)){
                array.push('\nInvalid Address "' + address + '"');
            }
            if(!validateZip(zipCode)){
                array.push('\nInvalid Zip Code "' + zipCode + '"');
            }
            if(!validateLocality(locality)){
                array.push('\nInvalid Locality "' + locality + '"');
            }
            if(!validateEmail(email)){
                array.push('\nInvalid Email "' + email + '"');
            }
            if(!validatePassword(password)){
                array.push('\nInvalid Password "' + password + '"');
            }
            if(!confirmPassword(cPassword)){
                array.push('\nInvalid Confirm Password "' + cPassword + '"');
            }

            return array;
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

    var inputID = document.getElementById('id');

    inputID.addEventListener('blur', function(event){
        if(!validateID(event.target.value)){
            inputID.classList.add('red-border');
            errorMessage[2].classList.remove('none');
        }
    });

    inputID.addEventListener('focus', function(event){
        if(!validateID(event.target.value)){
            inputID.classList.remove('red-border');
            errorMessage[2].classList.add('none');
        }
    });

    var inputBirthDate = document.getElementById('birth-date');

    inputBirthDate.addEventListener('blur', function(event){
        if(!validateBirthDate(event.target.value)){
            inputBirthDate.classList.add('red-border');
            errorMessage[3].classList.remove('none');
        }
    });

    inputBirthDate.addEventListener('focus', function(){
            inputBirthDate.classList.remove('red-border');
            errorMessage[3].classList.add('none');
    });

    var inputPhoneNumber = document.getElementById('phone-number');

    inputPhoneNumber.addEventListener('blur', function(event){
        if(!validatePhoneNumber(event.target.value)){
            inputPhoneNumber.classList.add('red-border');
            errorMessage[4].classList.remove('none');
        }
    });

    inputPhoneNumber.addEventListener('focus', function(){
            inputPhoneNumber.classList.remove('red-border');
            errorMessage[4].classList.add('none');
        });

    var inputAddress = document.getElementById('address');

    inputAddress.addEventListener('blur', function(event){
        if(!validateAddress(event.target.value)){
            inputAddress.classList.add('red-border');
            errorMessage[5].classList.remove('none');
        }
    });

    inputAddress.addEventListener('focus', function(){
        inputAddress.classList.remove('red-border');
        errorMessage[5].classList.add('none');
    });

    var inputZip = document.getElementById('zip-code');

    inputZip.addEventListener('blur', function(event){
        if(!validateZip(event.target.value)){
            inputZip.classList.add('red-border');
            errorMessage[6].classList.remove('none');
        }
    });

    inputZip.addEventListener('focus', function(){
        inputZip.classList.remove('red-border');
        errorMessage[6].classList.add('none');
    });

    var inputLocality = document.getElementById('locality');

    inputLocality.addEventListener('blur', function(event){
        if(!validateLocality(event.target.value)){
            inputLocality.classList.add('red-border');
            errorMessage[7].classList.remove('none');
        }
    });

    inputLocality.addEventListener('focus', function(){
        inputLocality.classList.remove('red-border');
        errorMessage[7].classList.add('none');
    });

    var inputEmail = document.getElementById('email');

    inputEmail.addEventListener('blur', function(event){
        if(!validateEmail(event.target.value)){
            inputEmail.classList.add('red-border');
            errorMessage[8].classList.remove('none');
        }
    });

    inputEmail.addEventListener('focus', function(){
        inputEmail.classList.remove('red-border');
        errorMessage[8].classList.add('none');
    });

    var inputPassword = document.getElementById('password');

    inputPassword.addEventListener('blur', function(event){
        if(!validatePassword(event.target.value)){
            inputPassword.classList.add('red-border');
            errorMessage[9].classList.remove('none');
        }
    });

    inputPassword.addEventListener('focus', function(){
        inputPassword.classList.remove('red-border');
        errorMessage[9].classList.add('none');
    });

    var inputCPassword = document.getElementById('confirm-password');

    inputCPassword.addEventListener('blur', function(event){
        if(!confirmPassword(event.target.value, inputPassword.value)){
            inputCPassword.classList.add('red-border');
            errorMessage[10].classList.remove('none');
        }
    });

    inputCPassword.addEventListener('focus', function(){
        inputCPassword.classList.remove('red-border');
        errorMessage[10].classList.add('none');
    });

    var submitButton=document.querySelector('input[type="submit"]');

    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        if (validateAll(inputName.value, inputLastName.value, inputID.value,
            inputBirthDate.value, inputPhoneNumber.value, inputAddress.value,
            inputZip.value, inputLocality.value, inputEmail.value,
            inputPassword.value, inputCPassword.value)){
            alert('Name: ' + inputName.value +
            '\nLast name: ' + inputLastName.value +
            '\nID: ' + inputID.value +
            '\nBirth date: ' + inputBirthDate.value +
            '\nPhone number: ' + inputPhoneNumber.value +
            '\nAddress: ' + inputAddress.value +
            '\nZip code: ' + inputZip.value +
            '\nLocality: ' + inputLocality.value +
            '\nEmail: ' + inputEmail.value +
            '\nPassword: ' + inputPassword.value +
            '\nConfirm password: ' + inputCPassword.value
            );
        } else{
            alert(validateAllInformation(inputName.value, inputLastName.value, inputID.value,
            inputBirthDate.value, inputPhoneNumber.value, inputAddress.value,
            inputZip.value, inputLocality.value, inputEmail.value,
            inputPassword.value, inputCPassword.value));
        }});
}