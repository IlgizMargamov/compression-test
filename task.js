import {encodeJmp} from "./jump.js";

test(generateArrayWithLimits(0,10, 100))
test(generateArrayWithLimits(10,100, 10))
test(generateArrayWithLimits(100,1000, 1))
test(generateArray(50))
test(generateArray(100))
test(generateArray(500))
test(generateArray(1000))
test(generateArray(1000))

function generateArrayWithLimits(lowerLimit, upperLimit, iterations){
    const result=[]
    for (let i = 0; i < iterations; i++) {
        for (let j = lowerLimit; j < upperLimit; j++) {
            result.push(j)
        }
    }
    return result
}

function generateArray(numberOfElements) {
    return  Array.from({length: numberOfElements}, () => {
        return Math.floor(Math.random() * 300);
    });
}

function test(arr){
    const sorted = arr.sort(function (a,b){
        return a-b
    })
    const encoded = encodeJmp(sorted, '#')
    console.log("Starting string: "+sorted.toString()+"\n"+"Encoded string: "+ encoded.toString("ascii")+"\nEncoded to original length: "+encoded.length/sorted.length)
}