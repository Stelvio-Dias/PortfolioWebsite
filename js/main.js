const str = [
	"Developer",
	"Blogger",
	"Designer",
	"Freelancer",
	"YouTuber",
    "Student"
]
var typed = new Typed(".animate", {
    strings: str,
    typeSpeed: 45,
    backSpeed: 45,
    backDelay: 500,
    loop: true
})
var typed = new Typed(".animate2", {
    strings: str,
    typeSpeed: 45,
    backSpeed: 45,
    backDelay: 500,
    loop: true
})
$(document).ready(function(){
    
    $(window).scroll(function(){
        $("nav").toggleClass('scrolled', $(this).scrollTop() > 100);
    })
    const responsive = {
        0: {
            items: 1
        },
        720: {
            items: 3
        }
    }
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
		autoplayTimeout: 2000,
        dots: true,
        responsive: responsive
    })
})
$(".icon-menu").click(function(){
    $("nav").toggleClass('open')
})
let btnSubmit = document.querySelector('#inputSub')
let nome = document.querySelector('#inputNome').value
let email = document.querySelector('#inputEmail').value
let assunto = document.querySelector('#inputAssunto').value
let inputTexto = document.querySelector('#inputTexto')

//Validação do formulário
btnSubmit.addEventListener('click', ()=> {
    if(nome && email && assunto && inputTexto) {
        alert('Campo Válido')
    } else {
        alert('Campo Inválido')
    }
})

