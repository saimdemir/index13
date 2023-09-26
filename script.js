const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if(!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "qr kodunuz oluşturuluyor";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "QR Kod Oluşturuldu";
        downloadButton.style.display = "block";
    });
});
// Resmi indirme işlemini gerçekleştiren JavaScript kodu
document.getElementById("downloadButton").addEventListener("click", function() {
    let imgSrc = document.getElementById("myimage").src;
    let a = document.createElement("a");
    a.href = imgSrc;
    a.download = "indirilen_resim.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

qrInput.addEventListener("keyup", () => {
    if(!qrInput.value.trim()) {
        wrapper.classList.remove("active");
        preValue = "";
    }
});