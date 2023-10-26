let arr = [12,11,21,32,3,22,30,87,62]
arr = arr.filter((value)=>{
  return value!==Math.min(...arr)
})
console.log("Second Smallest Number: ",Math.min(...arr))
// Second Smallest Number:  11
