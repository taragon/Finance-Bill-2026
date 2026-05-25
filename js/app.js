// ✅ STEP 2: DATA (ADDED AT TOP)
const data = [
    { section: 1, tax: "Income Tax", old: "30%", newRate: "32%", desc: "Increase in income tax rates", impact: "Reduced take-home salary" },
    { section: 2, tax: "VAT (Value Added Tax)", old: "16%", newRate: "18%", desc: "VAT increased on most goods", impact: "Higher cost of living" },
    { section: 3, tax: "Digital Service Tax", old: "1.5%", newRate: "3%", desc: "Higher tax on digital platforms", impact: "Expensive online services" },
    { section: 4, tax: "Fuel Levy", old: "KSh 18", newRate: "KSh 25", desc: "Increase in fuel levy", impact: "Higher transport costs" },
    { section: 5, tax: "Excise Duty Airtime", old: "15%", newRate: "20%", desc: "Tax on mobile airtime increased", impact: "Costly communication" },
    { section: 6, tax: "Corporate Tax", old: "30%", newRate: "28%", desc: "Slight reduction for businesses", impact: "Encourages investment" },
    { section: 7, tax: "Import Duty", old: "25%", newRate: "30%", desc: "Higher duty on imported goods", impact: "Supports local products" },
    { section: 8, tax: "Property Tax", old: "10%", newRate: "12%", desc: "Increase in property tax", impact: "Higher housing expenses" },
    { section: 9, tax: "Environmental Levy", old: "New", newRate: "5%", desc: "Tax on plastic and pollution", impact: "Promotes sustainability" },
    { section: 10, tax: "Withholding Tax", old: "5%", newRate: "7%", desc: "Increased tax on payments", impact: "Reduced business income" }
];


// ✅ STEP 3: LOAD TABLE FUNCTION
function loadTable() {
    const tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = "";

    data.forEach(item => {
        let row = `
            <tr>
                <td>${item.section}</td>
                <td>${item.tax}</td>
                <td>${item.old}</td>
                <td>${item.newRate}</td>
                <td>${item.desc}</td>
                <td>${item.impact}</td>
            </tr>
        `;

        tableBody.innerHTML += row;
    });
}


// ✅ MAIN SCRIPT
document.addEventListener("DOMContentLoaded", function () {

    // ✅ Load table FIRST
    loadTable();

    const input = document.getElementById("searchInput");
    const table = document.getElementById("financeTable");

    // ======================
    // SEARCH FUNCTION
    // ======================
    input.addEventListener("keyup", function () {
        let filter = input.value.toUpperCase();
        let rows = table.getElementsByTagName("tr");

        for (let i = 1; i < rows.length; i++) {   // ✅ fixed here
            let cell = rows[i].getElementsByTagName("td")[1];

            if (cell) {
                let text = cell.innerText;

                rows[i].style.display =
                    text.toUpperCase().includes(filter) ? "" : "none";
            }
        }

        applyColors(); // ✅ reapply colors after filtering
    });

    applyColors(); // ✅ apply colors when loaded
});


// ✅ COLOR FUNCTION
function applyColors() {
    let rows = document.querySelectorAll("tbody tr");

    rows.forEach(row => {
        let oldText = row.cells[2].innerText;
        let newText = row.cells[3].innerText;

        // ✅ REMOVE TEXT (KSh, %, etc.)
        let oldValue = parseFloat(oldText.replace(/[^\d.]/g, "")) || 0;
        let newValue = parseFloat(newText.replace(/[^\d.]/g, "")) || 0;

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



// ✅ SORT FUNCTION
function sortTable(col) {
    const table = document.getElementById("financeTable");
    let rows = Array.from(table.rows).slice(1);

    rows.sort((a, b) =>
        a.cells[col].innerText.localeCompare(b.cells[col].innerText)
    );

    rows.forEach(row => table.appendChild(row));
}