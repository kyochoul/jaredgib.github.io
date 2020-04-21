// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
function validateCred(inputArray) {
    let outputArray = [];
    let arraySum;
    /*
    first iterate through array backwards
    if index is 0 or even, push value to new array
    if index is odd, double every other value
    starting with index 1
    if the doubled value is > 9, then subtract 9 and push to new array
    if the doubled value is < 9
    */
    for (i = inputArray.length - 1; i >= 0; i--) {
        if (i % 2 != 0) {
            outputArray.push(inputArray[i]);
        } else if (i % 2 == 0 & inputArray[i] * 2 > 9) {
            outputArray.push(inputArray[i] * 2 - 9);
        } else if (i % 2 == 0 & inputArray[i] * 2 < 9) {
            outputArray.push(inputArray[i] * 2);
        }
    }
    //sum the values in outputArray
    arraySum = outputArray.reduce((a, b) => a + b, 0);
    //find if the remainder is 0, if it is, the card is valid
    if (arraySum % 10 === 0) {
        return true;
    } else {
        return false;
    }
}

//console.log(validateCred(batch[0]));

function findInvalidCards(input) {
    let returnArray = [];

    for (let i = 0; i < input.length; i++) {
        if (validateCred(input[i]) != true) {
            returnArray.push(input[i]);
        }

    } return returnArray;
}



const idInvalidCardCompanies = invalidArray => {
    let returnArray = [];
    let tempIndexOf = 0;
    for (let i = 0; i < invalidArray.length; i++) {
        switch (invalidArray[i][0]) {
            case 3:
                if (returnArray.indexOf('AMX') === -1) {
                    returnArray.push('AMX');
                    break;
                } else {
                    break;
                }
            case 4:
                if (returnArray.indexOf('VISA') === -1) {
                    returnArray.push('VISA');
                    break;
                } else {
                    break;
                }
            case 5:
                if (returnArray.indexOf('MST') === -1) {
                    returnArray.push('MST');
                    break;
                } else {
                    break;
                }
            case 6:
                if (returnArray.indexOf('DISC') === -1) {
                    returnArray.push('DISC');
                    break;
                } else {
                    break;
                }
            default:
                text: 'Company not found.'
        }

    }
    return returnArray;

}
console.log('There are ' + findInvalidCards(batch).length + ' invalid cards in this list');
console.log(findInvalidCards(batch));
console.log(idInvalidCardCompanies(findInvalidCards(batch)));