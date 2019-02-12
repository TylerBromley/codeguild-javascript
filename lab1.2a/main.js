let distance = document.getElementById("numIn");
let inUnit = document.getElementById("unitsIn");
let outUnit = document.getElementById("unitsOut");
let output = document.getElementById("output");
let convert = document.getElementById("convert");
let meters = 0;

function convertToMeters(distance, inUnit) {
    console.log(distance);
    if (inUnit === "1") {
        meters = distance * 0.3048;
    } else if (inUnit === "2") {
        meters = distance * 1609.344;
    } else if (inUnit === "3") {
        meters = distance * 1000;
    } else if (inUnit === "4") {
        meters = distance;
    }
    return meters;
}
function convertToOutput(meters, outUnit) {
    if (outUnit === "1") {
        meters = meters/0.3048;
        meters = meters.toFixed(4);
    } else if (outUnit === "2") {
        meters = meters/1609.344;
        meters = meters.toFixed(4);
    } else if (outUnit === "3") {
        meters = meters/1000;
        meters = meters.toFixed(4);
    } else if (outUnit === "4") {
        meters = meters;
    }
    return meters;
}

convert.addEventListener("click", function(e) {
    e.preventDefault();
    message = outUnit.options[outUnit.selectedIndex].text;
    let t = distance.value;
    let j = convertToMeters(t, inUnit.value);
    let k = convertToOutput(meters, outUnit.value);
    output.innerText = `${k} ${message}`;
});
