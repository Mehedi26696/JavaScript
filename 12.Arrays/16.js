//filter

 

let a=[1,93,4,6,8];
const gereaterThanSeven=(e)=>{
    if(e>7){
        return true;
    }
    return false;
}
let b=a.filter(gereaterThanSeven)

console.log(b);