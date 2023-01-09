/*Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.

Example
{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6
**/

function sumArray(array) {
    //edgecase 
    if (array == null || array.length <= 2) {
        return 0
      };
      // get the max and min of the array 
      let max = Math.max.apply(Math, array);
      let min = Math.min.apply(Math, array);
      let sum = 0;
      //find the sum 
      for (i = 0; i < array.length; i++) {
        sum += array[i];
       }
    // return the total without the max and min 
      return sum - max - min;
    
    
    }