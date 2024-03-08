// Write a program to remove dupliacte elements from an array


let arr = ["scale", "happy", "strength",
            "peace", "happy", "happy"];
 
    function removeDuplicates(arr) {
        let unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
 
    arr=removeDuplicates(arr);

    console.log(arr)