function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
    let buff = "";
    for (let i = floors; i >= 1; i--) {
        if( i === floors){//top floor "L"
            buff ="L";
        }else if (i % 2 == 0){ // even floor "O" - offices
            buff = "O";
        }else {
            buff = "A";// not even floor "A" - apartaments
        }
        let buff1="";
        for ( let k=0; k<=rooms-1; k++){
            buff1 +=`${buff}${i}${k}`+" ";
            
        }
        console.log(buff1);
    }
}
building(["16",

    "14"]);