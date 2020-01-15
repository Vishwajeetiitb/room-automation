var state = "on";
function nightled() {
  if (state == "on") {
    state = "off";
  } else if (state == "off") {
    state = "on";
  }
  document.getElementById("demo").innerHTML = state;
  testref.set(state);
}
function fan(speed) {
  console.log(speed);
}
