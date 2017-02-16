$(function(){
  $("#spiritForm").submit(function() {
    event.preventDefault();

    var homeInput = $("input:radio[name=home]:checked").val();
    var signInput = $("#astro").val();
    var foodInput = $("#favFood").val();
    var timeInput = $("input:radio[name=bedTime]:checked").val();

    $(".results div").hide();
    if (timeInput === "sloth") {
      $(".sloth").show();
    } else if (foodInput === "Ants") {
      $(".anteater").show();
    } else if (homeInput === "air") {
      $(".bird").show();
    } else if (timeInput === "sunrise") {
      $(".bat").show();
    } else if (homeInput === "sea" && signInput === "Pisces") {
      $(".fish").show();
    } else if (homeInput === "sea" && foodInput === "Steak") {
        $(".shark").show();
    } else if (homeInput === "land" && foodInput === "Salad") {
      $(".rabbit").show();
    } else if (homeInput === "land" && foodInput === "Steak") {
      $(".tiger").show();
    } else {
      $(".platypus").show();
    };
  });
});
