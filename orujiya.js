function calculatePrice() {
    let weaponFactor = parseFloat(document.getElementById('weapon-type').value);
    let coverage = parseInt(document.getElementById('coverage').value);
    let years = parseInt(document.getElementById('years').value);
    let baseRate = 0.01; // Базовый процент от суммы покрытия
    let totalPrice = coverage * baseRate * weaponFactor * years;
    document.getElementById('result').textContent = totalPrice.toFixed(2);
}

function addReview() {
    let reviewText = document.getElementById('review-text').value;
    if (reviewText.trim() !== "") {
        let reviewDiv = document.createElement("div");
        reviewDiv.classList.add("review");
        reviewDiv.textContent = reviewText + " – Аноним";
        document.getElementById("reviews-list").appendChild(reviewDiv);
        document.getElementById("review-text").value = "";
    }
}