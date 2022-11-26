// Code your solutions in this file
function writeCards(string) {
    let name = [];
    for (let i = 0; i < string.length; i++) { 
        let name1 = `Thank you,${string[i]},for the wonderful surprise gift!`;
        name.push(name1)
    }
    return name;
    }
function countDown (number){
    while (number >= 0){
        console.log(number);
        number --;
    }
}
