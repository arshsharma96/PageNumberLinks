// holds all the objects inside li
const domObject = document.getElementsByClassName("contact-item");

// current page at the start
let currentPage = 1;

// objects per page
const objectPerPage = 10;

/*
Checks the number of pages currently
 */
function numPages(){
    return Math.ceil(domObject.length / objectPerPage);
}

/*
Moves to the previous page
 */
function previousPage(){
    if(currentPage > 1){
        currentPage--;
        changePage(currentPage);
    }
}

/*
Moves to the next page
 */
function nextPage(){
    if(currentPage < numPages()){
        currentPage++;
        changePage(currentPage);
    }
}


/*
Changes the page using the logic
 */
function changePage(current_page) {
    // sets up the ending of the loop
    const endIndex = current_page * objectPerPage;

    // sets up the beginning of the loop
    const startIndex = endIndex - objectPerPage;

    // stores the value of elements
    const nextButton = document.getElementById("nextButton");
    const previousButton = document.getElementById("previousButton");

    // if current page is less than 1 set it up to first page
    if(current_page < 1){
        current_page = 1;
    }

    // if the value of current page is less than the calculated number of pages
    if(current_page > numPages()){
        current_page = numPages();
    }

    // logic to hide or show the contents based on the number of objects to be displayed
    for(let i=0; i<domObject.length; i++) {
        if(i < startIndex || i >= endIndex) {
            domObject[i].style.display = "none";
        } else {
            domObject[i].style.display = "block";
        }
    }



    // if the current page is first page no previous page exists so hide the previous button
    if(current_page === 1){
        previousButton.style.visibility = "hidden";
    }
    // if the current page is not first page show previous button
    else{
        previousButton.style.visibility = "visible";
        previousButton.innerHTML = " " + (current_page - 1);
    }

    // if the current page is last page no next page exists so hide the next button
    if(current_page === numPages()){
        nextButton.style.visibility = "hidden";
    }
    // if the current page is not last page show next button
    else{
        nextButton.style.visibility = "visible";
        nextButton.innerHTML = " " + (current_page + 1);
    }

}

window.onload = function () {
    changePage(1);
}