//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

var groupAnagrams = function(strs) {
  let grouped = {};
  for(let i = 0; i<strs.length; i++){
    let word = strs[i];
    let key = word.split("").sort().join("");  
    if(!grouped[key]){
       grouped[key] = [];
    }
     grouped[key].push(word);
    
  }
    return Object.values(grouped);
    
};
