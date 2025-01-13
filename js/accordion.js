document.addEventListener("DOMContentLoaded", function() {
    // Sélection de tous les items d’accordéon
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");

        header.addEventListener("click", () => {
            // Ferme les autres items si tu veux un accordéon "exclusif"
            accordionItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                }
            });
            // Bascule l’affichage de l’item cliqué
            item.classList.toggle("active");
        });
    });
});
