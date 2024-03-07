function checkPrime(a)
{
    for(let i=2;i<=a-1;i++)
    {
        if(a%i==0)
        {
            return false;
        }
    }

    return true;
}


for(let i=2;i<=50;i++)
{
    if(checkPrime(i))
    {
        console.log(i)
    }
}




