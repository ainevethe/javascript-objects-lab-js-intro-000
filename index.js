var recipes = {
  flour: "2 cups",
  eggs: "1 beaten",
  sugar: "1 cup"
};

function updateObjectwithKeyandValue(object, key, value){
  Object.assign({}, {[key]:value});
  return object;
}
