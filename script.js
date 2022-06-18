

function computerPlay() {
    let i = Math.floor(Math.random() *10) + 1;
    console.log(i);

    /* 2-4 = Rock
       5-7 = Paper
       8-10 = Scissors */

    if (i < 5) {
        console.log("Rock");
    } else if (i < 8) {
        console.log("Paper");
    } else {
        console.log("Scissors");
    }
}
computerPlay()
