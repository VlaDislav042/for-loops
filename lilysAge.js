function age(input) {
    let age = Number(input[0]);
    let money = 0;
    let toys = 0;
    let washingMachine = Number(input[1]);
    let singleToyPrice = Number(input[2]);
    let count=0;

    for (let i = 1; i <= age; i++) {
        if (i % 2 == 0) {
            count++;
            money += 10*count;
            
        } else {
            toys++;
        }
    }

    let moneyFromToys=toys*singleToyPrice;
    let stolenMoney=money-=count;
    money+=moneyFromToys;
    if (money >= washingMachine) {
        console.log(`Yes! ${Math.abs(money-washingMachine).toFixed(2)}`);
    }else{
        console.log(`No! ${Math.abs(money-washingMachine).toFixed(2)}`);
    }
}
age(["21",

"1570.98",

"3"]);