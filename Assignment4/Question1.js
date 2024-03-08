// Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")


function removeDuplicates( s , n) {
    var exists = new Map();

    var st = "";
    for (var i = 0; i < n; i++) {
        if (!exists.has(s[i])) {
            st += s[i];
            exists.set(s[i], 1);
        }
    }
    return st;
}


 
    var s = "HelloYellow";
    var n = s.length;
    console.log(removeDuplicates(s, n));
