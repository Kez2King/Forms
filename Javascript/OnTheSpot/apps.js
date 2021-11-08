/**
 * Create a function:
 *  1) takes base and height
 *  2) gives area
 */

// function myArea(base, height){
//     let area = 0.5 * base * height
//     return area
// }
// console.log(myArea(12,12))

//              Arrow function
// const myArea = (base, height) => (base * height) / 2
// console.log(myArea(12,4))

/**
 * Create a function that gives an array of numbers
 * Returns the value in the middle of the array
 * If no middle, gives last value
 */

// function middleNumber (array) {
//     // [1, 2, 3, 4, 5] 
//     // [1, 2, 3, 4]
//     if (array.length % 2 == 0) {
//         console.log(array[array.length - 1])
//     } else {
//         let middleIndex = (array.length / 2) - 0.5
//         console.log(array[middleIndex])
//     }
// }
// middleNumber([1, 2, 3, 4])
// middleNumber([1, 2, 3, 4, 5])

function middleNumber (array) {
    switch (array.length % 2) {
        case 0:
            console.log(array[array.length - 1])
            break;
    
        default:
            let middleIndex = (array.length / 2) - 0.5
            console.log(array[middleIndex])
            break;
    }
}
middleNumber([1, 2, 3, 4])
middleNumber([1, 2, 3, 4, 5])