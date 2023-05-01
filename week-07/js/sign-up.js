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
                if(cont==0){
                    if(!(isUpLetter(a[cont]) || isLowLetter(a[cont] || isNumber(a[cont])))){
                        return false;
                    }
                }
                switch(true){
                    case (isUpLetter(a[cont]) || isLowLetter(a[cont])): letterVerifier=true;
                    break;
                    case isNumber(a[cont]):numberVerifier=true;
                    break;
                    case (a[cont]==' '):spaceVerifier=true;
                    break;
                    default: verifier=false;
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

    function validateCity(l){
        var cont=0;
        if(l.length>3){
            for (var i=0; i<l.length; i++){
                if(!(isNumber(l[i]) || isLowLetter(l[i]) || isUpLetter(l[i]) || (l[i]==' '))){
                    return false;
                } else {
                    if(isLowLetter(l[i]) || isUpLetter(l[i])){
                        cont++;
                }
            }
            }
            if(cont>=3){
                return true;
            }
            return false;
        }
        return false;
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
        address, zipCode, city, email, password, cPassword){
        if(validateNames(name) && validateNames(lastName) && validateID(id) &&
        validateBirthDate(birthDate) && validatePhoneNumber(phoneNumber) && validateAddress(address) &&
        validateZip(zipCode) && validateCity(city) && validateEmail(email) &&
        validatePassword(password) && confirmPassword(password, cPassword)){
            return true;
        }
        return false;
    }

    function validateAllInformation(name, lastName, id, birthDate, phoneNumber,
        address, zipCode, city, email, password, cPassword){
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
            if(!validateCity(city)){
                array.push('\nInvalid City "' + city + '"');
            }
            if(!validateEmail(email)){
                array.push('\nInvalid Email "' + email + '"');
            }
            if(!validatePassword(password)){
                array.push('\nInvalid Password "' + password + '"');
            }
            if(!confirmPassword(password, cPassword)){
                array.push('\nInvalid Confirm Password "' + cPassword + '"');
            }
            return array;
        }

    function changeDateFormat(date){
        var dateArray = date.split('-');

        var year=dateArray[0];
        var month=dateArray[1];
        var day=dateArray[2];

        dateArray= month + '/' + day + '/' + year;
        return dateArray;
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

    var inputCity = document.getElementById('city');

    inputCity.addEventListener('blur', function(event){
        if(!validateCity(event.target.value)){
            inputCity.classList.add('red-border');
            errorMessage[7].classList.remove('none');
        }
    });

    inputCity.addEventListener('focus', function(){
        inputCity.classList.remove('red-border');
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

    var locStorageName = localStorage.getItem('name');
    var locStorageLastName = localStorage.getItem('last-name');
    var locStorageID = localStorage.getItem('id');
    var locStorageBirthDate = localStorage.getItem('birth-date');
    var locStoragePhone = localStorage.getItem('phone-number');
    var locStorageAddress = localStorage.getItem('address');
    var locStorageZip = localStorage.getItem('zip');
    var locStorageCity = localStorage.getItem('city')
    var locStorageEmail = localStorage.getItem('email');
    var locStoragePassword = localStorage.getItem('password');
    var locStorageCPassword = localStorage.getItem('confirm-password');

    inputName.value=locStorageName;
    inputLastName.value=locStorageLastName;
    inputID.value=locStorageID;
    inputBirthDate.value=locStorageBirthDate;
    inputPhoneNumber.value=locStoragePhone;
    inputAddress.value=locStorageAddress;
    inputZip.value=locStorageZip;
    inputCity.value=locStorageCity;
    inputEmail.value=locStorageEmail;
    inputPassword.value=locStoragePassword;
    inputCPassword.value=locStorageCPassword;

    var modal=document.querySelector('.modal')
    var modalClose=document.querySelector('.modal-close');
    var modalP=document.querySelector('.modal-msg');

    modalClose.addEventListener('click', function(){
        modal.classList.add('none');
    })

    var submitButton=document.querySelector('input[type="submit"]');

    submitButton.addEventListener('click', function(event){
        event.preventDefault();

        if (validateAll(inputName.value, inputLastName.value, inputID.value,
            inputBirthDate.value, inputPhoneNumber.value, inputAddress.value,
            inputZip.value, inputCity.value, inputEmail.value,
            inputPassword.value, inputCPassword.value)){

            url ='https://api-rest-server.vercel.app/signup?'+
            'name=' +inputName.value+
            '&lastName='+inputLastName.value+
            '&dni='+inputID.value+
            '&dob='+changeDateFormat(inputBirthDate.value)+
            '&phone='+inputPhoneNumber.value+
            '&address='+inputAddress.value+
            '&zip='+inputZip.value+
            '&city='+inputCity.value+
            '&email='+inputEmail.value+
            '&password='+inputPassword.value+
            '&confirmPassword='+inputCPassword.value;

            fetch(url)
            .then(function(response){
                return response.json();
            })
            .then(function(response){
                if(!response.success){throw new Error(JSON.stringify(response))}
                alert(JSON.stringify(response));
                modal.classList.remove('none');
                modal.classList.add('flex');
                modalP.innerHTML='Name: ' + inputName.value +
                'Last name: ' + inputLastName.value +
                'ID: ' + inputID.value +
                'Birth date: ' + inputBirthDate.value +
                'Phone number: ' + inputPhoneNumber.value +
                'Address: ' + inputAddress.value +
                'Zip code: ' + inputZip.value +
                'City: ' + inputCity.value +
                'Email: ' + inputEmail.value +
                'Password: ' + inputPassword.value +
                'Confirm password: ' + inputCPassword.value;
                localStorage.setItem('name', inputName.value);
                localStorage.setItem('last-name', inputLastName.value);
                localStorage.setItem('id', inputID.value);
                localStorage.setItem('birth-date', inputBirthDate.value);
                localStorage.setItem('phone-number', inputPhoneNumber.value);
                localStorage.setItem('address', inputAddress.value);
                localStorage.setItem('zip', inputZip.value);
                localStorage.setItem('city', inputCity.value);
                localStorage.setItem('email', inputEmail.value);
                localStorage.setItem('password', inputPassword.value);
                localStorage.setItem('confirm-password', inputCPassword.value);
            })
            .catch(function(error){
                modal.classList.remove('none');
                modal.classList.add('flex');
                modalP.innerHTML=error;
            });
        } else{
            modal.classList.remove('none');
            modal.classList.add('flex');
            modalP.innerHTML=validateAllInformation(inputName.value, inputLastName.value, inputID.value,
            inputBirthDate.value, inputPhoneNumber.value, inputAddress.value,
            inputZip.value, inputCity.value, inputEmail.value,
            inputPassword.value, inputCPassword.value);
        }
    });
}