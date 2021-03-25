function incrementValue() {
    var value = parseInt(document.getElementById('name').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value < 10) {
        value++;
        document.getElementById('name').value = value;
    }
}
function decrementValue() {
    var value = parseInt(document.getElementById('name').value, 10);
    value = isNaN(value) ? 0 : value;
    if (value > 1) {
        value--;
        document.getElementById('name').value = value;
    }
}
