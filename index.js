/**
 * @param None
 * @returns string of intro message
 */
function useMagnifyingGlass() {
    return 'I will use my magnifying glass.';
}
/**
 * @param None
 * @returns either 1 or 2 randomly to represent the culprit
 */
function determineCulprit() {
    return Math.floor(Math.random() * 2 + 1);
}
/**
 *
 * @param numberOfClues
 * @param clue1
 * @param clue2
 * @param suspect1
 * @param suspect2
 * @returns culpritNumber - the number representing the culprit
 */
function doSleuthing(numberOfClues, clue1, clue2, suspect1, suspect2) {
    console.log('I am a famous detective and I will solve the crime.');
    // Using the magnifying glass is important to sleuthing
    var unnecessaryVariable = 'Why is this here?'; //all fun and code!
    unnecessaryVariable = useMagnifyingGlass();
    console.log(unnecessaryVariable);
    console.log('Now I consider the first clue: ', clue1);
    console.log('Now I consider the second clue: ', clue2);
    var culpritNumber = determineCulprit();
    console.log('Now, I will return to you the culprit. There, but for the grace of God go we got...');
    if (culpritNumber == 1) {
        console.log(suspect1, '!');
    }
    else if (culpritNumber == 2) {
        console.log(suspect2, '!');
    }
    else {
        console.log("I couldn't figure out who drank the priceless milk. :( :("); //kinda useless but fun!
    }
    return culpritNumber;
}
var answer = 3;
answer = doSleuthing(2, 'The parrot heard everything!', 'All the doors and windows were shut from the INSIDE.', 'Burglar Bob', 'Saint Sam');
console.log('The culprit was none other than ', answer, '!');
