
$("#enter").click(function() {
    $("#intro").hide();
    $("#prompt").show();
});

$("#question").keypress(function(event) {
    if (event.key === 'Enter') {
        $("#ask").click();
    }
});

$("#ask").click(function() {
    var question = $("#question").val();
    $("#question").val('');
    $("#prompt").hide();
    $("#main-page").show();
    $("#main-page").append('<div class="text"><p>' + question + '</p></div>');
});

$("#back").click(function() {
    $(".text").remove();
    $("#main-page").hide();
    $("#intro").show();
});
