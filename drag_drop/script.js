// Get the necessary elements
let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");

// Get all child elements of the left box
let listItems = leftBox.getElementsByClassName("list");

// Loop through each list item
for (let item of listItems) {
    // Add dragstart event listener to each item
    item.addEventListener("dragstart", function(e) {
        // When the item starts being dragged, store the reference to the selected item
        let selected = e.target;

        // Add dragover event listener to rightBox to allow dropping
        rightBox.addEventListener("dragover", function(e) {
            // Prevent the default handling to allow drop
            e.preventDefault();
        });

        // Add drop event listener to rightBox
        rightBox.addEventListener("drop", function(e) {
            // Prevent the default handling
            e.preventDefault();
            // Append the selected item to the rightBox
            rightBox.appendChild(selected);
            // Clear the selected item reference
            selected = null;
        });
    });
}
