const downloadData = document.getElementById('downloadData');

downloadData.onclick = () => {

    var tableData = [];
    var rows = document.querySelectorAll("#userTrackingTable tr");

    for (var i = 0; i < rows.length; i++) {
        var row = [];
        cols = rows[i].querySelectorAll("#userTrackingTable td, #userTrackingTable th");

        for (var v = 0; v < cols.length; v++) {
            row.push(cols[v].innerText);
        }

        tableData.push(row.join(","));
    }

    download_csv(tableData.join("\n"), 'admintable.csv');
}

function download_csv(tableData, filename) {
    var csvFile;

    csvFile = new Blob([tableData], { type: "text/csv" });
    newlink = document.createElement('a');
    newlink.download = filename;
    newlink.href = window.URL.createObjectURL(csvFile);
    newlink.style.display = "none";
    document.body.appendChild(newlink);
    newlink.click();

}
