const findAnagrams = (words) => {

  let anagrams = {};
  for(const index in words) {
    const word = words[index];
    const sorted = word.toLowerCase().replace(/\s/g, "").split("").sort().join("");

    if(anagrams[sorted] != null) {
      anagrams[sorted].push(word);
    } else {
      anagrams[sorted] = [word];
    }
  }
  return Object.keys(anagrams).map(function(key){
      return anagrams[key];
  });
};
