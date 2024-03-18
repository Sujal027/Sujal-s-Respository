
function countChar(str ,ch)
{
    let c = 0
for(let i = 0 ; i < str.length ; i++)
{
    let ci= str[i]
    if(ch === ci)
    {
        c++
    }
}
return c
}
console.log(countChar("SuSjal", 'S'))