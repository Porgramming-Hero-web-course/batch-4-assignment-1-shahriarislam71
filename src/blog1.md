## what is the significance of union and intersection types in Typescript?
Ans. When we need the Flexibility in types, we will use the union. For example, In some situation, a variable could have either string, number or boolean. In sort of cases, we will use the union types. Let's see a example in code,

type unionType = string | number | boolean

const CheckTypes = (type : unionType) : void =>{
    if(typeof type === 'string'){
        return(`${type}`)
    }
    else if(typeof type === 'Number'){
        return (`${type}`)
    }
    else{
        return (`${type}`)
    }
}

console.log(CheckTypes('Hello World ! I am the learning the significance of the union types.'))


On the other hand, when we need combine multiple types, we will use intersection types. For example, if we need a user's information as well as the address of that user, we will use the intersection types. Let's see a code example,

type user = {
    FirstName : string,
    LastName : string
}

type address = {
    City : string,
    District : string,
    Street : string
}

type UsersInfo = user & address

const PrintDetails : UsersInfo = {
    FirstName : 'Shahriar Islam',
    LastName : "Rafi",
    City : 'Dhaka',
    District : "Gazipur",
    Street : "Tongi"
}
