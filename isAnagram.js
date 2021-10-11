var isAnagram = function(s, t) {
  if(s.length !== t.length){
      return false;
  }  
  let charCount = {};  
  for(let i = 0; i < s.length; i++){
    let sChar = s[i];
    charCount[sChar] = charCount[sChar] + 1 || 1; 
  }
  for(let i = 0; i< t.length; i++){
      let tChar = t[i];
    if(!charCount[tChar]){
      return false
    }else{
      charCount[tChar] --;  
    }
  }     
  return true;
    
};
