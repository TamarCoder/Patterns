// მეზობელი რიცხვების ჯამი

const array = [3, 3, 2, 5, 6, 1, 2, 4]; 
const n =  5;

function sliderWindows (array, n){
    let finalSum = 0; 

    for(let i = 0; i < array.length - n ; i ++){
        let currentSum =  0; 
        for(let j  =  i; j < n + i; j ++ ){
            currentSum += array[j]
        }
        if(currentSum  > finalSum){
            finalSum = currentSum
        }
        
    }
    return finalSum; 
}

console.log(sliderWindows(array, n));
