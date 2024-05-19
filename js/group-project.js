
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
    var yesOrNo = Math.random() < 0.5 ? 'Yes' : 'No';
    $("#output").html('<div class="text"><p>' + question + "<br />" + yesOrNo + '</p></div>');
    $("#question").val('');
});
