const daisies = ["daisies/daisy1.png", "daisies/daisy2.png", "daisies/daisy3.png", "daisies/daisy4.png", "daisies/daisy5.png", "daisies/daisy6.png", "daisies/daisy7.png", "daisies/daisy8.png", "daisies/daisy9.png", "daisies/daisy10.png", "daisies/daisy11.png", "daisies/daisy12.png", "daisies/daisy13.png", "daisies/daisy14.png", "daisies/daisy15.png", "daisies/daisy16.png", "daisies/daisy17.png", "daisies/daisy18.png", "daisies/daisy19.png"];

const sunflower = ["sunflower/sun1.png", "sunflower/sun2.png", "sunflower/sun3.png", "sunflower/sun4.png", "sunflower/sun5.png", "sunflower/sun6.png", "sunflower/sun7.png", "sunflower/sun8.png", "sunflower/sun9.png", "sunflower/sun10.png", "sunflower/sun11.png", "sunflower/sun12.png", "sunflower/sun13.png", "sunflower/sun14.png", "sunflower/sun15.png", "sunflower/sun16.png", "sunflower/sun17.png"]

const bird = ["bird/bird1.png", "bird/bird2.png", "bird/bird3.png", "bird/bird4.png", "bird/bird5.png", "bird/bird6.png", "bird/bird7.png", "bird/bird8.png", "bird/bird9.png"]

const poppy = ["poppy/poppy1.png", "poppy/poppy2.png", "poppy/poppy3.png", "poppy/poppy4.png", "poppy/poppy5.png", "poppy/poppy6.png"]

const death = ["deathcamas/deathcamas1.png", "deathcamas/deathcamas2.png", "deathcamas/deathcamas3.png", "deathcamas/deathcamas4.png", "deathcamas/deathcamas5.png", "deathcamas/deathcamas6.png", "deathcamas/deathcamas7.png", "deathcamas/deathcamas8.png", "deathcamas/deathcamas9.png", "deathcamas/deathcamas10.png", "deathcamas/deathcamas11.png", "deathcamas/deathcamas12.png"]

const tulip = ["tulip/tulip1.png", "tulip/tulip2.png", "tulip/tulip3.png", "tulip/tulip4.png", "tulip/tulip5.png", "tulip/tulip6.png", "tulip/tulip7.png", "tulip/tulip8.png"]

const iris = ["iris/iris1.png", "iris/iris2.png", "iris/iris3.png", "iris/iris4.png", "iris/iris5.png", "iris/iris6.png", "iris/iris7.png", "iris/iris8.png", "iris/iris9.png", "iris/iris10.png"]

var i = 0;
var yesNo = Math.random() < 0.5;
var flowers = [daisies, sunflower, bird, poppy, death, tulip, iris];

function randomFlower(array) {
    var randomFlower = Math.floor(Math.random() * array.length);
    return array[randomFlower];
}

var chosenFlower = randomFlower(flowers);

var daisyInfo = "daisies are bright";
var sunflowerInfo = "sunflowers are yellow";
var birdInfo = "Look like bird";
var poppyInfo = "they be poppin";
var deathInfo = "Look pretty";
var tulipInfo = "my mom's fav";
var irisInfo = "kinda like the one in your eye";

function getFlowerInfo() {
    if (chosenFlower === daisies) {
        return daisyInfo;
    } else if (chosenFlower === sunflower) {
        return sunflowerInfo
    } else if (chosenFlower === bird) {
        return birdInfo;
    } else if (chosenFlower === poppy) {
        return poppyInfo;
    } else if (chosenFlower === death) {
        return deathInfo;
    } else if (chosenFlower === tulip) {
        return tulipInfo;
    } else if (chosenFlower === iris) {
        return irisInfo;
    }
};

var info = getFlowerInfo();

$("#ask").click(function() {
    var question = $("#question").val();
    $("#prompt").hide();
    $("#background2").hide();
    $("#main-page").show();
    $("#main-page").append('<div class="text"><p>' + question + '</p></div>');
    $("#main-page").append('<div class="yesOrNo">' + (yesNo ? "Yes" : "No") + '</div>');
    $("#main-page").append('<div class="flowerInfo"><p>' + info + '</p></div>'); //add this line
    $("#chosenFlower").attr('src', chosenFlower[0]);
});

(function () {
    $("#background2").hide();
})();

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
    $("#background1").hide();
    $("#background2").show();
    $("#prompt").show();
    $("#question").focus();
});

$("#question").keypress(function(event) {
    if (event.key === 'Enter') {
        $("#ask").click();
        event.preventDefault();
    }
});

$("#ask").hover(function() {
    
}
)

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
    $(".flowerInfo").remove(); //add this line
    $("#main-page").hide();
    $("#intro").show();
    $("#background1").show();
    $("#chosenFlower").show();
    chosenFlower = randomFlower(flowers);
    info = getFlowerInfo(); //add this line
    yesNo = Math.random() < 0.5;
});

