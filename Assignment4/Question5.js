// Question 5:

let str = 'hello john doe';
 
function camelCase(str) {

    let ans = str.toLowerCase();
 
    
    return ans.split(" ").reduce((s, c) => s
        + (c.charAt(0).toUpperCase() + c.slice(1)));
 
}
 

    console.log(camelCase(str));