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

var daisyInfo = "The daisy comes from the old English phrase “daes eage,” or “days eye,” due to how the flower blossoms at the first sign of dawn. Ancient Egyptians have grown these daisies and used them as herbal medicine since early 2200 BC. There are three famous kinds of daisies; the Gerbera daisy, Shasta daisy, and rudbeckia which are seen around a lot. Daisies have a reputation as a low maintenance and long-lasting blooming flower which makes it a favorite for flower lovers everywhere.";
var sunflowerInfo = "The sunflower, as the most popular plant, no other plant has an impact and significance as the sunflower did. Used by Early Native Americans, made use of its seed before corn and beans were introduced to America while making most of the offerings from the flower. Today, people have and still eat the seeds, ground the kernels into flour, and extract oils for their hair in shampoos and conditioners and for medicine as well. In other parts of the world such as Peru, the Aztecs would worship sunflowers and place images of them made of gold in their temples while crowning their princesses in bright yellow flowers. ";
var birdInfo = "Birds of Paradise, shaped like a bird on a long petiole, the plant is grown outdoors in warm climates and as a houseplant for its attractive foliage and unusual flowers. It has been grown at the Royal Botanic Gardens in Kew, South Africa since 1773. Named by Sir Joseph Banks, the director of the Royal Gardens, the scientific name of the bird of paradise was Strelitzia reginae. The bird of paradise got its name from the fact that its flower was made of three bright orange petals which are fused into a single bud where they make their debut and shape resulting in the shape of a tropical bird in flight. ";
var poppyInfo = "The poppy, a native flower of California, this plant was introduced into English gardens in the nineteenth century by Europeans, not only was the poppy a widely cultivated flower and gardens and landscapes for its beauty and resilience, but indigenous people of California revered the California poppy and used it for medicinal purposes, dyeing fabric, and as a mild sedative as well. You can find them on the roadside of Californias as well.";
var deathInfo = "The Fremonts Deathcamas is a perennial herb that regrows each spring from an underground bulb with linear leaves and is primarily at the base of the plant. The flower is considered a geophyte as it is one of a group of herbaceous plants with storage organs beneath the soil that allow it to survive unfavorable conditions for extended periods. Unlike the other plants mentioned in this document, this plant is the only plant that is not eaten by the Native Americans as any parts of star lily and all other species are formerly in the genus Zigadenus are highly toxic where its only use is reported in anything almost invariably medicinal, occasionally ceremonial. ";
var tulipInfo = "The tulips are natives of Central Asia and Turkeys and are among the most popular flowers amongst garden flowers with numerous cultivars and varieties that have been developed. They began in Persia (Iran) during the 10th century.";
var irisInfo = "The iris, A Greek translation for Rainbow, the flower which is another common flower you would find in the garden dates back to ancient Greece and was named after the goddess Iris. This was used to describe the flower that came in many colors. ";

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
    if (i == 0) {
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
    $("#question").val('');
    chosenFlower = randomFlower(flowers);
    info = getFlowerInfo(); //add this line
    yesNo = Math.random() < 0.5;
});

