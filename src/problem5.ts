const getProperty = <input, K extends keyof input>(obj: input, key: K): input[K] => {
   return obj[key]
}


const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "name")); 
