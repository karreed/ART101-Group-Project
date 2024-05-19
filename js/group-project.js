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
    $("#question").val('');
    $("#prompt").hide();
    $("#main-page").show();
    $("#main-page").append('<div class="text"><p>' + question + '</p></div>');
});

$(document).keydown(function(event) {
    if (event.key === 'Backspace' || event.key === 'Escape') {
        if ($("#main-page").is(':visible')) {
            $("#back").click();
        }
    }
});

$("#back").click(function() {
    $(".text").remove();
    $("#main-page").hide();
    $("#intro").show();
});
