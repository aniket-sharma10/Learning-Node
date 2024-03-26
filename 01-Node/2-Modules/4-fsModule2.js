// const fs = require('fs')
// fs.readFile

// We can also do that using destructuring
const { readFile, writeFile} = require('fs')

// read file async
// readFile('./Content/first.txt', 'utf-8', (err, data) =>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data);
// })

// write file async
readFile('./Content/first.txt', 'utf-8', (err, data) =>{
    if(err){
        console.log(err);
        return;
    }
    const first = data;

    readFile('./Content/second.txt', 'utf-8', (err, data) => {
        if(err){
            console.log(err)
            return;
        }
        const second = data;
        
        writeFile('./Content/result-async.txt', `Result async\n${first}\n${second}`, {flag: 'a'}, (err, data) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('Result async created')
        })
        
    })
})