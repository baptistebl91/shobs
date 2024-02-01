
const questions = document.querySelectorAll('.questionF-reponseF');
questions.forEach(question => {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener("click", () => {
        questions.forEach(item => {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});

const btn = document.querySelector('.btn-arrow');
btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})

const observer = new IntersectionObserver ((entries) => { 
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) { 
        entry.target.classList.add('show');
    } else {
    entry.target.classList.remove('show');
    }
    });
    });

const hiddenElements = document.querySelectorAll('.premieres-presentations'); 
hiddenElements.forEach((el) => observer.observe(el));

const txtAnim = document.querySelector('h1');
new Typewriter (txtAnim, {  deleteSpeed: 20 })

.changeDelay(30)
.typeString('Vous avez une question ? ')
.changeDelay(30)
.pauseFor(300)
.typeString('<strong>Un problème ?</strong>')
.pause(1000)
.changeDelay(30)
.deleteChars (14)
.typeString('<span style="color: #425087;"> Une suggestion ?</span>')
.pauseFor(1000)
.changeDelay(30)
.deleteChars(16)
.typeString('<span style="color: #FFFFFF;">  Contactez-nous </span> !')
.start()

