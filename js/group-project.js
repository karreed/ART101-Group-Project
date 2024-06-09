const flowers = [
    {
        images: ["daisies/daisy1.png", "daisies/daisy2.png", "daisies/daisy3.png", "daisies/daisy4.png", "daisies/daisy5.png", "daisies/daisy6.png", "daisies/daisy7.png", "daisies/daisy8.png", "daisies/daisy9.png", "daisies/daisy10.png", "daisies/daisy11.png", "daisies/daisy12.png", "daisies/daisy13.png", "daisies/daisy14.png", "daisies/daisy15.png", "daisies/daisy16.png", "daisies/daisy17.png", "daisies/daisy18.png", "daisies/daisy19.png"],
        info: {
            history: "The daisy comes from the old English phrase “daes eage,” or “days eye,” due to how the flower blossoms at the first sign of dawn. Ancient Egyptians have grown these daisies and used them as herbal medicine since early 2200 BC. There are three famous kinds of daisies; the Gerbera daisy, Shasta daisy, and rudbeckia which are seen around a lot. Daisies have a reputation as a low maintenance and long-lasting blooming flower which makes it a favorite for flower lovers everywhere.",
            meaning: "They serve as a symbol of innocence and purity while symbolizing new beginnings and its bright spirit-lifting colors are known to spread happiness like wildfire.",
            genus: "Bellis",
            scientificName: "Bellis perennis",
            colors: "Blue base petals arising from a dark green spathe, topped with an upright fan of bright orange sepals",
            name: "Daisy"
        }
    },
    {
        images: ["sunflower/sun1.png", "sunflower/sun2.png", "sunflower/sun3.png", "sunflower/sun4.png", "sunflower/sun5.png", "sunflower/sun6.png", "sunflower/sun7.png", "sunflower/sun8.png", "sunflower/sun9.png", "sunflower/sun10.png", "sunflower/sun11.png", "sunflower/sun12.png", "sunflower/sun13.png", "sunflower/sun14.png", "sunflower/sun15.png", "sunflower/sun16.png", "sunflower/sun17.png"],
        info: {
            history: "The sunflower, as the most popular plant, no other plant has an impact and significance as the sunflower did. Used by Early Native Americans, made use of its seed before corn and beans were introduced to America while making most of the offerings from the flower. Today, people have and still eat the seeds, ground the kernels into flour, and extract oils for their hair in shampoos and conditioners and for medicine as well. In other parts of the world such as Peru, the Aztecs would worship sunflowers and place images of them made of gold in their temples while crowning their princesses in bright yellow flowers.",
            meaning: "Happiness, optimism, strength and loyalty.",
            genus: "Asteraceae",
            scientificName: "Helianthus annuus",
            colors: "Yellow and Green",
            name: "Sunflower"
        }
    },
    {
        images: ["bird/bird1.png", "bird/bird2.png", "bird/bird3.png", "bird/bird4.png", "bird/bird5.png", "bird/bird6.png", "bird/bird7.png", "bird/bird8.png", "bird/bird9.png"],
        info: {
            history: "Birds of Paradise, shaped like a bird on a long petiole, the plant is grown outdoors in warm climates and as a houseplant for its attractive foliage and unusual flowers. It has been grown at the Royal Botanic Gardens in Kew, South Africa since 1773. Named by Sir Joseph Banks, the director of the Royal Gardens, the scientific name of the bird of paradise was Strelitzia reginae. The bird of paradise got its name from the fact that its flower was made of three bright orange petals which are fused into a single bud where they make their debut and shape resulting in the shape of a tropical bird in flight.",
            meaning: "Joyfulness, paradise, freedom, anticipation, and excitement",
            genus: "Rhizomes",
            scientificName: "Strelitzia",
            colors: "Blue base petals arising from a dark green spathe, topped with an upright fan of bright orange sepals",
            name: "Birds of Paradise"
        }
    },
    {
        images: ["poppy/poppy1.png", "poppy/poppy2.png", "poppy/poppy3.png", "poppy/poppy4.png", "poppy/poppy5.png", "poppy/poppy6.png"],
        info: {
            history: "The poppy, a native flower of California, this plant was introduced into English gardens in the nineteenth century by Europeans, not only was the poppy a widely cultivated flower and gardens and landscapes for its beauty and resilience, but indigenous people of California revered the California poppy and used it for medicinal purposes, dyeing fabric, and as a mild sedative as well. You can find them on the roadside of Californias as well.",
            meaning: "Resilience",
            genus: "Eschscholzia",
            scientificName: "Eschscholzia californica",
            colors: "Orange",
            name: "Poppy"
        }
    },
    {
        images: ["deathcamas/deathcamas1.png", "deathcamas/deathcamas2.png", "deathcamas/deathcamas3.png", "deathcamas/deathcamas4.png", "deathcamas/deathcamas5.png", "deathcamas/deathcamas6.png", "deathcamas/deathcamas7.png", "deathcamas/deathcamas8.png", "deathcamas/deathcamas9.png", "deathcamas/deathcamas10.png", "deathcamas/deathcamas11.png", "deathcamas/deathcamas12.png"],
        info: {
            history: "The Fremonts Deathcamas is a perennial herb that regrows each spring from an underground bulb with linear leaves and is primarily at the base of the plant. The flower is considered a geophyte as it is one of a group of herbaceous plants with storage organs beneath the soil that allow it to survive unfavorable conditions for extended periods. Unlike the other plants mentioned in this document, this plant is the only plant that is not eaten by the Native Americans as any parts of star lily and all other species are formerly in the genus Zigadenus are highly toxic where its only use is reported in anything almost invariably medicinal, occasionally ceremonial.",
            meaning: "Toxicity (toxikos) and skordion (garcli)",
            genus: "Zigadenus",
            scientificName: "Toxicoscordion fremontii",
            colors: "White",
            name: "Deathcamas"     
        }
    },
    {
        images: ["tulip/tulip1.png", "tulip/tulip2.png", "tulip/tulip3.png", "tulip/tulip4.png", "tulip/tulip5.png", "tulip/tulip6.png", "tulip/tulip7.png", "tulip/tulip8.png"],
        info: {
            history: "The tulips are natives of Central Asia and Turkeys and are among the most popular flowers amongst garden flowers with numerous cultivars and varieties that have been developed. They began in Persia (Iran) during the 10th century.",
            meaning: "Perfect and deep love.",
            genus: "Tulipa",
            scientificName: "Tulipa",
            colors: "Red, purple, pink, yellow, orange, and white",
            name: "Tulip"

        }
    },
    {
        images: ["iris/iris1.png", "iris/iris2.png", "iris/iris3.png", "iris/iris4.png", "iris/iris5.png", "iris/iris6.png", "iris/iris7.png", "iris/iris8.png", "iris/iris9.png", "iris/iris10.png"],
        info: {
            history: "The iris, A Greek translation for Rainbow, the flower which is another common flower you would find in the garden dates back to ancient Greece and was named after the goddess Iris. This was used to describe the flower that came in many colors.",
            meaning: "All three petals of the flower were thought to stand for faith, wisdom, and valor",
            genus: "Iridaceae",
            scientificName: "Iris",
            colors: "Blue, purple, yellow, white, pink, orange, brown, and black.",
            name: "Iris"
        }
    }
];

