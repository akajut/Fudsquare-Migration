$(document).ready(function(){
  $("#demo").on("hide.bs.collapse", function(){
    $(".btn-login-open").html('<span class="glyphicon glyphicon-collapse-up"></span> Login');
  });
  $("#demo").on("show.bs.collapse", function(){
    $(".btn-login-open").html('<span class="glyphicon glyphicon-collapse-down"></span> Close');
  });
});
