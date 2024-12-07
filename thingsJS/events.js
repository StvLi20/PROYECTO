// JavaScript para manejar la interacción de la página de eventos

document.addEventListener("DOMContentLoaded", () => {
    // Función para mostrar detalles al hacer clic en una tarjeta de evento
    const eventCards = document.querySelectorAll(".event-card");

    eventCards.forEach(card => {
        card.addEventListener("click", () => {
            const eventName = card.querySelector("h4").innerText;
            const eventDetails = card.querySelector("p").innerText;
            const eventDate = card.querySelector(".date").innerText;
            const eventTime = card.querySelector(".time").innerText;

            alert(`Detalles del evento:\n\nNombre: ${eventName}\n${eventDetails}\n${eventDate}\n${eventTime}`);
        });
    });

    // Función para filtrar eventos
    const filterInput = document.createElement("input");
    filterInput.type = "text";
    filterInput.placeholder = "Buscar eventos...";
    filterInput.style.margin = "20px auto";
    filterInput.style.display = "block";
    filterInput.style.padding = "10px";
    filterInput.style.width = "80%";
    filterInput.style.border = "1px solid #ddd";
    filterInput.style.borderRadius = "5px";

    const calendarSection = document.querySelector("#calendario");
    calendarSection.insertBefore(filterInput, calendarSection.firstChild);

    filterInput.addEventListener("input", (e) => {
        const filterText = e.target.value.toLowerCase();

        eventCards.forEach(card => {
            const title = card.querySelector("h4").innerText.toLowerCase();
            if (title.includes(filterText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    console.log("Interacción de eventos cargada correctamente.");
});