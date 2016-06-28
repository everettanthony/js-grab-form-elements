// get form element names and values and validate
document.getElementById('validate').addEventListener('click', function(evnt) {
  evnt.preventDefault();
  
  // create array of element key/values
  var elems = document.getElementById('picker').elements;
  var elemArray = {};
  
  for(var i = 0; i < elems.length; i++) {
    if (elems[i].type == 'text') elemArray[elems[i].id] = elems[i].value;
  }
  
  var str = '';
  Object.keys(elemArray).forEach(function (key) {
    var value = elemArray[key];
    str += key + '->' + value + '<br/>';
  });
  
  document.getElementById('result').innerHTML = str;
}, false);// get form element names and values and validate
document.getElementById('validate').addEventListener('click', function(evnt) {
  evnt.preventDefault();
  
  // create array of element key/values
  var elems = document.getElementById('picker').elements;
  var elemArray = {};
  
  for(var i = 0; i < elems.length; i++) {
    if (elems[i].type == 'text') elemArray[elems[i].id] = elems[i].value;
  }
  
  var str = '';
  Object.keys(elemArray).forEach(function (key) {
    var value = elemArray[key];
    str += key + '->' + value + '<br/>';
  });
  
  document.getElementById('result').innerHTML = str;
}, false);