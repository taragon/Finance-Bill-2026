// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("searchInput");
    const table = document.querySelector("table");

    // Search / filter function
    input.addEventListener("keyup", function () {
        let filter = input.value.toUpperCase();
        let rows = table.getElementsByTagName("tr");

        for (let i = 1; i < rows.length; i++) {
            let cell = rows[i].getElementsByTagName("td")[1]; // Tax Type column

            if (cell) {
                let text = cell.textContent || cell.innerText;

                if (text.toUpperCase().indexOf(filter) > -1) {
                    rows[i].style.display = ""; // Show row
                } else {
                    rows[i].style.display = "none"; // Hide row
                }
            }
        }
    });

});

// Sorting function
function sortTable(columnIndex) {

    const table = document.querySelector("table");
    let switching = true;
    let direction = "asc"; // ascending

    while (switching) {
        switching = false;
        let rows = table.rows;

        for (let i = 1; i < rows.length - 1; i++) {
            let shouldSwitch = false;

            let x = rows[i].getElementsByTagName("td")[columnIndex];
            let y = rows[i + 1].getElementsByTagName("td")[columnIndex];

            if (direction === "asc") {
                if (x.innerText.toLowerCase() > y.innerText.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else {
                if (x.innerText.toLowerCase() < y.innerText.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }

            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            } 
        }

        if (!switching && direction === "asc") {
            direction = "desc";
            switching = true;
        }
    }
}