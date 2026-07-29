// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// Reveal Animation

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", revealSections);

function revealSections(){

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if(top < windowHeight - 120){

            section.classList.add("active");

        }

    });

}

revealSections();

// Progress Bar

window.addEventListener("scroll", ()=>{

    const scrollTop = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const progress = (scrollTop / height) * 100;

    document.getElementById("progress-bar").style.width = progress + "%";

});

// Back to Top

const topBtn = document.getElementById("backToTop");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 500){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
