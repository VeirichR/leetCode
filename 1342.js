/**
 * @param {number} num
 * @return {number}
 * Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, 
you have to subtract 1 from it.
 * 
 */
 var numberOfSteps = function(num) {
    let cont = 0
    while(true){
        if((num % 2) != 0){
            num -= 1;
            cont++;
        }else{
            if(num > 0){
                num /= 2;
                cont++;
            }
        }
        if(num == 0){
            break;
        }
    }
    return cont;
};


// console.log(numberOfSteps(14))
// console.log(numberOfSteps(8))
// console.log(numberOfSteps(123))
console.log(numberOfSteps(0))

/**
 * let temp;
    let cont = 0;
    while(temp != 0){
        if((num % 2) != 0){
            num -= 1;
            cont++;
        }
        num /= 2;
        temp = num;
        cont ++;
        console.log(temp);
 */