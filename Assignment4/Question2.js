// Write a program to reverse a string ("Hello John" => "olleH nhoJ")


function reverseString(str) {
    
    var splitString = str.split(""); 
    
 
    
    var reverseArray = splitString.reverse(); 

 
    
    var joinArray = reverseArray.join(""); 
    
    
    
    return joinArray; 
}
 
console.log(reverseString("Hello John"));