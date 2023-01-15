function devided(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let sum = 0;
    let numbers = "";

    for (let i = startNum; i <= endNum; i++) {
        if (i % 9 == 0) {
            sum += i;
            numbers+=i+'\n'//first we put all the numbers into one varuable, and then we use \n so we can print every number on a new line 
            
        }
    } console.log(`The sum: ${sum}`);
    console.log(numbers);
}
devided(['100', '200']);