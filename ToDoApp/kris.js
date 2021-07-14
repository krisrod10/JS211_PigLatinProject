function pigLatin(str){
    let vowels ="AEIOUaeiou";
    let pigged = "";

    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[0])){
            pigged = str + "yay";
        }else if (vowels.includes(str[i])){
            let part1 = str.slice(0, i);
            let part2 = str.slice(i);
            pigged = part2 + part1 + "ay";
            break;
        }
    }
    return pigged;
}
console.log(pigLatin("create"));
console.log(pigLatin("car"));
console.log(pigLatin("dog"));
console.log(pigLatin("valley"));
console.log(pigLatin("emission"));
console.log(pigLatin("hello"));
console.log(pigLatin("rocket"));