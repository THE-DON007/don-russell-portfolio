// Display interests from a JavaScript array

const interests = [
    "Web Development",
    "Artificial Intelligence",
    "Cybersecurity",
    "Mobile App Development",
    "Computer Networking"
];

const interestsList = document.getElementById("interests-list");

for (let interest of interests) {

    const listItem = document.createElement("li");
    listItem.textContent = interest;
    interestsList.appendChild(listItem);

}


// Show or hide the About Me section

const toggleButton = document.getElementById("toggleBtn");
const moreInfo = document.getElementById("more-info");

toggleButton.addEventListener("click", function () {

    if (moreInfo.style.display === "none") {

        moreInfo.style.display = "block";
        toggleButton.textContent = "Hide About Me";

    } else {

        moreInfo.style.display = "none";
        toggleButton.textContent = "Show More About Me";

    }

});