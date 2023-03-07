const obj = {
    name: "Abhishek",
    age: 27,
    address: "Indore"
};

const jsonData = JSON.stringify(obj);
console.log(jsonData);
const objData = JSON.parse(jsonData);
console.log(objData);
