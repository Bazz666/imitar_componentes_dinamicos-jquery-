$(document).ready(function () {
    // primer elemento
  $(".close").click (function(){
        $(".alert").fadeOut();
    });

    // segundo elemento
  $("#collapseButton").click (function(){
      $("#collapseExample").toggle("slow");
  });

  // tercer elemento
  $(".collapsed").click(function () {
    // Aqui se guarda la clase en una variable
    let target = $($(this).data("target"));

    if (target.is(":visible")) {
      target.slideUp();
    } else {
      $(".collapse").slideUp();
      target.slideToggle("slow");
    }
  });
})
    