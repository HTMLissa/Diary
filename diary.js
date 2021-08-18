const form = document.querySelector("#form");
const entries = document.querySelector("#entries");

// Listen for a Submit event
form.addEventListener("submit", function (evt) {
    // prevent default behaviour
    evt.preventDefault();
    // Select date & entry
    const date = form.elements.date.value;
    const entry = form.elements.entry.value;
    addEntry(date, entry);
    // Reset entry after submit
    form.elements.entry.value = "";
})

// create function to add new entry to page
function addEntry(date, entry) {
    const newEntry = document.createElement("li");
    const boldTag = document.createElement("b");
    boldTag.append(date);
    newEntry.append(boldTag);
    newEntry.append(` ${entry}`);
    entries.prepend(newEntry);
}