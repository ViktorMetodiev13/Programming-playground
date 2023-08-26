function caesar(inputWord) {
    let letters = inputWord.split(''); // -->> ['a', 'b', 'c']
    let arrayOfNums = [];

    for (let letter of letters) {
        arrayOfNums.push(letter.charCodeAt());
    }

    let newNums = [];
    
    for (let num of arrayOfNums) {
        newNums.push(num + 3);
    };

    let result = [];
    for (let newNum of newNums) {
        result.push(String.fromCharCode(newNum));
    }

    console.log(result.join(''));
}

caesar('abc');