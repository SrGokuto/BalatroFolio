function getByID(id) {
  return document.getElementById(id);
}
function getByClass(className) {
  return document.querySelector(className);
}

const projectsPack = getByID("projects-pack");
getByClass(".booster-pack").addEventListener("click", function () {
  getByClass(".open-btn").classList.toggle("show");
  this.classList.toggle("selected");
});
getByClass(".open-btn").addEventListener("click", function () {
  projectsPack.style.transition = "0.5s cubic-bezier(0.83, 0.82, 0, 0.99)";
  projectsPack.style.position = "absolute";
  projectsPack.style.transform =
    "translate(calc(50vw - 90px), calc(50vh - 260px))";
  setTimeout(() => {
    projectsPack.style.animation = "vibrate 0.3s infinite";
  }, 500);
});
