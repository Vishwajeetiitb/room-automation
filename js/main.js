var state = "on";
function myFunction() {
    if(state=="on"){state="off"}
   else if(state=="off"){state="on"}
    document.getElementById("demo").innerHTML = state;
    testref.set({test: state}) ; 
  }