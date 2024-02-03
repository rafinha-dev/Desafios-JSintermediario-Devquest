 let num = [65, 44, 12, 4]
 let heigth = num.length 
 let numbers = []
 let hold = 0 

// for(let i=0; i < num.length; i++){
//     console.log(num[i] * 10 ) 
// }
const show_result = document.querySelector('#result')
const btn = document.querySelector('.btn')

const calc = ()=>{
    num.forEach((element, i) => {
    let mult = element * 10
    numbers.push(mult)
    if(i == 3){
        console.log('feito')
    }
    
    })
}
btn.addEventListener('click', ()=>{
    if(hold == 0){   
        calc()
        show_result.innerHTML = `A multiplicação dos valores é [${numbers}]`
    }
    hold ++
})