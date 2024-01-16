const binaryCodes = [
    "01010100", "01100101", "00100000",
    "01110001", "01110101", "01101001",
    "01100101", "01110010", "01101111",
    "00100000", "01101101", "01110101",
    "01100011", "01101000", "01101111",
    "00101100", "00100000", "01101101",
    "01101001", "00100000", "01100001",
    "01101101", "01101111", "01110010"
];

const binaryToString = (codes) => {
    return codes.map(code => String.fromCharCode(parseInt(code, 2))).join('');
}

const message = binaryToString(binaryCodes) + ".";

function showAlert() {
    const modal = document.getElementsByClassName("modal")[0];
    modal.innerHTML = message;

    modal.classList.add("visible");
}

function closeModal() {
    const modal = document.getElementsByClassName("modal")[0];
    modal.classList.remove("visible");

}