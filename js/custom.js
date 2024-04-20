function displayCategory() {
    var hiddenSections = document.getElementsByClassName("hiddenSection");
    for (var i = 0; i < hiddenSections.length; i++) {
        if (hiddenSections[i].style.display === "none") {
            hiddenSections[i].style.display = "block";
        } else {
            hiddenSections[i].style.display = "none";
        }
    }
}

function displayMenu() {
    var homeButton = document.getElementById('homeButton');
    var authorButton = document.getElementById('authorButton');

    if (homeButton.style.display === "none") {
        homeButton.style.display = "inline-block";
    } else {
        homeButton.style.display = "none";
    }

    if (authorButton.style.display === "none") {
        authorButton.style.display = "inline-block";
    } else {
        authorButton.style.display = "none";
    }
}


const greetings = [
    "Hello!!", // English
    "你好！！", // Mandarin Chinese
    "¡Hola!!", // Spanish
    "Bonjour !!", // French
    "مرحبا !!", // Standard Arabic
    "Привет!!", // Russian
    "Olá!!", // Portuguese
    "Halo!!", // Indonesian
    "Hallo!!", // German
    "こんにちは！！", // Japanese
    "Hujambo!!", // Swahili
    "안녕하세요!!", // Korean
    "Merhaba!!", // Turkish
    "Ciao!!", // Italian
    "Xin chào!!" // Vietnamese
  ];
let greetingIndex = 0;
setInterval(
    function() {
    greetingIndex = (greetingIndex + 1) % greetings.length; // Loop back to 0 when we've gone through all greetings
    document.getElementById('greeting').textContent = greetings[greetingIndex];
}, 1000); // Change greeting every 10 seconds
