function reverse(input) {
    let word=String(input[0]);
    let buff="";
    for(let i=word.length-1; i>=0; i--){
        let currentLetter = word[i];
        buff+=currentLetter;
        
    }
    console.log(buff);
}
reverse(["understand"])