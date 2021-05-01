/* javascript */

$(document).ready(function() {

console.log('hello');

$('#slider-inner').slick({
    infinite: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });





$( ".pidgeon" ).click(function() {
  $( ".pidgeon-overlay" ).fadeToggle( "slow", "linear" );
  event.preventDefault();
  event.stopPropagation();
});

$( ".cat" ).click(function() {
  $( ".cat-overlay" ).fadeToggle( "slow", "linear" );
  event.preventDefault();
  event.stopPropagation();
});


$( ".cheese" ).click(function() {
  $( ".cheese-overlay" ).fadeToggle( "slow", "linear" );
  event.preventDefault();
  event.stopPropagation();
});


$( ".close-icon" ).click(function() {
  $( this ).parent().fadeToggle( "slow", "linear" );
  event.preventDefault();
  event.stopPropagation();
});

$( ".bird" ).click(function() {
  $( ".bird-overlay" ).fadeToggle( "slow", "linear" );
  event.preventDefault();
  event.stopPropagation();
});

});