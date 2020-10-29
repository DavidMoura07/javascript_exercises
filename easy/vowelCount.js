// count how much vowels exists in a word
function countVowels(word) { 

    const vowels = ['A','a','E','e','I','i','O','o','U','u'];
    return word.split("").filter(letter => vowels.includes(letter)).length;
  
}
     
// keep this function call here 
console.log(countVowels(readline()));

function readline(){
    return process.argv.slice(2).join(" ");
}