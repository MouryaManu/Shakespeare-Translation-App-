var input= document.querySelector(".txt-input");
var output= document.querySelector(".txt-output");
var click= document.querySelector("#click");

var url="https://api.funtranslations.com/translate/shakespeare.json";

function constructURL(text) {
    return url + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured", error)
    alert("Something wrong with server. Please try again after some time.")
}


function translate()
{
    var text=input.value;
    fetch(constructURL(text))
    .then(response => response.json())
    .then(json => {
        var translatedtext= json.contents.translated;
        output.innerText= translatedtext;
    })
};

click.addEventListener("click",translate);
















click.addEventListener("click", translate)
