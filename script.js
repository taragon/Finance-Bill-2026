// Wait until the page loads
document.addEventListener("DOMContentLoaded", function () {

    const input = document.getElementById("searchInput");
    const table = document.querySelector("table");

    input.addEventListener("keyup", function () {
        let filter = input.value.toUpperCase();
        let rows = table.getElementsByTagName("tr");

        for (let i = 1; i < rows.length; i++) {
            let cell = rows[i].getElementsByTagName("td")[1]; // Tax Type column

            if (cell) {
                let text = cell.textContent || cell.innerText;

                if (text.toUpperCase().indexOf(filter) > -1) {
                    rows[i].style.display = "";
                } else {
                    rows[i].style.display = "none";
                }
            }
        }
    });

});