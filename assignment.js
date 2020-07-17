// Miles To Feet Converter

function feetToMile(inputNumber) {
    var mile = inputNumber / 5280;
    return mile;

}

var mile = feetToMile(12000);
console.log("Answer is: ", mile, "miles");



// Wood Calculator Function

function woodCalculator(chair, table, bed) {
    var chairWood = 1 * chair;
    var tableWood = 3 * table;
    var bedWood = 5 * bed;
    var totalWood = chairWood + tableWood + bedWood;

    return totalWood;
}
var finalResult = woodCalculator(10, 12, 15);
console.log("Total Wood Needed: ", finalResult);




// BrickCalculator Function 

function brickCalculator(brick) {
    var firstFloor = 0;
    var secondFloor = 0;
    var otherFloor = 0;

    for (var i = 1; i <= brick; i++) {
        var element = i;
        if (element <= 10) {
            firstFloor = 15000 + firstFloor;
        } else if (element > 10 && element <= 20) {
            secondFloor = 12000 + secondFloor;
        } else {
            otherFloor = 10000 + otherFloor;
        }

    }
    var totalBrick = firstFloor + secondFloor + otherFloor;
    return totalBrick;
}
var brickResult = brickCalculator(22);
console.log("Brick Needed: ",brickResult);





// TinyFriend Function Done

function tinyFriend(friendNames) {
    var smallName = friendNames[0];
    for (var i = 0; i < friendNames.length; i++) {
        var currentName = friendNames[i];
        if (currentName.length < smallName.length) {
            smallName = currentName;
        }
    }
    return smallName;
}

var result = tinyFriend(["mim", "femi", "fahim", "mahabub", "hossain", "saddam ali"]);
console.log(result);
