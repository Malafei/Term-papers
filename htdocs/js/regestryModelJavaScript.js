
    window.onload = function () {

            var reg = document.getElementById("Regestry");

            reg.onclick = function () {
        $("#modalReg").modal("show");
                var txtContact = document.getElementById("txtContact");
                var txtPassword = document.getElementById("txtPassword");
                var txtConfirmPassword = document.getElementById("txtConfirmPassword");


                //txtContact.oninput = isValidTextInput;



                txtPassword.oninput = isValidPassword;
                txtConfirmPassword.oninput = isValidPassword;

                function isValidPassword(e) {
                    if (txtPassword.value != txtConfirmPassword.value || txtConfirmPassword.value == "") {
        txtConfirmPassword.classList.add("is-invalid");
                        txtPassword.classList.add("is-invalid");
                        txtConfirmPassword.classList.remove("is-valid");
                        txtPassword.classList.remove("is-valid");
                        console.log("tak");
                    }
                    else {
        txtConfirmPassword.classList.remove("is-invalid");
                        txtPassword.classList.remove("is-invalid");
                        txtConfirmPassword.classList.add("is-valid");
                        txtPassword.classList.add("is-valid");
                        console.log("ni");
                    }
                }



                var imgPhotoe = document.getElementById("imgPhotoe");
                var fileImages = document.getElementById("fileImages");

                fileImages.onchange = function (e) {
        console.log("Ви обрали файл");
                    let files = e.target.files;
                    if (files && files[0]) {
        let file = files[0];
                        if (file.type.match(/^image\//)) {
        console.log("Ви обрали файл");
                            const reader = new FileReader();
                            reader.onload = function () {
        imgPhotoe.src = reader.result;
                            }
                            reader.readAsDataURL(file);
                        }
                        else {
        alert("Оберіть фото");
                        }
                    }
                    else {
        alert("Оберіть фото");
                    }
                }
            }
        }