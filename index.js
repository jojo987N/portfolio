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



    // var card = document.createElement('div')
    // card.classList.add('card', 'anim')
    // var imgMobile = document.createElement('img');
    // imgMobile.alt = "Snapshoot Portfolio"
    // imgMobile.classList.add("mobile")
    // imgMobile.src = "img/Snapshoot-Portfolio.png"
    // card.appendChild(imgMobile)
    // var snapshoot = document.createElement('snapshoot')
    // snapshoot.classList.add('snapshoot')
    // card.appendChild(snapshoot)
    // var imgDesktop = document.createElement('img');
    // imgDesktop.alt = "Snapshoot Portfolio"
    // imgDesktop.classList.add("desktop")
    // imgDesktop.src = "img/Snapshoot-Portfolio-desktop.png"
    // snapshoot.append(imgDesktop)
    // var leftBlock = document.createElement('div')
    // leftBlock.classList.add('left-block')
    // card.appendChild(leftBlock)
    // var h2 = document.createElement('h2')
    // leftBlock.appendChild(h2)

    const card = (image) => {
        return `<div class="card anim">
        <img src="img/Snapshoot-Portfolio.png" alt="Snapshoot Portfolio" class="mobile">
        <div class="snapshoot">
          <img src=${image} alt="Snapshoot Portfolio" class="desktop">
        </div>
        <div class="left-block">
          <h2>Tonic</h2>
          <ul class="frame2">
            <li>CANOPY</li>
            <li><img src="img/Counter.png" alt="Counter"></li>
            <li>Back End Dev</li>
            <li><img src="img/Counter.png" alt="Counter"></li>
            <li>2015</li>
          </ul>
          <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
          <ul class="tags">
            <li class="tag">HTML</li>
            <li class="tag">CSS</li>
            <li class="tag">JavaScript</li>
          </ul>
          <div class="action">
            <button>See project</button>
          </div>
          
        </div>
      </div>`
    
    }

    // works.innerHTML = data.map(work  => )
    works.innerHTML = card('img/Snapshoot-Portfolio-desktop.png')

    works.appendChild(card)

    const data = [
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
}
