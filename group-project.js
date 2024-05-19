$(document).ready(function() {
    $("#question").keypress(function(event) {
        if (event.key === 'Enter') {
            $("#ask").click();
        }
    });

    $("#ask").click(function() {
        var question = $("#question").val();
        alert(question);
    });
});