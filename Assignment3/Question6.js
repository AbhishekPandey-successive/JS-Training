// Approach 1:

// function checkPrime(a)
// {
//     for(let i=2;i<=a-1;i++)
//     {
//         if(a%i==0)
//         {
//             return false;
//         }
//     }

//     return true;
// }


// for(let i=2;i<=50;i++)
// {
//     if(checkPrime(i))
//     {
//         console.log(i)
//     }
// }


// Approach 2:

function sieveOfEratosthenes(n) {
   
    const primes = new Array(n + 1).fill(true);
    primes[0] = primes[1] = false;

    for (p = 2; p * p <= n; p++) 
    {
        
        if (primes[p] == true) 
        {
          
            for (i = p * p; i <= n; i += p)
                primes[i] = false;
        }
    }



    for (i = 2; i <= n; i++)
    {
        if (primes[i] == true)
            console.log(i );
    }

}


let n=50;
sieveOfEratosthenes(n);




