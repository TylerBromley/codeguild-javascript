let pageArray = [
    "https://www.huffingtonpost.com/",
    "https://splinternews.com/",
    "https://thebaffler.com/",
    "https://jacobinmag.com/",
    "https://www.youtube.com/channel/UCNvsIonJdJ5E4EXMa65VYpA",
    "http://bostonreview.net/",
    "https://www.democracynow.org/",
    "https://theoutline.com/",
    "https://twitter.com/AOC",
    "https://www.currentaffairs.org/",
    "https://www.labornotes.org/"];

let counter = 6;

let interval = setInterval(function() {
    document.getElementById('countdown').innerHTML = -- counter;
    if (counter === 0) {
        clearInterval(interval);
        location.replace(getRandomPage());
    }
}, 1000);

function getRandomPage() {
    let num = Math.floor((Math.random() * 10) + 1);
    console.log(pageArray[num]);
    return pageArray[num];
}



