const countWordOccurrences = (input1 : string, input2 : string) : number =>{
    const input1Array : string[] = input1.toLowerCase().split(' ')
    const input2String : string = input2.toLowerCase()
    let wordCounter : number = 0
    input1Array.map(value => {
        if(value === input2String){
            wordCounter +=1
        }
    }) 
    return wordCounter
}

console.log(countWordOccurrences("I love typescript", "typescript"))