function plusMinus(arr) {
  // Write your code here
const counts = { "1": 0, "-1": 0, "0": 0 };
const ratioArr = [];
for (let i = 0; i < arr.length; i++) {
  counts[Math.sign(arr[i])]++;
}
// javascript object sorts its key. if it is number based, it assumes it as an index and arranges it
const orders = ["1", "-1", "0"];
for (const values of orders) {
  const calc = counts[values] / arr.length;

  const result = calc.toFixed(6);
  ratioArr.push(result);
}

console.log(ratioArr.join('\n'));

}

// time complexity of O(n)