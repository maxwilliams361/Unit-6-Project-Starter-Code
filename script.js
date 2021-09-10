$(".hide").hide();
$(".eevee").click(function() {
    $(".scene1").hide();
    $(".e2scene").fadeIn();
    $(".e1").fadeIn();

});
$(".e1").click(function() {
    $(".e1").hide();
    $(".e2").fadeIn();
});

$(".e2").click(function() {
    $(".e2").hide();
    $(".e3").fadeIn();
    $(".e1hop").fadeIn();
    $(".e1yes").fadeIn();
    $(".e1no").fadeIn();
});

$(".e1yes").click(function() {
    $(".e2scene").hide();
    $(".e1battleHop").fadeIn();
    $(".battleHelp").fadeIn();
});

$(".e1move1").dblclick(function() {
    $(".moveMenu").hide();
    $(".resultMovee1").show();
    $(".fullWooloo").hide();
    $(".battleHelp").hide();
    $(".noHealth").show();
});

$(".e1move2").dblclick(function() {
    $(".moveMenu").hide();
    $(".resultMovee2").show();
    $(".fullWooloo").hide();
    $(".battleHelp").hide();
    $(".noHealth").show();
});

$(".e1move3").dblclick(function() {
    $(".moveMenu").hide();
    $(".resultMovee3").show();
    $(".fullWooloo").hide();
    $(".battleHelp").hide();
    $(".noHealth").show();
});

$(".e1move4").dblclick(function() {
    $(".moveMenu").hide();
    $(".resultMovee4").show();
    $(".fullWooloo").hide();
    $(".battleHelp").hide();
    $(".noHealth").show();
});

$(".e4").click(function() {
    $(".e4").hide();
    $(".e5").fadeIn();
});

$(".e5").click(function() {
    $(".e1battleHop").hide();
    $(".e1afterMathOfBattle").fadeIn();
});

$(".e6").click(function() {
    $(".e6").hide();
    $(".e7").fadeIn();
});

$(".e7").click(function() {
    $(".e7").hide();
    $(".e8").fadeIn();
});

$(".e8").click(function() {
    $(".e8").hide();
    $(".e9").fadeIn();
});

$(".e2yes").click(function() {
    $(".e9").hide();
    $(".evolution").fadeIn();
});

$(".e10").click(function() {
    $(".e10").hide();
    $(".e111").fadeIn();
});

$(".eeveelution").click(function() {
    $(".e111").hide();
    $(".eeveelution").hide();
    $(".eeveeEvolved").fadeIn();
    $(".e12").fadeIn();
});

$(".e12").click(function() {
    $(".e12").hide();
    $(".end").fadeIn();
});

$(".e1no").click(function() {
    $(".e2scene").hide();
    $("body").css("background-color", "blue");
    $(".e1noResult").fadeIn();
});

$(".e1noResult").dblclick(function() {
    $(".e1noResult").hide();
    $("body").css("background-color", "white");
    $(".e1battleHop").fadeIn();
});

$(".e2no").click(function() {
    $(".e9").hide();
    $(".e2noResult").fadeIn();
});

$(".e2noResult").click(function() {
    $(".e2noResult").hide();
    $(".eeveelution").show();
    $(".end").fadeIn();
});

$(".pichu").click(function() {
    $(".scene1").hide();
    $(".p2scene").fadeIn();
    $(".p1").fadeIn();

});
$(".p1").click(function() {
    $(".p1").hide();
    $(".p2").fadeIn();
});

$(".p2").click(function() {
    $(".p2").hide();
    $(".p3").fadeIn();
    $(".p1hop").fadeIn();
    $(".p1yes").fadeIn();
    $(".p1no").fadeIn();
});

$(".p1yes").click(function() {
    $(".p2scene").hide();
    $(".p1battleHop").fadeIn();
    $(".p1battleHelp").fadeIn();
});

$(".p1move1").dblclick(function() {
    $(".p1moveMenu").hide();
    $(".resultMovep1").show();
    $(".p1fullWooloo").hide();
    $(".p1battleHelp").hide();
    $(".p1noHealth").show();
});

$("p1move2").dblclick(function() {
    $(".p1moveMenu").hide();
    $(".resultMovep2").show();
    $(".p1fullWooloo").hide();
    $(".p1battleHelp").hide();
    $(".p1noHealth").show();
});

$(".p1move3").dblclick(function() {
    $(".p1moveMenu").hide();
    $(".resultMovep3").show();
    $(".p1fullWooloo").hide();
    $(".p1battleHelp").hide();
    $(".p1noHealth").show();
});

$(".p1move4").dblclick(function() {
    $(".p1moveMenu").hide();
    $(".resultMovep4").show();
    $(".p1fullWooloo").hide();
    $(".p1battleHelp").hide();
    $(".p1noHealth").show();
});

$(".p4").click(function() {
    $(".p4").hide();
    $(".p5").fadeIn();
});

$(".p5").click(function() {
    $(".p1battleHop").hide();
    $(".p1afterMathOfBattle").fadeIn();
});

$(".p6").click(function() {
    $(".p6").hide();
    $(".p7").fadeIn();
});

$(".p7").click(function() {
    $(".p7").hide();
    $(".p8").fadeIn();
});

$(".p8").click(function() {
    $(".p8").hide();
    $(".p9").fadeIn();
});

$(".p2yes").click(function() {
    $(".p9").hide();
    $(".p1evolution").fadeIn();
});

$(".p10").click(function() {
    $(".p10").hide();
    $(".p111").fadeIn();
});

$(".pikaEvolution").click(function() {
    $(".p111").hide();
    $(".pikaEvolution").hide();
    $(".pikaEvolved").fadeIn();
    $(".p12").fadeIn();
});

$(".p12").click(function() {
    $(".p12").hide();
    $(".end").fadeIn();
});

$(".p1no").click(function() {
    $(".p2scene").hide();
    $("body").css("background-color", "blue");
    $(".p1noResult").fadeIn();
});

$(".p1noResult").dblclick(function() {
    $(".p1noResult").hide();
    $("body").css("background-color", "white");
    $(".p1battleHop").fadeIn();
});

$(".p2no").click(function() {
    $(".p9").hide();
    $(".p2noResult").fadeIn();
});

$(".p2noResult").click(function() {
    $(".p2noResult").hide();
    $(".pikaEvolved").show();
    $(".end").fadeIn();
});