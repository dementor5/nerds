document.addEventListener("mouseup", function(evt) {
  document.documentElement
          .classList.add("hide-outline");
});

document.addEventListener("keyup", function(evt) {
  if (evt.keyCode === 9 | evt.target.type === "radio" & evt.keyCode >= 37 & evt.keyCode <= 40) {
    document.documentElement
            .classList.remove("hide-outline");
  }
});
