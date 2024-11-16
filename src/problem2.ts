const removeDuplicates = (input : number[]) : number[] =>{
    let newArray:number[] = []
    input.map(value=>{
        if (!(newArray.includes(value))){
            newArray.push(value)
        }
    })
    return newArray
}

console.log(removeDuplicates([1, 2, 2, 2, 4, 4, 5,5,5]))