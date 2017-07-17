
/*header js*/
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

 /*hello fade in*/
window.onload =setTimeout(mySec, 1000);
function mySec(){
    $(".helloIn").fadeIn(1000);};
/*divider fade in*/
window.onload = setTimeout(myThi, 1500);
function myThi(){
    $(".h-divider2").fadeIn(1000);};
/*welcome message fade in*/
window.onload =setTimeout(myFunction, 2500);
function myFunction(){
     $(".helloIn2").fadeIn(1000);};
/*portfolio text fade in*/
window.onload =setTimeout(myPort, 3500);
function myPort(){
     $(".portfolio-button-fade").fadeIn(1000);};
/*portfolio arrow fade in*/
window.onload =setTimeout(myPic, 4000);
function myPic(){
     $(".portfolio-arrow").fadeIn(1000);};
/*rest of the page fade in*/
window.onload =setTimeout(rest, 4000);
function rest(){
     $(".content").fadeIn(1000);};
/*ENSURE PAGE ALWAYS SCROLLS TO TOP ON REFRESH*/
$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});
/*scrollTop effect for welcome*/
$(document).ready(function(){
$(".about").click(function() {
  $('html,body').animate({
      scrollTop: $(".welcome").offset().top},
      'slow');
});
});

/*scrollTop effect for portfolio*/
$(document).ready(function(){
$(".portfoliolink").click(function() {
  $('html,body').animate({
      scrollTop: $("#portlink").offset().top},
      'slow');
});
});

/*scrollTop effect for portfolio*/
$(document).ready(function(){
$("#contact").click(function() {
  $('html,body').animate({
      scrollTop: $("#contactlink").offset().top},
      'slow');
});
});
