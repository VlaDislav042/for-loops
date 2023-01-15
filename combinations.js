function combinations(input) {
    let n = Number(input[0]);
    let validCombinations=0;

    for (let i = 0; i <= n; i++) {
        for (let k = 0; k <= n; k++) {
            for (let l = 0; l <= n; l++) {
                if (i + k + l === 25) {
                    validCombinations++;
                }
            }
        }
    }
    console.log(validCombinations);
}
combinations(["25"])