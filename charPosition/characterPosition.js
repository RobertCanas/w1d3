function countPosition(str) {
  var obj = {};

  for (var p = 0; p < str.length; p++) {
    var letter = str.charAt(p);
    if (letter === " ") {
      continue;
    }
    if (!obj[letter]) {
      obj[letter] = [];
    }
    obj[letter].push(p);
  }
  return obj;
}

console.log(countPosition("lighthouse in the house"));