const cartao = document.querySelectorAll('.cartao')
let index = 0

function slide(next){
    cartao[index].classList.remove('active')

    index = (index + next + cartao.length) % cartao.length

    cartao[index].classList.add('active')
    console.log(index)
}