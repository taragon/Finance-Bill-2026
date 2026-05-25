// Wait until the page fully loads
document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("searchInput");
    const table = document.querySelector("table");

    // ======================
    // SEARCH FUNCTION
    // ======================
    input.addEventListener("keyup", function () {
        let filter = input.value.toUpperCase();
        let rows = table.getElementsByTagName("tr");

        for (let i = 1; i < rows.length; i++) {
            let cell = rows[i].getElementsByTagName("td")[1];

            if (cell) {
                let text = cell.innerText;

                if (text.toUpperCase().includes(filter)) {
                    rows[i].style.display = "";
                } else {
                    rows[i].style.display = "none";
                }
            }
        }

        // Reapply colors after filtering
        applyColors();
    });

    // Apply colors on page load
    applyColors();
});


// ======================
// COLOR FUNCTION
// ======================
function applyColors() {
    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {
        let oldRate = row.cells[2].innerText;
        let newRate = row.cells[3].innerText;

        let oldValue = parseFloat(oldRate.replace(/[^\d.]/g, "")) || 0;
        let newValue = parseFloat(newRate.replace(/[^\d.]/g, "")) || 0;

        // Reset color first
        row.style.backgroundColor = "";

        if (newValue > oldValue) {
            row.style.backgroundColor = "#ffe6e6"; // 🔴 increase
        } else if (newValue < oldValue) {
            row.style.backgroundColor = "#e6ffe6"; // 🟢 decrease
        } else {
            row.style.backgroundColor = "#ffffff"; // ⚪ no change
        }
    });
}
