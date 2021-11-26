/*
*Code adapted from w3schools filter/search table example
*https://www.w3schools.com/howto/howto_js_filter_table.asp
*Cited November 24, 2021
*/
function searchTable() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("keySearch"); //get search input
    filter = input.value.toUpperCase(); //convert input to uppercase for non-case-sensitive filter
    table = document.getElementById("keywords"); //get table
    tr = table.getElementsByTagName("tr"); //get table data

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0]; //get table data from first column [0] and ith row
        if (td) { //if data is not empty
            txtValue = td.textContent || td.innerText; //get data content or inner text if no content present
            if (txtValue.toUpperCase().indexOf(filter) > -1) { //if the text contains the filter
                tr[i].style.display = ""; //display text
            } else {
                tr[i].style.display = "none"; //do not display text
            }
        }
    }
}