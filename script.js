    document.getElementById("recommendationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMessage = document.getElementById("error-message");
    let recommendationsContainer = document.querySelector(".recommendations");
    let popup = document.getElementById("popup");

    if (message === "") {
        errorMessage.textContent = "Message cannot be empty!";
        return;
    }
    errorMessage.textContent = "";

    // Create new recommendation card
    let newCard = document.createElement("div");
    newCard.classList.add("card");

    let newQuote = document.createElement("p");
    newQuote.classList.add("quote");
    newQuote.innerHTML = “ ${message} ”<br><strong>- ${name || "Anonymous"}</strong>;

    newCard.appendChild(newQuote);
    recommendationsContainer.appendChild(newCard);

    // Show the popup message
    popup.style.display = "block";

    // Hide popup after 3 seconds
    setTimeout(() => {
        popup.style.display = "none";
    }, 3000);

    // Clear the form
    document.getElementById("recommendationForm").reset();
});

// Function to close the popup manually
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
