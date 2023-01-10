// https://codepen.io/javedkhanui/pen/VXPxPw

// $(document).ready(function(){
//     $(window).scroll(function(){
//         var scroll = $(window).scrollTop();
//         if (scroll > 300) {
//           $(".black").css("background" , "blue");
//         }
  
//         else{
//             $(".black").css("background" , "#333");  	
//         }
//     })
//   })

// ---------
// $(window).scroll(function(){

//     $('navSticky').toggleClass('scrolled',$(this).scrollTop()>50);

// });
// ------------
// carousel Hausaufgabe VALLAH Text ändern
function showDiv1() {
    document.getElementById('Square50Face').style.display = "block";
    document.getElementById('Square30Face').style.display = "none";
    document.getElementById('Square50Body').style.display = "none";
    document.getElementById('Square30Body').style.display = "none";
 }
 function showDiv2() {
    document.getElementById('Square30Face').style.display = "block";
    document.getElementById('Square50Face').style.display = "none";
    document.getElementById('Square50Body').style.display = "none";
    document.getElementById('Square30Body').style.display = "none";
 }
 function showDiv3() {
    document.getElementById('Square50Body').style.display = "block";
    document.getElementById('Square50Face').style.display = "none";
    document.getElementById('Square30Face').style.display = "none";
    document.getElementById('Square30Body').style.display = "none";
 }
 function showDiv4() {
    document.getElementById('Square30Body').style.display = "block";
    document.getElementById('Square50Face').style.display = "none";
    document.getElementById('Square50Body').style.display = "none";
    document.getElementById('Square30Face').style.display = "none";
 }

 document.addEventListener("scroll", (event) => {
   var scrollOffset = document.documentElement.scrollTop;
   var navElement = document.getElementById("stickyNav");
   var stickyLogo = document.getElementById("stickyLogo");

   if(scrollOffset > 0){
      navElement.style.backgroundColor = "#041c2c";
      navElement.style.top = 0;
      stickyLogo.style.top = "8px";

   }else{
      navElement.style.backgroundColor = "transparent";
      navElement.style.top = "33px";
      stickyLogo.style.top = "33px";
   }
   
 });