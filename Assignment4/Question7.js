// Question 7;

// Question 7:

const arr = [1,2,3,4,5,6,7,1,2,3,4,5,6,7, 8];

const obj = {}
for (i in arr){
    if (obj[arr[i]] != undefined){
        obj[arr[i]].push(i);
    }else{
        obj[arr[i]] = [i];
    }
}

for (key in obj){
    if (obj[key].length == 1){
        delete obj[key];
    }
}
console.log(obj)

