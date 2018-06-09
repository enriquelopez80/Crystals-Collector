$(document).ready(function () {

    //Generate a random number between 19 - 120 that the player will need to equal to win

    let randomNumber = Math.floor(Math.random() * 101) + 19; {
        console.log(randomNumber);
    }

    //Append random number to target number in HTML

    $('#random-score').text('Match This Score: ' + randomNumber)

    //Each crystal has a value between 1 - 12

    let number1 = Math.floor(Math.random() * 12) + 1; {
        console.log(number1);
    }
    let number2 = Math.floor(Math.random() * 12) + 1; {
        console.log(number2);
    }
    let number3 = Math.floor(Math.random() * 12) + 1; {
        console.log(number3);
    }
    let number4 = Math.floor(Math.random() * 12) + 1; {
        console.log(number4);
    }

    //declare variables

    let wins = 0;
    let losses = 0;
    let totalScore = 0;

    //Append variables to target HTML

    $('#numWins').text('Wins: ' + wins);
    $('#numLosses').text('Losses: ' + losses);
    $('#total-score').text('Total Score So Far: ' + totalScore);


    //attach on click function for each jewel

    $('.green').on('click', function () {
        totalScore += number1;
        $('#total-score').text('Total Score So Far: ' + totalScore);
        game();
    })

    $('.orange').on('click', function () {
        totalScore += number2;
        $('#total-score').text('Total Score So Far: ' + totalScore);
        game();
    })

    $('.red').on('click', function () {
        totalScore += number3;
        $('#total-score').text('Total Score So Far: ' + totalScore);
        game();
    })

    $('.blue').on('click', function () {
        totalScore += number4;
        $('#total-score').text('Total Score So Far: ' + totalScore);
        game();
    })

    //set function with win/lose conditions

    function game() {

        if (totalScore === randomNumber) {
            alert('Aw yeah, you matched the number! You Won!');
            wins++;
            $('#numWins').text("Wins: " + wins);
            reset();
        } else if (totalScore >= randomNumber) {
            alert('Dang it, you went over! Let\'s try again!');
            losses++;
            $('#numLosses').text("Losses: " + losses);
            reset();
        }
    }

    //create a reset

    function reset() {
        randomNumber = Math.floor(Math.random() * 101) + 19;
        $("#random-score").text("Match This Score: " + randomNumber);
        number1 = Math.floor(Math.random() * 12) + 1;
        number2 = Math.floor(Math.random() * 12) + 1;
        number3 = Math.floor(Math.random() * 12) + 1;
        number4 = Math.floor(Math.random() * 12) + 1;
        totalScore = 0;
        $('#total-score').text('Total Score So Far: ' + totalScore);
    }

})