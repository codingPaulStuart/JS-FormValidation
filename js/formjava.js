    // This is the first and main function for the script, to validate all the fields//

    function validateForm() {

        // All variables are declared and linked to the HTML document //

        var firstname = document.getElementById("firstname");
        var firstnameError = document.getElementById("firstnameError");
        var lastname = document.getElementById("lastname");
        var lastnameError = document.getElementById("lastnameError");
        var email = document.getElementById("email");
        var emailError = document.getElementById("emailError");
        var mobile = document.getElementById("mobile");
        var mobileError = document.getElementById("mobileError");
        var street = document.getElementById("street");
        var streetError = document.getElementById("streetError");
        var suburb = document.getElementById("suburb");
        var suburbError = document.getElementById("suburbError");
        var postcode = document.getElementById("postcode");
        var postcodeError = document.getElementById("postcodeError");
        var city = document.getElementById("city");
        var cityError = document.getElementById("cityError");
        var country = document.getElementById("country");
        var countryError = document.getElementById("countryError");
        var cardnumber = document.getElementById("cardnumber");
        var cardnumberError = document.getElementById("cardnumberError");
        var expirmonth = document.getElementById("expirmonth");
        var expirmonthError = document.getElementById("expirmonthError");
        var expiryear = document.getElementById("expiryear");
        var expiryearError = document.getElementById("expiryearError");
        var ccv = document.getElementById("ccv");
        var ccvError = document.getElementById("ccvError");
        var cardtype = document.getElementById("cardtype");
        var cardtypeError = document.getElementById("cardtypeError");
        var currentDate = new Date();
        var currentMonth = currentDate.getMonth();
        var currentYear = currentDate.getFullYear();

        // If  field is left blank, the script writes directly to the HTML page prompting the user //

        if (firstname.value == "") {
            firstnameError.style.color = "red"
            firstnameError.innerHTML = "First Name required";
            firstname.focus();
            return false;
        }
        firstnameError.innerHTML = "";

        // If  field is left blank, the script writes directly to the HTML page prompting the user //

        if (lastname.value == "") {
            lastnameError.style.color = "red"
            lastnameError.innerHTML = "Surname required";
            lastname.focus();
            return false;
        }
        lastnameError.innerHTML = "";

        // If  field is left blank, the script writes directly to the HTML page prompting the user //

        if (email.value == "") {
            emailError.style.color = "red"
            emailError.innerHTML = "Please Enter a Valid Email Address";
            email.focus();
            return false;
        }
        emailError.innerHTML = "";

        // If user does not use the '@' symbol when typing in their email it prompts the user to adjust //

        if (email.value.indexOf("@") == -1) {
            emailError.style.color = "red"
            emailError.innerHTML = "Please Enter a Valid Email Address";
            email.focus();
            return false;
        }
        emailError.innerHTML = "";

        // If mobile number is less than 10 digits the script writes to the HTML and promts the user to correct // 

        if (mobile.value.length < 10) {
            mobileError.style.color = "red"
            mobileError.innerHTML = "Please Enter a valid Mobile";
            mobile.focus();
            return false;
        }
        mobileError.innerHTML = "";

        // If user enters any non-numerical characters the script writes the HTML page and prompts the user to correct //  

        if (isNaN(mobile.value)) {
            mobileError.style.color = "red"
            mobileError.innerHTML = "Please Enter a numeric value";
            mobile.focus();
            return false;
        }
        mobileError.innerHTML = "";

        // If  field is left blank, the script writes directly to the HTML page prompting the user //

        if (street.value == "") {
            streetError.style.color = "red"
            streetError.innerHTML = "Please Enter a valid Street Number and Name";
            street.focus();
            return false;
        }
        streetError.innerHTML = "";

        // If  field is left blank, the script writes directly to the HTML page prompting the user //

        if (suburb.value == "") {
            suburbError.style.color = "red"
            suburbError.innerHTML = "Please Enter a Suburb Name";
            suburb.focus();
            return false;
        }
        suburbError.innerHTML = "";

        // If postcode is less than 4 digits or more than 4 the script writes to the HTML page to prompt user to change //

        if (postcode.value.length != 4) {
            postcodeError.style.color = "red"
            postcodeError.innerHTML = "Please Enter a 4 digit Postcode";
            postcode.focus();
            return false;
        }
        postcodeError.innerHTML = "";

        // If user enters any non-numerical characters the script writes the HTML page and prompts the user to correct //  

        if (isNaN(postcode.value)) {
            postcodeError.style.color = "red"
            postcodeError.innerHTML = "Please Enter a 4 digit Postcode";
            postcode.focus();
            return false;
        }
        postcodeError.innerHTML = "";

        // If  field is left blank, the script writes directly to the HTML page prompting the user //  

        if (city.value == "") {
            cityError.style.color = "red"
            cityError.innerHTML = "Please Enter a City or Town";
            city.focus();
            return false;
        }
        cityError.innerHTML = "";

        // If  field is left blank, the script writes directly to the HTML page prompting the user //

        if (country.value == 0) {
            countryError.style.color = "red"
            countryError.innerHTML = "Please choose from the dropdown list";
            country.focus();
            return false;
        }
        countryError.innerHTML = "";

        // If  field is left blank, the script writes directly to the HTML page prompting the user //

        if (cardnumber.value == "") {
            cardnumberError.style.color = "red"
            cardnumberError.innerHTML = "Please Enter a 16 digit Card Number";
            cardnumber.focus();
            return false;
        }
        cardnumberError.innerHTML = "";

        // If user does not enter a 16 digit number or enters non-numericals the script writes to HTML to promt user //    

        if (cardnumber.value.length != 16) {
            cardnumberError.style.color = "red"
            cardnumberError.innerHTML = "Please Enter a 16 digit Card Number";
            country.focus();
            return false;
        }
        cardnumberError.innerHTML = "";

        if (isNaN(cardnumber.value)) {
            cardnumberError.style.color = "red"
            cardnumberError.innerHTML = "Card Cannot have any non-numericals";
            country.focus();
            return false;
        }
        cardnumberError.innerHTML = "";

        // If  field is left blank, the script writes directly to the HTML page prompting the user //

        if (expirmonth.value == 0) {
            expirmonthError.style.color = "red"
            expirmonthError.innerHTML = "Please choose";
            expirmonth.focus();
            return false;
        }
        expirmonthError.innerHTML = "";

        // If  field is left blank, the script writes directly to the HTML page prompting the user //

        if (expiryear.value == 0) {
            expiryearError.style.color = "red"
            expiryearError.innerHTML = "Please choose";
            expiryear.focus();
            return false;
        }
        expiryearError.innerHTML = "";

        // If  the current year is greater than the expiry year the user inputs the script writes to HTML and prompts//

        if (expiryear.value < currentYear) {
            expiryearError.style.color = "red"
            expiryearError.innerHTML = "Card has expired";
            expiryear.focus();
            return false;
        }
        expiryearError.innerHTML = "";

        // This ensures the CCV number is only 3 digits in length //

        if (ccv.value.length != 3) {
            ccvError.style.color = "red"
            ccvError.innerHTML = "Please Enter a 3 digit CCV number from back of card";
            ccv.focus();
            return false;
        }
        ccvError.innerHTML = "";

        // If user enters any non-numerical characters the script writes to the HTML and prompts //

        if (isNaN(ccv.value)) {
            ccvError.style.color = "red"
            ccvError.innerHTML = "CCV number can only be numeric";
            ccv.focus();
            return false;
        }
        ccvError.innerHTML = "";

        // If user leaves blank the script writes to HTML page and prompts user to correct //

        if (cardtype.value == 0) {
            cardtypeError.style.color = "red"
            cardtypeError.innerHTML = "Please choose from the dropdown list";
            cardtype.focus();
            return false;
        }
        cardtypeError.innerHTML = "";

        // Final alert message to user that form has been filled in correctly //

        alert("Thank you for your submission!");
        return true;
    }

    // These next 2 functions style and highlight the fields on the HTML page when the user selects them //

    function changeBgd(textField) {
        textField.style.background = "lightyellow";
    }

    function resetBgd(textField) {
        textField.style.background = "lightgrey";
    }

    //This function is for the website switch statement with pop-up browser windows//

    function loadsites() {
        var choice = 0;
        choice = parseInt(prompt("Please Choose the website you would like to visit\n 1: Google\n 2: WWW3 Schools\n 3: TAFE SA", "1"));
        switch (choice) {
            case 1:
                window.open("https://www.google.com", "_blank", "toolbar=yes,menubar=yes scrollbars=yes,resizable=yes,top=30,left=30,width=800,height=800");
                break;

            case 2:
                window.open("https://www.w3schools.com", "_blank", "toolbar=yes,menubar=yes scrollbars=yes,resizable=yes,top=30,left=30,width=800,height=800");
                break;

            case 3:
                window.open("https://www.tafesa.edu.au", "_blank", "toolbar=yes,menubar=yes scrollbars=yes,resizable=yes,top=30,left=30,width=800,height=800");
                break;
        }
    }
