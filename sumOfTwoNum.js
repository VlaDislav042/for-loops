function sum(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinations = 0;
    let result = 0;
    let i = 0;
    let k = 0;

    for (i = startNum; i <= endNum; i++) {
        for (k = startNum; k <= endNum; k++) {
            combinations++;
            result = i + k;
            if (result === magicNum) {
                break;
            }
        }
        if (result === magicNum) {
            break;
        }
    }
    if (result === magicNum) {
        console.log(`Combination N:${combinations} (${i} + ${k} = ${magicNum})`);
    } else {
        console.log(`${combinations} combinations - neither equals ${magicNum}`);
    }
}

sum(["88", "888", "2000"]);