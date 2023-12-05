
let fs = require('fs');

const FILEPATH = './2input.txt';

const data = fs.readFileSync(FILEPATH, 'utf8');
const gamesets = data.split('\n')
// console.log("gamesets: ", gamesets);

const RULESET = {red: 12, green: 13, blue: 14};
let sumOfIds = 0;

function mainPart1 () {
    // loop over sets in gameset
    for(var i = 0; i < gamesets.length-1; i++) {
        // determine the sets by splitting on colong e.g. "Game 1:"
        let gameset = gamesets[i].split(':')[1]
        console.log("gameset: ", gameset);
        let set = gameset.split(';')
        console.log("set: ", set);
        let subRuleViolates = false;
        for(var j = 0; j < set.length; j++) {
            let ballPull = set[j].split(',').map(item => item.trim());
            console.log("ballPull: ", ballPull);
            //loop over set and split on comma to form a rule
            for(var k = 0; k < ballPull.length; k++) {
                let subRule = ballPull[k].split(',').map(item => item.trim());
                console.log("subRule: ", subRule);
                //loop over rule and split on space
                for(var l = 0; l < subRule.length; l++) {
                    let number = subRule[l].split(' ')[0];
                    number = parseInt(number);
                    let color = subRule[l].split(' ').map(item => item.trim())[1];
                    // if the number is larger than the color in RULESET, pass
                    if (number > RULESET[color]) {
                        console.log("too big number: ", number);
                        subRuleViolates = true;
                    }
                }
            }
        }
    if (!subRuleViolates) {
        // get the ide from the gameset
        let gamesetGameId = gamesets[i].split(':')[0];
        let gameID = gamesetGameId.split(' ')[1];
        //convert gameID to number
        gameID = parseInt(gameID);
        // add the gamesetId to the sumOfIds
        sumOfIds += gameID;
        console.log("sumOfIds: ", sumOfIds)
        console.log("--------------------")
        }
    }
}

let sumOfCubes = 0;
function _handleRuleSetBuildFromGamsetOperations(ruleSetBuildFromGameset) {
    // multiply the values in the ruleSetBuildFromGameset together
    let product = 1;
    for (var key in ruleSetBuildFromGameset) {
        console.log("key: ", key);
        console.log("ruleSetBuildFromGameset[key]: ", ruleSetBuildFromGameset[key]);
        product *= ruleSetBuildFromGameset[key];
    }
    console.log("product: ", product);
    sumOfCubes += product;
    console.log("sumOfCubes: ", sumOfCubes);
}

function mainPart2(){
    // loop over sets in gameset
    for(var i = 0; i < gamesets.length-1; i++) {
        // determine the sets by splitting on colong e.g. "Game 1:"
        let gameset = gamesets[i].split(':')[1]
        console.log("gameset: ", gameset);
        let set = gameset.split(';')
        console.log("set: ", set);
        let ruleSetBuildFromGameset = {};

        for(var j = 0; j < set.length; j++) {
            let ballPull = set[j].split(',').map(item => item.trim());
            console.log("ballPull: ", ballPull);
            //loop over set and split on comma to form a rule
            for(var k = 0; k < ballPull.length; k++) {
                let subRule = ballPull[k].split(',').map(item => item.trim());
                console.log("subRule: ", subRule);
                //loop over rule and split on space
                for(var l = 0; l < subRule.length; l++) {
                    let number = subRule[l].split(' ')[0];
                    number = parseInt(number);
                    let color = subRule[l].split(' ').map(item => item.trim())[1];
                    // if the color is not in the ruleSetBuildFromGameset object, add it
                    if (!ruleSetBuildFromGameset[color]) {
                        ruleSetBuildFromGameset[color] = number;
                    }
                    // if the color is in the ruleSetBuildFromGameset object and the new number is larger, update the value
                    if (ruleSetBuildFromGameset[color] && number > ruleSetBuildFromGameset[color]) {
                        ruleSetBuildFromGameset[color] = number;
                    }
                    console.log("ruleSetBuildFromGameset", ruleSetBuildFromGameset);
                }
            }
            if (j == set.length - 1) {
                _handleRuleSetBuildFromGamsetOperations(ruleSetBuildFromGameset);
            }
        }
    }
}

mainPart2();
