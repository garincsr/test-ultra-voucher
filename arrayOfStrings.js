// Nama: Garin Caesar Syanugiri
// BATCH 19 Enigma Jakarta

// ---------------------------------------------------- Logic Test

function sortWord(word) {
  let chars = word.split("");
  for (let i = 0; i < chars.length - 1; i++) {
    for (let j = i + 1; j < chars.length; j++) {
      if (chars[i] > chars[j]) {
        let temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
      }
    }
  }
  return chars.join("");
}

function groupAnagrams(words) {
  let anagramGroups = {};

  for (let i = 0; i < words.length; i++) {
    let sortedWord = sortWord(words[i]);

    if (!anagramGroups[sortedWord]) {
      anagramGroups[sortedWord] = [];
    }
    anagramGroups[sortedWord].push(words[i]);
  }

  let result = [];
  for (let key in anagramGroups) {
    result.push(anagramGroups[key]);
  }

  return result;
}

const words = ["cook", "save", "taste", "aves", "vase", "state", "map"];
console.log(groupAnagrams(words));
