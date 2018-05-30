function allowDrop(event) {
    event.preventDefault();

}function drag(event) {
    event.dataTransfer.setData("text", event.target.id);

}

// het is belangrijk om zowel de div als je image een id te geven, anders werkt deze shit ni
function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");

    event.target.appendChild(document.getElementById(data));
}



