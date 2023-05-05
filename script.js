let menuBtn = document.getElementById("menuBtn")
menuBtn.addEventListener("click", function (e) {
    document.querySelector('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('fa-xmark')
})



let typed = new Typed(".auto-input", {
    strings: ['Software Engineer!', 'Full Stack Web Developer!', 'Data Analyst!', 'Data Scientist!'],
    typeSpeed: 50,
    backSpeed: 80,
    backDelay: 2000,
    loop: true,
})


let navLinks = document.querySelectorAll('nav ul li a')
let sections = document.querySelectorAll('section')


window.addEventListener('scroll',function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section=>{
        if(scrollPos>section.offsetTop && scrollPos<(section.offsetTop+section.offsetHeight)){
            navLinks.forEach(link=>{
                link.classList.remove('active')
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    });
});


const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((el)=>observer.observe(el))


document.querySelector('.sub').addEventListener("click",function(){
    alert("Your Message has been sent")
    document.querySelectorAll('input').values = ''
})