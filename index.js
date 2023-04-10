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
}
