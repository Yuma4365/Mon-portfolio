document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let fields = ["prenom", "nom", "sujet", "message"];
    let valid = true;
    fields.forEach(function(field) {
        let input = document.getElementById(field);
        if (!input.value.trim()) {
            input.style.border = "2px solid red";
            valid = false;
        } else {
            input.style.border = "2px solid #03b5a4";
        }
    });
    if (valid) {
        alert("Message envoyé avec succès !");
        this.reset();
    } else {
        alert("Veuillez remplir tous les champs correctement.");
    }
});