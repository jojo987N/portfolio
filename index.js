window.onload = () => {
    var header = document.querySelector("header");
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
    var modalDesktop = document.querySelector('.modal-desktop')
    var headline = document.querySelector(".headline")
    var closeModal = document.querySelector(".close-modal")

    window.onscroll = () => {

        if (wn.scrollTop > 50)
            header.classList.add('header-nav')
        else
            header.classList.remove('header-nav')

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

    const TEXT_LENGHT = 84

    // const cardDetail = (data) => {
    //     return `<div class="card anim">
    //     <img src=${data.image.mobile} alt="Snapshoot Portfolio" class="mobile">
    //     <div class="snapshoot">
    //       <img src=${data.image.desktop} alt="Snapshoot Portfolio" class="desktop">
    //     </div>
    //     <div class="left-block">
    //       <h2>${data.name}</h2>
    //       <ul class="frame2">
    //         <li>${data.job.company}</li>
    //         <li><img src="img/Counter.png" alt="Counter"></li>
    //         <li>${data.job.post}</li>
    //         <li><img src="img/Counter.png" alt="Counter"></li>
    //         <li>${data.job.year}</li>
    //       </ul>
    //       <p>${data.description}</p>
    //       <ul class="tags">
    //         <li class="tag">${data.technologies[0]}</li>
    //         <li class="tag">${data.technologies[1]}</li>
    //         <li class="tag">${data.technologies[2]}</li>
    //       </ul>
    //       <div class="action">
    //       ${data.description.length <= TEXT_LENGHT ? "<button>See project</button>" : "<button>See live</button><button>See source</button>"}
    //         </div>
          
    //     </div>
    //   </div>`

    // }


    const card = (data) => {
        return `<div class="card anim" id=${data.id}>
        <img src=${data.image.mobile} alt="Snapshoot Portfolio" class="mobile">
        <div class="snapshoot">
          <img src=${data.image.desktop} alt="Snapshoot Portfolio" class="desktop">
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
         <button class="see-project">See project</button>
            </div>
          
        </div>
      </div>`

    }

    const cardModal = (data) => {
        return ` 
        <h2>${data.name}</h2>
        <img src=${data.image.modal} alt="Snapshoot Portfolio" class="modal-desktop-img">
         
         
         
        
      `
    }

    // <h2>${data.name}</h2>
    // <ul class="">
    //   <li>${data.job.company}</li>
    //   <li><img src="img/Counter.png" alt="Counter"></li>
    //   <li>${data.job.post}</li>
    //   <li><img src="img/Counter.png" alt="Counter"></li>
    //   <li>${data.job.year}</li>
    // </ul>
    // <p>${data.description}</p>
    // <ul class="">
    //   <li class="tag">${data.technologies[0]}</li>
    //   <li class="tag">${data.technologies[1]}</li>
    //   <li class="tag">${data.technologies[2]}</li>
    // </ul>
    // <div class="">
    // ${data.description.length <= TEXT_LENGHT ? "<button>See project</button>" : "<button>See live</button><button>See source</button>"}
    //   </div>

    const datas = [
        {
            id: 0,
            image: {
                desktop: "img/Snapshoot-Portfolio-desktop2.svg",
                mobile: "img/Snapshoot-Portfolio2.png",
            },
            name: "Tonic",
            job: {
                company: "CANOPY",
                post: "Back End Dev",
                year: "2015"
            },
            description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
            technologies: ["HTML", "CSS", "JavaScript"],
            live: "https://jojo987n.github.io/portfolio/",
            source: "https://github.com/jojo987N/portfolio",
        },
        {
            id: 1,
            image: {
                desktop: "img/Snapshoot-Portfolio-desktop1.svg",
                mobile: "img/Snapshoot-Portfolio1.png",
            },
            name: "Multi-Post Stories",
            job: {
                company: "CANOPY",
                post: "Back End Dev",
                year: "2015"
            },
            description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
            technologies: ["HTML", "CSS", "JavaScript"],
            live: "https://jojo987n.github.io/portfolio/",
            source: "https://github.com/jojo987N/portfolio",
        },
        {
            id: 2,
            image: {
                desktop: "img/Snapshoot-Portfolio-desktop.svg",
                mobile: "img/Snapshoot-Portfolio.png",
            },
            name: "Facebook 360",
            job: {
                company: "CANOPY",
                post: "Back End Dev",
                year: "2015"
            },
            description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
            technologies: ["HTML", "CSS", "JavaScript"],
            live: "https://jojo987n.github.io/portfolio/",
            source: "https://github.com/jojo987N/portfolio",
        },
        {
            id: 3,
            image: {
                desktop: "img/Snapshoot-Portfolio-desktop3.svg",
                mobile: "img/Snapshoot-Portfolio3.png",
            },
            name: "Uber Navigation",
            job: {
                company: "CANOPY",
                post: "Back End Dev",
                year: "2015"
            },
            description: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
            technologies: ["HTML", "CSS", "JavaScript"],
            live: "https://jojo987n.github.io/portfolio/",
            source: "https://github.com/jojo987N/portfolio",
        }
    ]

    // document.querySelector('.modal-desktop').classList.remove('hide')

    works.innerHTML = datas.map((data, i) => card(data)).join("")
    
    document.querySelectorAll('.see-project').forEach((button, i) =>{
        button.onclick = () => {
            modalDesktop.classList.remove('hide')
            document.body.classList.add('no-scroll')
            window.scrollTo(0, 0);
            header.classList.remove('header-nav')
            header.classList.add("blur")
            headline.classList.add("blur-bg")
            document.querySelector('.title-modal').innerHTML = datas[i].name
            modalDesktop.id = i
            document.querySelector('.image-modal').src = datas[i].image.desktop
             
        }
        closeModal.onclick = () => {
            modalDesktop.classList.add('hide')
            document.querySelectorAll('.card')[i].scrollIntoView()
            header.classList.remove("blur")
            document.body.classList.remove('no-scroll')
            headline.classList.remove("blur-bg");
            let card = [...document.querySelectorAll('.card')].find(card => card.id === modalDesktop.id);
            const y = card.getBoundingClientRect().top + window.pageYOffset - 150;
            window.scrollTo({top: y, behavior: 'auto'});
             

        }
    })

     
    
    document.querySelectorAll('.card').forEach((card, i) => {

        i % 2 !== 0 && card.classList.add('card-reverse')

        // console.log(card.children[2].children[4].children)

        // console.log(card.childNodes[5].childNodes[9].childNodes[1])

        // console.log(card.childNodes[5])

        // card.childNodes[5].classList.add("large-width")

        //  card.childNodes[5].childNodes[9].childNodes[1].onclick = () => {

             

            //  document.body.innerHTML = cardDetail(datas[i])
            // works.innerHTML = cardDetail(datas[i])
            // var wrapper= document.createElement('div');
            // wrapper.innerHTML = cardModal(datas[i])
            // var _cardDetail = wrapper.firstChild
            // _cardDetail.classList.add("modal-desktop")
            // wrapper.classList.add("modal-desktop")
            // document.body.appendChild(wrapper)
            // works.appendChild(wrapper)
            // wrapper.firstChild.classList.add('card-modal')
            //  document.body.classList.add('no-scroll')
            //  elements[0].classList.remove('header-nav')
            // card.childNodes[5].classList.add("large-width")

        //  }

         
    })


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
