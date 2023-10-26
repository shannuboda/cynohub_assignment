let arr = [1,2,3,4,5]
let n = 1 // No of rotations for left shift
while (n>0)
{
  let num = arr.pop()
  arr.unshift(num)
  n-=1
}
console.log(arr)

// [ 5, 1, 2, 3, 4 ]
