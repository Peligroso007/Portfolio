function mouseOver(links) {
  links.style.background = "white";
  links.style.cursor = "pointer";
  links.children[0].style.color = "black";
}

function mouseOut(links) {
  links.style.background = "";
  links.children[0].style.color = "white";
}
