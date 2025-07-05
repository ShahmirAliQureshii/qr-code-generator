let input = document.querySelector("input");
let img = document.querySelector("img")
img.style.display = "none"


function nextBtn(){
if(input.value === '') {
    input.value = "You Must Write Something";
} else {
    img.style.display = "block"
    let qrInput = input.value;
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrInput}`
}
}