const aside = document.getElementById('aside')

const texto = [
    {id:0, text: "1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aliquam eius exercitationem provident nostrum libero rerum maiores repudiandae, similique deleniti aliquid accusamus eveniet voluptate beatae quam, nam natus quibusdam harum?"},
    {id:1, text: "2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, maxime nobis delectus dolore sed itaque perspiciatis ullam molestiae voluptatibus, praesentium quasi nesciunt rerum eaque ad nihil ipsa nam ipsum sequi."},
    {id:2, text: "3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora modi eos quas quo, molestias consequatur cumque blanditiis similique hic explicabo laboriosam dignissimos repellendus recusandae enim fugit voluptates ab nam beatae."},
    {id:3, text: "4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus dolorem voluptate ratione, at laudantium laboriosam error inventore? Ratione, odit? Molestiae ducimus saepe ipsam facilis aliquam eligendi. Tempora corporis iure ipsam."},
    {id:4, text: "5. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, voluptate architecto excepturi nostrum cumque possimus facilis placeat dolor molestiae corrupti accusamus, illum, minus ducimus natus laudantium porro odio cupiditate repellendus!"}
]

let index = 0

function slideText(){
            
    aside.textContent = texto[index].text
    index++
    if(index >= texto.length){
        index = 0
    }
}
slideText()
setInterval(slideText, 5000)
    