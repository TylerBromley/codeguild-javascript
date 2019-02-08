let distance = prompt("What is the distance? ");
let inUnit = prompt("What is the input unit? Please enter\n\t[1] for feet\n\t[2] for miles\n\t[3] for kilometers\n\t[4] for meters\n");
let outUnit = prompt("What is the output unit? Please enter\n\t[1] for feet\n\t[2] for miles\n\t[3] for kilometers\n\t[4] for meters\n");


let meters = 0;
let type;
function convertToMeters(distance, inUnit) {
    if (inUnit === 1) {
        meters = Math.round(distance * 0.3048);
    } else if (inUnit === 2) {
        meters = Math.round(distance * 1609.344);
    } else if (inUnit === 3) {
        meters = Math.round(distance * 1000);
    } else if (inUnit === 4) {
        meters = distance;
    }
}
function convertToOutput(outUnit) {
    if (outUnit === 1) {
        meters = Math.round(meters/0.3048);
        type = "ft";
    } else if (outUnit === 2) {
        meters = Math.round(meters/1609.344);
        type = "mi";
    } else if (outUnit === 3) {
        meters = Math.round(meters/1000);
        type = "km";
    } else if (outUnit === 4) {
        meters = meters;
        type = "m";
    }
}
convertToMeters(parseFloat(distance), parseInt(inUnit));
convertToOutput(parseInt(outUnit));

alert(`${distance} equals ${meters} ${type}`);