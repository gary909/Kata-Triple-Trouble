function tripleTrouble(one, two, three){
    //Solution
    var myArr = [];
    for (var i = 0; i < one.length; i++){
            myArr.push(one[i], two[i], three[i]);
    }
    return myArr.join('');
}

console.log(tripleTrouble("aaa", "bbb", "ccc")); // return "abcabcabc"
console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc")); // return "abcabcabcabcabcabc"
console.log(tripleTrouble("burn", "reds", "roll")); // return "brrueordlnsl"
console.log(tripleTrouble("Sea","urn","pms")); // return "Supermans"
console.log(tripleTrouble("LLh","euo","xtr")); // return "LexLuthor"