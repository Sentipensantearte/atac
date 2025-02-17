$(document).ready(function(){
    $('.sidenav').sidenav();
  });
        
  $(document).ready(function(){
    $('.parallax').parallax();
  });
        
  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
        
  var elem = document.querySelector('.collapsible.expandable');
var instance = M.Collapsible.init(elem, {
  accordion: false
});

$(document).ready(function() {
  $('input#input_text, textarea#textarea2').characterCounter();
});

$('#textarea1').val('New Text');
  M.textareaAutoResize($('#textarea1'));