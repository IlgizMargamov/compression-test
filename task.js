import {encodeJmp} from "./jump.js";

const testResults=[]
testResults.push(test(generateArrayWithLimits(0,10, 100)))
testResults.push(test(generateArrayWithLimits(10,100, 10)))
testResults.push(test(generateArrayWithLimits(100,1000, 1)))
testResults.push(test(generateArray(50)))
testResults.push(test(generateArray(100)))
testResults.push(test(generateArray(500)))
testResults.push(test(generateArray(1000)))
testResults.push(test(generateArray(1000)))
console.log("\nMean coefficient after encoding: "+testResults.reduce((partialSum, a) => partialSum + a, 0)/testResults.length)

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
    return Array.from({length: numberOfElements}, () => {
        return Math.floor(Math.random() * 300);
    });
}

function test(arr){
    const sorted = arr.sort(function (a,b){
        return a-b
    })
    const encoded = encodeJmp(sorted, '#')
    let coefficient = encoded.length/sorted.length;
    console.log("Starting string: "+sorted.toString()+"\n"+"Encoded string: "+ encoded.toString("ascii")+"\nEncoded to original length: "+coefficient)
    return coefficient
}