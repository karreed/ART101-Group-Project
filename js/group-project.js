var daisies = ["daisies/daisy1.png", "daisies/daisy2.png", "daisies/daisy3.png", "daisies/daisy4.png", "daisies/daisy5.png", "daisies/daisy6.png", "daisies/daisy7.png", "daisies/daisy8.png", "daisies/daisy9.png", "daisies/daisy10.png", "daisies/daisy11.png", "daisies/daisy12.png", "daisies/daisy13.png", "daisies/daisy14.png", "daisies/daisy15.png", "daisies/daisy16.png", "daisies/daisy17.png", "daisies/daisy18.png", "daisies/daisy19.png"];
var i = 0;
var yesNo = Math.random() < 0.5;

$(document).keydown(function(event) {
    if (event.key ==='Enter') {
        if ($("#intro").is(':visible')) {
            $("#enter").click();
            event.preventDefault();
        }
    }
});

$("#enter").click(function() {
    $("#intro").hide();
    $("#prompt").show();
    $("#question").focus();
});

$("#question").keypress(function(event) {
    if (event.key === 'Enter') {
        $("#ask").click();
        event.preventDefault();
    }
});

$("#ask").click(function() {
    var question = $("#question").val();
    $("#prompt").hide();
    $("#main-page").show();
    $("#main-page").append('<div class="text"><p>' + question + '</p></div>');
    $("#main-page").append('<div class="yesOrNo">' + (yesNo ? "Yes" : "No") + '</div>');
});

$(document).keydown(function(event) {
    if (event.key === 'Backspace' || event.key === 'Escape') {
        if ($("#main-page").is(':visible')) {
            $("#back").click();
        }
    }
});

$("#daisy").click(function() {
    i = (i + 1) % daisies.length
    if (i === 0) {
        $("#daisy").hide();
    }
    $(this).attr('src', daisies[i]);
    yesNo = !yesNo;
    $(".yesOrNo").html((yesNo ? "Yes" : "No"));
})

$("#back").click(function() {
    $(".text").remove();
    $("#main-page").hide();
    $("#intro").show();
});
