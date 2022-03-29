var quotes = ["I loved her, not for the way she danced with my angels but for the way the sound of her name could silence my demons.  -Christopher Pointdexter",
              "For a long time, I thought I wanted to be a nun. Then I realized that what I really wanted to be was a lesbian. -Mabel Maney",
              "Whatever our souls are made of, his and mine are the same -Emily Brontë",
              "I don’t want to repeat my innocence. I want the pleasure of losing it again. -F. Scott Fitzgerald",
              "Those who have never known the deep intimacy and the intense companionship of mutual love have missed the best thing that life has to give. -Bertrand Russell"
              
]

var colors = ["#000000",
              "#0000FF",
              "#88bad8  ",
              "#008000",
              "#6deecd",
              "#6fdcff",
              "#0ce3ac",
              "#ffc0cb",
              "#5566aa",
              "#d42069",
              "#ffb00b",
              "#FF0000"
]

var randomQuote = quotes[Math.floor( Math.random() * quotes.length )];
$('#quote').text(randomQuote);  
$('#new-quote').click(function() {
    index = colors[Math.floor(Math.random() * colors.length)];
    $('body').css('background-color', index);
    $('#quote').text(quotes[Math.floor( Math.random() * quotes.length )]);
});