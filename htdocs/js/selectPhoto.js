window.onload = function () {
    var imgPhoto = document.getElementById("imgPhoto");
    var fileImage = document.getElementById("fileImage");

    fileImage.onchange = function (e) {
        console.log("Ви обрали файл");
        let files = e.target.files;
        if (files && files[0]) {
            let file = files[0];
            if (file.type.match(/^image\//)) {
                console.log("Ви обрали файл");
                const reader = new FileReader();
                reader.onload = function () {
                    imgPhoto.src = reader.result;
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