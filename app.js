document.getElementById("encrypt-btn").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    let encryptedText = encrypt(inputText);
    document.getElementById("result-label").textContent = encryptedText;
});

document.getElementById("decrypt-btn").addEventListener("click", function() {
    let inputText = document.getElementById("input-text").value;
    let decryptedText = decrypt(inputText);
    document.getElementById("result-label").textContent = decryptedText;
});

document.getElementById("copy-btn").addEventListener("click", function() {
    let resultText = document.getElementById("result-label").textContent;
    navigator.clipboard.writeText(resultText).then(() => {
        alert("Texto copiado al portapapeles");
    });
});

function encrypt(text) {
    return text
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function decrypt(text) {
    return text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}
