//for in loop

let a=[1,93,4,6,8];

for (const key in a) {
    if (Object.hasOwnProperty.call(a, key)) { //This line is used to check if the key is present in the object or not
        const element = a[key];

        console.log(key,element);
        
    }

    // console.log(key,a[key]);
}