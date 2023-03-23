//Такой же объекто только как ключ может быть любой тип данных

const map = new Map();
const objKey = {id: 5};
map.set(objKey, 'Sultan');

console.log(map.get(objKey));
