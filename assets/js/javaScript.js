//Navigatin Functionality 
$(".button-collapse").sideNav();

//For Contact Form
$(document).ready(function() {
    Materialize.updateTextFields();
});

$('#textarea1').val('New Text');
$('#textarea1').trigger('autoresize');