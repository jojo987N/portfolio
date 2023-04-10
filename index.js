window.onload = () => {
    var elements = document.getElementsByTagName("header");
    var wn = document.documentElement;
    var works = document.getElementById('works')
    var about = document.getElementById('about')
    var contact = document.getElementById('contact')
    var workLink = document.getElementById('works-link')
    var aboutLink = document.getElementById('about-link')
    var contactLink = document.getElementById('contact-link')
    var menu = document.getElementById('menu')
    var hamburger = document.getElementById('hamburger')
    var close = document.getElementById('close')
    
    window.onscroll = () => {

        if (wn.scrollTop > 50)
            elements[0].classList.add('header-nav')
        else
            elements[0].classList.remove('header-nav')

        if (works.offsetTop - wn.scrollTop > 0)
            workLink.classList.remove("active")

        else if (about.offsetTop - wn.scrollTop > 0) {
            aboutLink.classList.remove("active")
            contactLink.classList.remove("active")
            workLink.classList.add("active")
        }
        else if (contact.offsetTop - wn.scrollTop > 0) {
            workLink.classList.remove("active")
            contactLink.classList.remove("active")
            aboutLink.classList.add("active")
        }
        else {
            aboutLink.classList.remove("active")
            contactLink.classList.add("active")
        }
    }

    const scrollIntoView = (element) => {
        setTimeout(() => {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }, 100);
    }

    workLink.onclick = () => {
        menu.classList.add("menu-hide")
        scrollIntoView(works)
    }

    aboutLink.onclick = () => {
        menu.classList.add("menu-hide")
        scrollIntoView(about)
    }

    contactLink.onclick = () => {
        menu.classList.add("menu-hide")
        scrollIntoView(contact)

    }

    hamburger.onclick = () => {
        menu.classList.remove("menu-hide")
    }
    close.onclick = () => {
        menu.classList.add("menu-hide")
    }


    const card = (data) => {
        return `<div class="card anim">
        <img src="img/Snapshoot-Portfolio.png" alt="Snapshoot Portfolio" class="mobile">
        <div class="snapshoot">
          <img src=${data.image} alt="Snapshoot Portfolio" class="desktop">
        </div>
        <div class="left-block">
          <h2>${data.name}</h2>
          <ul class="frame2">
            <li>${data.job.company}</li>
            <li><img src="img/Counter.png" alt="Counter"></li>
            <li>${data.job.post}</li>
            <li><img src="img/Counter.png" alt="Counter"></li>
            <li>${data.job.year}</li>
          </ul>
          <p>${data.description}</p>
          <ul class="tags">
            <li class="tag">${data.technologies[0]}</li>
            <li class="tag">${data.technologies[1]}</li>
            <li class="tag">${data.technologies[2]}</li>
          </ul>
          <div class="action">
            <button>See project</button>
          </div>
          
        </div>
      </div>`
    
    }

     
    const datas = [
        {
            image: "img/Snapshoot-Portfolio-desktop.png",
            name: "Tonic",
            job : {
                company: "CANOPY",
                post : "Back End Dev",
                year: "2015"
            },
            description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
            technologies: ["HTML", "CSS", "JavaScript"]
        }
    ]
    works.innerHTML = datas.map(data => card(data)).join("")


    const contents = document.querySelectorAll('.anim')

    const options = {
        root: null,
        threshold: 0,
        rootMargin: "-150px"
    }
    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add('section-animation')
                observer.unobserve(entry.target)
                return;
            }
            entry.target.classList.remove('section-animation')

        })

    }, options);


    contents.forEach(content => {
        observer.observe(content)
    })

}
