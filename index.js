var recipes = {
  flour: "2 cups",
  eggs: "1 beaten",
  sugar: "1 cup"
};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, {[key]:value});
}
