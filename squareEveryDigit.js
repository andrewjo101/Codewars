/** 
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/

function squareDigits(num){
    //turn num to a string
    //loop thru to square each number
    //store them in an array
    //turn them back into numbers and join the str together

    let str = num.toString();
    let array = [];
    for(let i = 0; i < str.length; i++){
        array[i] = str[i] * str[i]
    };
    return Number(array.join(''));
}