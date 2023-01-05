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
// carousel
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