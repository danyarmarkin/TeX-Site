function DropdownSymbols() {
    removeDropdown();
    document.getElementById("DropdownSymbolsID").classList.toggle("show");
}

function DropdownGreece(){
  removeDropdown();
  document.getElementById("DropdownGreeceID").classList.toggle("show");
}

function DropdownBigSymbols(){
  removeDropdown();
  document.getElementById("DropdownBigSymbolsID").classList.toggle("show");
}

function DropdownArrows(){
  removeDropdown();
  document.getElementById("DropdownArrowsID").classList.toggle("show");
}

function DropdownPlurality(){
  removeDropdown();
  document.getElementById("DropdownPluralityID").classList.toggle("show");
}

function DropdownExample(){

    removeDropdown();
    document.getElementById("DropdownExampleID").classList.toggle("show");

}

function removeDropdown(){
  function Remove(){
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      openDropdown.classList.remove('show');
    }
  }
  Remove();
  //setTimeout(Remove, 300);
}

window.onclick = function(event) {
  UpdateMath(document.getElementById('MathInput').value);
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
