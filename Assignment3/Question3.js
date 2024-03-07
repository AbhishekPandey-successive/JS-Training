// Question 3:


function printDiamond(rows) {
    if (rows % 2 === 0) {
        rows++; 
    }

    let midpoint = Math.floor(rows / 2);

    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < rows; j++) {
            if (Math.abs(midpoint - i) + Math.abs(midpoint - j) <= midpoint) {
                row += '* ';
            } else {
                row += '  ';
            }
        }
        console.log(row);
    }
}

printDiamond(5); 




























