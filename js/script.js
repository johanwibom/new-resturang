/*********************************************/
/*****                                   *****/
/*****             JAVASCRIPT            *****/
/*****                                   *****/
/*****                                   *****/
/*****  Denna fil sätter allt utseende   *****/
/*****  förutom griddens laytout         *****/
/*****                                   *****/
/*********************************************/



function myFunction() { /* allt nedan är kopierat från w3*/
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
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