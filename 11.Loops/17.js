

const shopping = [
    {
        item:"js course",
        price:345
    },
    {
        item:"python course",
        price:245
    },
    {
        item:"cpp course",
        price:445
    },
    {
        item:"java course",
        price:745
    },
]

const total = shopping.reduce((acc,item)=> acc+item.price,0)

console.log(total)