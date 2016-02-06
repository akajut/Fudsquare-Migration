$(document).ready(function(){
  $("#login").on("hide.bs.collapse", function(){
    $(".btn-login-open").html('<span class="glyphicon glyphicon-collapse-up"></span> Login');
  });
  $("#login").on("show.bs.collapse", function(){
    $(".btn-login-open").html('<span class="glyphicon glyphicon-collapse-down"></span> Close');
  });
});
