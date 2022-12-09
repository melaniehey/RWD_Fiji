<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>


// off canvas für burgermenü
function openSidenav() {
    document.getElementById("mysidenav").style.width = "100%";
    document.getElementById("navbar").style.marginRight = "100%";
  }
  
  function closeSidenav() {
    document.getElementById("mysidenav").style.width = "0";
    document.getElementById("navbar").style.marginRight= "0";
  }

// off canvas für warenkorb
  function openSidenav2() {
    document.getElementById("mysidenav2").style.width = "100%";
    document.getElementById("navbar").style.marginRight = "100%";
  }
  
  function closeSidenav2() {
    document.getElementById("mysidenav2").style.width = "0";
    document.getElementById("navbar").style.marginRight= "0";
  }

  // button färbt bei onclick die farbe
  function changeColor() {
    document.getElementById("abc").style.color= "red";
  }