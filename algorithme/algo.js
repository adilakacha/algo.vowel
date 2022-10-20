const str = "lablebi";
const words = str.split("");

function getVowelCount() {
    return words.filter(word => word.match(/[aeiouy]/gi)).length;
}

console.log(getVowelCount());
console.log(`${str} ${str.length}`);