var i = 0;
var chosenFlower = flowers[Math.floor(Math.random() * flowers.length)];

const API_ENDPOINT = 'https://yesno.wtf/api';

const showAnswer= (answer) => {
    $(".yesOrNo").remove();
    $("#main-page").append('<div class="yesOrNo"><p>' + answer + '</p></div>');
};

const fetchAnswer = () => {
    fetch(API_ENDPOINT)
        .then(data => data.json())
        .then(data => showAnswer(data.answer));
};

function getFlowerInfo() {
    var flowerInfo = chosenFlower.info;
    if (flowerInfo) {
        $("#flowerInfoList").append(`
            <li>Name: ${flowerInfo.name}</li>
            <li>Genus: ${flowerInfo.genus}</li>
            <li>Colors: ${flowerInfo.colors}</li>
            <li>Scientific Name: ${flowerInfo.scientificName}</li>
            <li>History: ${flowerInfo.history}</li>
            <li>Meaning: ${flowerInfo.meaning}</li>
            `);
    }
    $("#chosenFlower").attr('src', chosenFlower.images[0]);
};

var flowerInfo = getFlowerInfo();

$("#ask").click(function() {
    var question = $("#question").val();
    $("#prompt, #background2").hide();
    $("#background3").show();
    fetchAnswer();
    $("#main-page").show().append(`
        <div class="text"><p>${question}?</p></div>
        <div class="clickMe"><p>click the flower!<p/></div>
        <div class="flowerInfo"><ul id="flowerInfoList"></ul></div>
        `);
    getFlowerInfo();
});

$(document).keydown(function(event) {
    if (event.key ==='Enter') {
        if ($("#intro").is(':visible')) {
            $("#enter").click();
            event.preventDefault();
        }  
    }
});

$("#enter").click(function() {
    $("#intro, #background1").hide();
    $("#background2, #prompt").show();
    $("#question").focus();
});

$("#question").keypress(function(event) {
    if (event.key === 'Enter') {
        $("#ask").click();
        event.preventDefault();
    }
});

$(document).keydown(function(event) {
    if (event.key === 'Backspace' || event.key === 'Escape') {
        if ($("#credits").is(':visible')) {
            $("#back").click();
        }
    }
});

$("#chosenFlower").click(function() {
    i = (i + 1) % chosenFlower.images.length;
    if (i == 0) {
        $("#chosenFlower").hide();
        $(".flowerInfo").remove();
        $(".clickMe").remove();
        $("#credits").show();
        $("#background3").show();
    }
    $("#chosenFlower").attr('src', chosenFlower.images[i]);
    fetchAnswer();
})

$("#back").click(function() {
    $(".text, .yesOrNo").remove();
    $("#intro, #background1").show();
    $("#credits").hide();
    $("#question").val('');
    $("#background3").hide();
    $("#chosenFlower").show();
    chosenFlower = flowers[Math.floor(Math.random() * flowers.length)];
});
