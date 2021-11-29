/*
*Code adapted from w3schools filter/search table example
*https://www.w3schools.com/howto/howto_js_filter_table.asp
*Cited November 24, 2021
*/
function searchTable() {
    // Declare variables
    var filter, tr, td, i, txtValue;
    //get search input and convert input to uppercase for non-case-sensitive filter
    filter = document.getElementById("keySearch").value.toUpperCase();
    //get table and then get the table rows and in array form
    tr = document.getElementById("keywords").getElementsByTagName("tr");

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