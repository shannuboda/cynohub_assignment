let arr = [12,11,21,32,3,22,30,87,62]
arr = arr.filter((value)=>{
  return value!==Math.max(...arr)
})
console.log("Second Largest Number: ",Math.max(...arr))
