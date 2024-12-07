document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Poruka je uspješno poslana! Hvala što ste nas kontaktirali.");
        document.getElementById("contact-form").reset();
    } else {
        alert("Molimo ispunite sva polja.");
    }
});

document.getElementById("submit-button").addEventListener("mouseover", function() {
    this.style.transform = "scale(1.1)";
});

document.getElementById("submit-button").addEventListener("mouseout", function() {
    this.style.transform = "scale(1)";
});
