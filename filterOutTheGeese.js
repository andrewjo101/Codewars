//Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
 // return an array containing all of the strings in the input array except those that match strings in geese

 function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    return birds.filter(x => !geese.includes(x))
    
};