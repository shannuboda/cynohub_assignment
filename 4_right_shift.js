let arr = [1,2,3,4,5]
let n = 2 // No of rotations for right shift
while (n>0)
{
  let num = arr.shift()
  arr.push(num)
  n-=1
}
console.log(arr)

// [3, 4, 5, 1, 2] 
