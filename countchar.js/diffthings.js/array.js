let b = {}
const is_array =(a)=>
{
if((typeof a) === (typeof b))
{
let i = 0
let count = 0 
for(let c in a)
{
if(c === i)
{
count++ 
}
i++

}
if(count === a.length)
{
console.log("it is an array")

}
else
console.log("it is not an array")


}
else
console.log("it is not an array")
}
is_array(ar)