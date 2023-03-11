 let num = [65, 44, 12, 4]

for(let i=0; i < num.length; i++){
    console.log(num[i] * 10 ) 
}

num.forEach(function(num, i){
    console.log(num * 10)
})