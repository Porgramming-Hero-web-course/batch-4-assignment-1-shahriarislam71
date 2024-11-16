function validateKeys<T extends object>(obj: T, keys: (keyof T)[]) : boolean {
    for (let i in keys){
      if(!(Object.keys(obj).includes(String(keys[i])))){
        return false
      }
    }
    return true

  }
  

  const person = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(validateKeys(person, ["name", "age"])); 
  