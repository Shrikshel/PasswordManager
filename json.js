var Person = {
  name: 'Shrikshel',
  age: 21
}

console.log(Person + "  " + typeof Person);

var JSObject = JSON.stringify(Person);

console.log(JSObject + "  " + typeof JSObject);

var JSONObject = JSON.parse(JSObject);

console.log(JSONObject.name + "  " + typeof JSONObject);

//Challange

var data = '{"name":"Hello"}';
var JSObject = JSON.parse(data);
console.log(JSObject.name + "  " + typeof JSObject);
