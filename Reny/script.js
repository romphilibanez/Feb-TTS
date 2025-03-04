document.addEventListener("DOMContentLoaded", function () {
    const winsList = document.getElementById("wins-list");
    const addWinBtn = document.getElementById("add-win");

    addWinBtn.addEventListener("click", function () {
        const newWin = prompt("Enter a new win for February 2025:");
        if (newWin) {
            const listItem = document.createElement("li");
            listItem.textContent = newWin;
            winsList.appendChild(listItem);
        }
    });
});
