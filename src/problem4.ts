type circle = {
    shape : 'circle',
    radius : number
}
type rectangle = {
    shape : 'rectangle',
    width : number,
    height : number

}

type unionType = circle | rectangle;


const calculateShapeArea = (input : unionType) : number =>{
    if (input.shape === 'circle'){
        return parseFloat((Math.PI*input.radius**2).toFixed(2))
    }
    else{
        return (input.width * input.height)
    }
}


const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

console.log(circleArea)


