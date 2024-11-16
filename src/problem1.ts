const sumArray  = (input : number[]) : number => {
    let total:number = 0
    input.map(value => {
        total = total + value
    })
    return total
}
    

console.log(sumArray([1, 2, 3, 4, 5]))