function getByID(id) {
    return document.getElementById(id);
}
function getByClass(className) {
    return document.querySelector(className);
}

getByClass('.booster-pack').addEventListener('click', function() {
    getByClass('.open-btn').classList.toggle('show');
    this.classList.toggle('selected');
});