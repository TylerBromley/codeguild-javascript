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
// function timedText() {
//         setTimeout(myTimeout0, 1000);
//         setTimeout(myTimeout1, 2000);
//         setTimeout(myTimeout2, 3000);
//         setTimeout(myTimeout3, 4000);
//         setTimeout(myTimeout4, 5000);
//         setTimeout(myTimeout5, 6000);
//         setTimeout(myTimeout6, 7000);
// }
// function myTimeout0() {
//     document.getElementById('countdown').innerHTML = "6";
// }
// function myTimeout1() {
//     document.getElementById('countdown').innerHTML = "5";
// }
// function myTimeout2() {
//     document.getElementById('countdown').innerHTML = "4";
// }
// function myTimeout3() {
//     document.getElementById('countdown').innerHTML = "3";
// }
// function myTimeout4() {
//     document.getElementById('countdown').innerHTML = "2";
// }
// function myTimeout5() {
//     document.getElementById('countdown').innerHTML = "1";
// }
// function myTimeout6() {
//     document.getElementById('countdown').innerHTML = "0";
//     location.replace(getRandomPage());  
// }

// window.onload = timedText();


