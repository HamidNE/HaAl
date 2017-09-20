// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();

$(document).ready(function(){
	$('.parallax').parallax();
});
$(document).ready(function(){
    $('.collapsible').collapsible();
  });
$(document).ready(function() {
	$('select').material_select();
});
$(document).ready(function(){
// the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
$('.modal').modal();
});
$(document).ready(function(){
	$('.tooltipped').tooltip({delay: 50});
});