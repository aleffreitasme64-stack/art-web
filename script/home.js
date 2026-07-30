const header = document.getElementById('header')
const imgPrin = document.getElementById('imgPrin')
const titulo = document.getElementById('titulo')
const ano = document.getElementById('ano')
const texto = document.getElementById('texto')

const slider = [
    {img: 'img/anjo.jpg', titulo: 'Anjo', data: 'xx/xx/xxxx', texto:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, soluta dolorem? Architecto ducimus distinctio natus consequatur dolores, ipsum ratione porro a adipisci maiores laboriosam quia officiis et non magni sint?'},
    {img: 'img/oio.jpg', titulo: 'Olho', data: 'xx/xx/xxxx', texto:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit consectetur odio similique, quae aliquam qui accusamus maiores nulla quisquam nemo harum quod ut, sunt architecto dolorum rem tempora doloribus earum!'},
    {img: 'img/opera-em-chamas.jpg', titulo: 'Opera em chamas', data: 'xx/xx/xxxx', texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore deleniti officia adipisci, nihil quibusdam porro odit eaque temporibus sint illum minima autem. Omnis assumenda fugiat eaque eligendi magni esse.'},
    {img: 'img/peixes.jpg', titulo: 'Peixes', data: 'xx/xx/xxxx', texto:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti pariatur at! Sit quos nesciunt alias enim autem eveniet praesentium provident assumenda voluptate, inventore quibusdam facilis deleniti doloribus, nisi animi.'},
    {img: 'img/mar-A-noite.jpg', titulo: 'Mar noturno', data: 'xx/xx/xxxx', texto:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, reprehenderit doloremque qui enim similique at sint, saepe quas magnam excepturi eum ab aspernatur hic rerum ut dolorum minus! Expedita, cumque.'}
]

let index = 0

function creater(){
    header.src = slider[index].img
    imgPrin.src = slider[index].img
    titulo.textContent = slider[index].titulo
    ano.textContent = slider[index].data
    texto.textContent = slider[index].texto

    index++
    if(index >= slider.length){
        index = 0
    }
}
creater()
setInterval(creater, 5000)