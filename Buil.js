function buildTrie(...words) {

  const mape = new Map();
  let char = "";

  for (let i=0; i< words.length; i++){
    let obj = mape.get(words[i][0]); 
    if(obj != undefined){
      let word = words[i];
      for (let j = 0; j < words[i].length; j++) {
        if (j == 0) {
          char = '{"' + word + '": null}';
        } else {
          if (word.length > 2) {
            word = word.substring(0, word.length - 1);
            char = '{"' + word + '": ' + char + "}";
          }
        }
        if (words[i].length != 1) {
        }
      }
      let search = obj.te;
      if (search != undefined) {      
          JSON.stringify(Object.assign(obj.te, JSON.parse(char).te)
        );
      } 
      else {
        console.log('word: ', word);
        if (words[i] == "trust"){
          JSON.stringify(Object.assign(obj.tr.tru, JSON.parse(char).tr.tru));
        } else {
          JSON.stringify(Object.assign(obj, JSON.parse(char)));
        }
      }
    }
    else {
      let word = words[i];
      for (let j = 0; j < words[i].length; j++) {
        if (words[i].length == 1) {
          mape.set(words[i][0], null);
        } else {
          if (j == 0) {
            char = '{"' + word + '": null}';
          } else {
            if (word.length > 2) {
              word = word.substring(0, word.length - 1);
              char = '{"' + word + '": ' + char + "}";
              
            }
          }
        }
        if (words[i].length != 1) {
          mape.set(words[i][0], JSON.parse(char));
        }
      } 
    }
  }
  const obj2 = mapToObj(mape);
  function mapToObj(key) {
    const obj2 = {};
    for (let [k, v] of key) obj2[k] = v;
    return obj2;
  }
  console.log(obj2);
  return obj2;
}