$(document).ready(function () {
    var score = 0;
    var width = $(window).width() - 100;
    var height = $(window).height() - 200;

    // Function to generate a random alphabet A-Z
    function getRandomAlphabet() {
        var randomCode = Math.floor(Math.random() * 26) + 65; // 65-90 for A-Z
        return String.fromCharCode(randomCode);
    }

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to create and display a bubble
    function createBubble() {
        var bubble = $('<div class="bubble"></div>');
        var letter = getRandomAlphabet();
        bubble.text(letter);
        bubble.css({
            backgroundColor: getRandomColor(),
            top: Math.random() * (height - 50) + 'px',
            left: Math.random() * (width - 50) + 'px'
        });

        $('#game-area').append(bubble);

        // Remove the bubble after 2 seconds
        setTimeout(function () {
            bubble.remove();
        }, 2000);
    }

    // Function to handle key press
    $(document).keydown(function (event) {
        var keyCode = event.which;
        var letter = String.fromCharCode(keyCode).toUpperCase();

        $('#game-area .bubble').each(function () {
            if ($(this).text() === letter) {
                score++;
                $('#score').text('Score: ' + score);
                $(this).remove(); // Remove bubble if caught
            }
        });
    });

    // Generate a bubble every 2 seconds
    setInterval(createBubble, 2000);
});
