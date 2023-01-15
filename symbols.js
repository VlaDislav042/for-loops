function symbols(input) {
    let word=String(input[0]);
    for (let i = 0; i < word.length; i++) {
        let currentLetter = word[i];
        console.log(currentLetter);
    }
}
symbols(["ice cream"])