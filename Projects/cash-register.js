// Problem Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register


function checkCashRegister(price, cash, cid) {
  let change = cash-price;
  let total = cid.reduce((sum, el)=>sum+el[1], 0)
  if(change === total) return {status:"CLOSED", change: cid}
  if(change>total) return {status: "INSUFFICIENT_FUNDS", change: []}
  let chng = cid.map(a=>[a[0], 0])
  let ref = {PENNY: 0.01, NICKEL:0.05, DIME: 0.1, QUARTER: 0.25, ONE: 1, FIVE: 5, TEN: 10, TWENTY: 20, HUNDRED: 100}
  for(let i= cid.length-1; i>=0; i--){
    let key = cid[i]
    while(ref[key[0]]<=change && key[1]>0){
      change -= ref[key[0]]
      key[1] -= ref[key[0]]
      change = change.toFixed(2)
      chng[i][1] += ref[key[0]]
    }
    total -= parseFloat(key[1])
    if(change==0 || change>total) break
  }
  if(change>total) return {status: "INSUFFICIENT_FUNDS", change: []}
  return {status: "OPEN", change: chng.filter(a=>a[1]!=0).sort((a, b)=>b[1]-a[1])}
}
