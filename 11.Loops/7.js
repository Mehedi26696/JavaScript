//Map
//unique values
//for of in map

const map = new Map()

map.set('BD','Bangladesh')
map.set('USA',"United States of America")
map.set('Fr','France')

console.log(map)


for (const key of map) {
    console.log(key)
}


for (const [key,value] of map) {
    console.log(key, ':-',value)
}


