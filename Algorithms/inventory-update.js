// Problem Link: https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update


function updateInventory(arr1, arr2) {
    let items = Object.fromEntries(arr1.map(a=>[a[1],a[0]]))
    for(let elem of arr2){
        if(elem[1] in items){
            items[elem[1]] += elem[0]
        }
        else{
            items[elem[1]] = elem[0]
        }
    }
    let arr = []
    for(let i in items){
        arr.push([items[i], i])
    }
    return arr.sort((a,b)=>a[1].localeCompare(b[1]))
}
