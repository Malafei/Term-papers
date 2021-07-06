//window.onload = function () {
    //дані які надсилаються в модалку
    var modalName = document.getElementById("modalName")
    var modalPhone = document.getElementById("modalPhone");
    var modalDate = document.getElementById("modalDate");
    var modalCountry = document.getElementById("modalCountry");

    //регулярний вираз для телефону
    const regex_phone = /^(?=\+?([0-9]{2})\(?([0-9]{3})\)?([0-9]{3})-?([0-9]{2})-?([0-9]{2})).{17}$/;

    //дані з полів
    var txtName = document.getElementById("txtName");
    var txtLastName = document.getElementById("txtLastName");
    var txtFatherName = document.getElementById("txtFatherName")
    var txtDate = document.getElementById("txtDate");
    var phone = document.getElementById("phone-mask");
    var txtCountry = document.getElementById("txtCountry");

    //кнопка надіслати
    var btn = document.getElementById("btnClick");

    //маска для телефону
    var phoneMask = IMask(
        phone, {
        mask: '+{38}(000)000-00-00',
        lazy: false
    });

    //Datepicker
    var dateObj = new Date();
    var month = dateObj.getUTCMonth(); //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear() - 18;
    $('#txtDate').datepicker({
        format: "dd.mm.yyyy",
        startDate: "01.01.1900",
        language: "uk",
        endDate: `${day}.${month}.${year}`
    });



    btn.onclick = function () {
        var name = txtName.value;
        var lastName = txtLastName.value;
        var fatherName = txtFatherName.value;
        var phoneVal = phone.value;
        var dateBirth = txtDate.value;
        var country = txtCountry.value;
        var isValid = true;


        if (dateBirth == "") {
            showError(txtDate);
            isValid = false;
        }
        else {
            showSuccess(txtDate);
        }


        if (name == "") {
            showError(txtName);
            isValid = false;
        }
        else {
            showSuccess(txtName);
        }

        if (lastName == "") {
            showError(txtLastName);
            isValid = false;
        }
        else {
            showSuccess(txtLastName);
        }

        if (fatherName == "") {
            showError(txtFatherName);
            isValid = false;
        }
        else {
            showSuccess(txtFatherName);
        }


        if (!regex_phone.test(phone.value)) {
            showError(phone);
            isValid = false;
        }
        else {
            showSuccess(phone);
        }


        if (isValid) {
            $("#modalInfo").modal("show");
            modalName.innerHTML = lastName + " " + name + " " + fatherName;
            modalPhone.innerHTML = phoneVal;
            modalDate.innerHTML = dateBirth;
            modalCountry.innerHTML = country;
        }


    }


    txtName.oninput = isValidTextInput;
    txtLastName.oninput = isValidTextInput;
    txtFatherName.oninput = isValidTextInput;
    txtDate.onchange = isValidTextInput;

    phone.oninput = function () {
        if (!regex_phone.test(phone.value)) {
            showError(phone);
        }
        else {
            showSuccess(phone);
        }
    }

    function isValidTextInput(e) {
        if (e.target.value == "") {
            showError(e.target);
        }
        else {
            showSuccess(e.target);
        }
    }

    function showError(input) {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
    }

    function showSuccess(input) {
        input.classList.remove("is-invalid");
        input.classList.add("is-valid");
    }
//}