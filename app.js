// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


function buildTable(data) {
    //Clear exising data
    tbody.html("");

    //loop through each row, append row and cell with each value
    data.forEach((dataRow) => {
        //append row
        let row = tbody.append("tr");
        //loop through each field in the dataRow and add each value (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            }
        );
    });
});