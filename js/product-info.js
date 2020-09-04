var info = {};

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let images = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + images + `" alt="">
            </div>
        </div>
        `

        document.getElementById("imagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            info = resultObj.data;

            let infoNameHTML  = document.getElementById("infoName");
            let infoCostHTML  = document.getElementById("infoCost");
            let infoCurrencyHTML  = document.getElementById("infoCurrency");
            let infoDescriptionHTML = document.getElementById("infoDescription");
            let infoCategory = document.getElementById("infoCategory");
            let infoSoldCount = document.getElementById("infoSoldCount");
        
            infoNameHTML.innerHTML = info.name;
            infoCostHTML.innerHTML = info.cost;
            infoCurrencyHTML.innerHTML = info.currency;
            infoDescriptionHTML.innerHTML = info.description;
            infoCategory.innerHTML = info.category;
            infoSoldCount.innerHTML = info.soldCount;

            //Muestro las imagenes en forma de galería
            showImagesGallery(info.images);
        }
    });
});