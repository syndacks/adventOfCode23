let fs = require('fs');

const FILEPATH = './1input.txt';

const data = fs.readFileSync(FILEPATH, 'utf8');
const list = data.split('\n')
console.log("list: ", list);

let globalSum = 0;

// helper function for determining if item is a number
function _isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// loop over lines in list
function main () {
    for (var i = 0; i < list.length; i++) {
        seenInLine = [];
        // loop over chars in line
        for (var j = 0; j < list[i].length; j++) {
            // if char is a number, add to seen
            if (_isNumber(list[i][j])) {
                seenInLine.push(list[i][j]);
            }
            console.log("seenInLine: ", seenInLine);
        }

        if (seenInLine.length > 1) {
            // take the first key in the object, convert to number
            // take the first value in the seenInLine, convert to number
            let firstNum = parseInt(seenInLine[0]);

            // take the last value in seenInLine, convert to number
            let lastNum = parseInt(seenInLine[seenInLine.length - 1]);

            // take firstNum and lastNum, and make them a two digit number
            let twoDigitNum = firstNum * 10 + lastNum;
            globalSum += twoDigitNum;
            
            console.log("globalSum: ", globalSum);
        } else if (seenInLine.length == 1) {
            // take the first key in the object, convert to number
            let firstNum = parseInt(seenInLine[0]);
            
            // take firstNum make them a two digit number
            let twoDigitNum = firstNum * 10 + firstNum;
            globalSum += twoDigitNum;
            
            console.log("globalSum: ", globalSum);
        }
    }
}
main();
