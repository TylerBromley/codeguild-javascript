let advice = document.getElementById("advice");
const cards = document.getElementById("cards");
let total = document.getElementById("total");
let hand = 0;

cards.addEventListener("click", function(e) {
    element = e.target;
    elementVal = element.value;
    elementNum = parseInt(elementVal);
    hand += elementNum;
    console.log(hand);
    total.innerText = `Total: ${hand}`;
    if (hand === 21) {
        advice.innerText = "Blackjack!";
    } else if (hand < 17) {
        advice.innerText = "Hit!";
    } else if (hand < 21) {
        advice.innerText = "Stay!";
    } else {
        advice.innerText = "Busted!";
    }
});


// console.log(hand);
// player_cards1 = prompt("What is your first card?");
// player_cards2 = prompt("What is your second card?");
// player_cards3 = prompt("What is your third card?");
// cards_dict = {
//     "A": 1, "2": 2, "3": 3,
//     "4": 4, "5": 5, "6": 6, 
//     "7": 7, "8": 8, "9": 9,
//     "10": 10, "J": 10, "Q": 10,
//     "K": 10,
// }
// let cards_list = [];
// function advise(cards_list, cards_dict) {
//     let total = 0;
//     let response;
//     cards_list.forEach(function(item){
//         total += cards_dict[item];
//     });
//     if (total === 21) {
//         response = `${total} Blackjack!`;
//     } else if (total < 17) {
//         response = `${total} Hit`;
//     } else if (total < 21) {
//         response = `${total} Stay`;
//     } else {
//         response = `${total} Busted!`;
//     }
//     alert(response);
// }

// cards_list.push(player_cards1);
// cards_list.push(player_cards2);
// cards_list.push(player_cards3);
// advise(cards_list, cards_dict);