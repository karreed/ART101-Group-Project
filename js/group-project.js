const daisies = ["daisies/daisy1.png", "daisies/daisy2.png", "daisies/daisy3.png", "daisies/daisy4.png", "daisies/daisy5.png", "daisies/daisy6.png", "daisies/daisy7.png", "daisies/daisy8.png", "daisies/daisy9.png", "daisies/daisy10.png", "daisies/daisy11.png", "daisies/daisy12.png", "daisies/daisy13.png", "daisies/daisy14.png", "daisies/daisy15.png", "daisies/daisy16.png", "daisies/daisy17.png", "daisies/daisy18.png", "daisies/daisy19.png"];

const sunflower = ["sunflower/sun1.png", "sunflower/sun2.png", "sunflower/sun3.png", "sunflower/sun4.png", "sunflower/sun5.png", "sunflower/sun6.png", "sunflower/sun7.png", "sunflower/sun8.png", "sunflower/sun9.png", "sunflower/sun10.png", "sunflower/sun11.png", "sunflower/sun12.png", "sunflower/sun13.png", "sunflower/sun14.png", "sunflower/sun15.png", "sunflower/sun16.png", "sunflower/sun17.png"]

const bird = ["bird/bird1.PNG", "bird/bird2.PNG", "bird/bird3.PNG", "bird/bird4.PNG", "bird/bird5.PNG", "bird/bird6.PNG", "bird/bird7.PNG", "bird/bird8.PNG", "bird/bird9.PNG"]

var i = 0;
var yesNo = Math.random() < 0.5;
var flowers = [daisies, sunflower, bird];

function randomFlower(array) {
    var randomFlower = Math.floor(Math.random() * array.length);
    return array[randomFlower];
}

var chosenFlower = randomFlower(flowers);

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
    $("#chosenFlower").attr('src', chosenFlower[0]);
});

$(document).keydown(function(event) {
    if (event.key === 'Backspace' || event.key === 'Escape') {
        if ($("#main-page").is(':visible')) {
            $("#back").click();
        }
    }
});

$("#chosenFlower").click(function() {
    i = (i + 1) % chosenFlower.length;
    if (i === 0) {
        $("#chosenFlower").hide();
    }
    $("#chosenFlower").attr('src', chosenFlower[i]);
    yesNo = !yesNo;
    $(".yesOrNo").html((yesNo ? "Yes" : "No"));
})

$("#back").click(function() {
    $(".text").remove();
    $(".yesOrNo").remove();
    $("#main-page").hide();
    $("#intro").show();
    $("#chosenFlower").show();
    chosenFlower = randomFlower(flowers);
    yesNo = Math.random() < 0.5;
});
