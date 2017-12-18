var html = document.documentElement;

document.addEventListener("mousedown", function(evt) {
  html.classList.add("hide-outline");
});

document.addEventListener("keyup", function(evt) {
  if (evt.keyCode === 9 | evt.target.type === "radio" & evt.keyCode >= 37 & evt.keyCode <= 40) {
    html.classList.remove("hide-outline");
  }
});
