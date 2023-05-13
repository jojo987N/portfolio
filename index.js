window.onload = () => {
  const header = document.querySelector('header');
  const wn = document.documentElement;
  const works = document.getElementById('works');
  const about = document.getElementById('about');
  const contact = document.getElementById('contact');
  const workLink = document.getElementById('works-link');
  const aboutLink = document.getElementById('about-link');
  const contactLink = document.getElementById('contact-link');
  const menu = document.getElementById('menu');
  const hamburger = document.getElementById('hamburger');
  const close = document.getElementById('close');
  const modalDesktop = document.querySelector('.modal-desktop');
  const headline = document.querySelector('.headline');
  const closeModal = document.querySelector('.close-modal');

  const options = {
    root: null,
    threshold: 0,
    rootMargin: '-150px',
  };

  const sections = document.querySelectorAll('section');

  const observerSection = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.className === 'Works') {
          aboutLink.classList.remove('active');
          contactLink.classList.remove('active');
          workLink.classList.add('active');
        } else if (entry.target.className === 'about-myself') {
          workLink.classList.remove('active');
          contactLink.classList.remove('active');
          aboutLink.classList.add('active');
        } else if (entry.target.className === 'contact') {
          aboutLink.classList.remove('active');
          contactLink.classList.add('active');
        } else {
          workLink.classList.remove('active');
        }
      }
    });
  }, options);

  sections.forEach((section) => {
    observerSection.observe(section);
  });

  window.onscroll = () => {
    if (wn.scrollTop > 50) header.classList.add('header-nav');
    else header.classList.remove('header-nav');

    // if (works.offsetTop - wn.scrollTop > 0) workLink.classList.remove('active');

    // else if (about.offsetTop - wn.scrollTop > 0) {
    //   aboutLink.classList.remove('active');
    //   contactLink.classList.remove('active');
    //   workLink.classList.add('active');
    // } else if (contact.offsetTop - wn.scrollTop > 0) {
    // workLink.classList.remove('active');
    // contactLink.classList.remove('active');
    // aboutLink.classList.add('active');
    // } else {
    // aboutLink.classList.remove('active');
    // contactLink.classList.add('active');
    // }
  };

  const scrollIntoView = (element) => {
    setTimeout(() => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  const scrollIntoView1 = (element, padding) => {
    const y = element.getBoundingClientRect().top + window.pageYOffset - padding;
    // window.scrollTo({ top: y, behavior: 'smooth' });
    $('html, body').animate({ scrollTop: y }, 300);
  };

  workLink.onclick = () => {
    menu.classList.add('menu-hide');
    if (window.screen.width <= 768) scrollIntoView(works);
    else {
      scrollIntoView1(works, 150);
      // scrollIntoView(works);
      // works.style.paddingTop = '150px'
      // works.classList.add("padding-scroll")
      // setTimeout(() => works.classList.add("padding-scroll"), 0);
    }
  };

  aboutLink.onclick = () => {
    menu.classList.add('menu-hide');
    // scrollIntoView(about);
    // $('html, body').animate({ scrollTop: '350px' }, 300);
    // $('html, body').animate({ scrollTop: '350px' }, 300);
    scrollIntoView1(about, 0);
  };

  contactLink.onclick = () => {
    menu.classList.add('menu-hide');
    // scrollIntoView(contact);
    if (window.screen.width <= 768) scrollIntoView(contact);
    else scrollIntoView1(contact, 20);
  };

  hamburger.onclick = () => {
    menu.classList.remove('menu-hide');
  };
  close.onclick = () => {
    menu.classList.add('menu-hide');
  };

  const card = (data) => `<div class="card anim" id=${data.id}>
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
      </div>`;

  const datas = [
    {
      id: 0,
      image: {
        // desktop: 'img/Snapshoot-Portfolio-desktop2.svg',
        desktop: 'img/First-capstone-round1.png',
        // mobile: 'img/Snapshoot-Portfolio2.png',
        mobile: 'img/First-capstone-round1.png',
      },
      name: 'Conference website',
      job: {
        company: 'Microverse',
        post: 'Full Stack Dev',
        year: '2023',
      },
      description: 'An online website follow some design guidelines, medium-fidelity wireframes to create a UI.',
      fullDescription: `<ul>
        <li>Understand how to use medium-fidelity wireframes to create a UI.</li>
        <li>Use Flexbox to place elements in the page.</li>
        <li>UIs adaptable to different screen sizes using media queries.</li>
        <li>Use semantic HTML tags. Use CSS box model.</li>
        <li>Use images and backgrounds to enhance the look of a website.</li>
        <li>Use JavaScript to manipulate DOM elements.</li>
        </ul>`,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://jojo987n.github.io/first-capstone/',
      source: 'https://github.com/jojo987N/first-capstone',
    },
    {
      id: 1,
      image: {
        desktop: 'img/Snapshoot-Portfolio-desktop1.svg',
        mobile: 'img/Snapshoot-Portfolio1.png',
      },
      name: 'Multi-Post Stories',
      job: {
        company: 'CANOPY',
        post: 'Back End Dev',
        year: '2015',
      },
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://jojo987n.github.io/portfolio/',
      source: 'https://github.com/jojo987N/portfolio',
    },
    {
      id: 2,
      image: {
        desktop: 'img/Snapshoot-Portfolio-desktop.svg',
        mobile: 'img/Snapshoot-Portfolio.png',
      },
      name: 'Facebook 360',
      job: {
        company: 'CANOPY',
        post: 'Back End Dev',
        year: '2015',
      },
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://jojo987n.github.io/portfolio/',
      source: 'https://github.com/jojo987N/portfolio',
    },
    {
      id: 3,
      image: {
        desktop: 'img/Snapshoot-Portfolio-desktop3.svg',
        mobile: 'img/Snapshoot-Portfolio3.png',
      },
      name: 'Uber Navigation',
      job: {
        company: 'CANOPY',
        post: 'Back End Dev',
        year: '2015',
      },
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://jojo987n.github.io/portfolio/',
      source: 'https://github.com/jojo987N/portfolio',
    },
  ];

  works.innerHTML = datas.map((data) => card(data)).join('');

  document.querySelectorAll('.see-project').forEach((button, i) => {
    button.onclick = () => {
      modalDesktop.classList.remove('hide');

      document.querySelector('.modal .description').innerHTML = datas[i].fullDescription;

      document.body.classList.add('no-scroll');
      window.scrollTo(0, 0);
      header.classList.add('blur');
      headline.classList.add('blur-bg');
      document.querySelector('.title-modal').innerHTML = datas[i].name;
      modalDesktop.id = i;
      if (window.screen.width > 768) document.querySelector('.image-modal').src = datas[i].image.desktop;
      else document.querySelector('.image-modal').src = datas[i].image.mobile;
    };
    closeModal.onclick = () => {
      modalDesktop.classList.add('hide');
      document.querySelectorAll('.card')[i].scrollIntoView();
      header.classList.remove('blur');
      document.body.classList.remove('no-scroll');
      headline.classList.remove('blur-bg');
      const card = [...document.querySelectorAll('.card')].find((card) => card.id === modalDesktop.id);
      const y = card.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({ top: y, behavior: 'auto' });
    };
  });

  document.querySelectorAll('.see-live').forEach((button, i) => {
    button.onclick = () => {
      window.open(datas[i].live, '_blank');
    };
  });

  document.querySelectorAll('.see-source').forEach((button, i) => {
    button.onclick = () => {
      window.open(datas[i].source, '_blank');
    };
  });

  document.querySelectorAll('.card').forEach((card, i) => i % 2 !== 0 && card.classList.add('card-reverse'));

  const contents = document.querySelectorAll('.anim');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-animation');
        observer.unobserve(entry.target);
        return;
      }
      entry.target.classList.remove('section-animation');
    });
  }, options);

  contents.forEach((content) => {
    observer.observe(content);
  });

  const email = document.querySelector('.email');
  const emailError = document.querySelector('.email-error');
  const error = 'Email has to be in lower case';
  const name = document.querySelector('.name');

  const shaking = (element) => {
    element.classList.remove('shaking');
    setTimeout(() => element.classList.add('shaking'), 0);
  };

  email.onkeyup = (e) => {
    emailError.textContent = e.target.value;
    const val = e.target.value.replace(/[^a-z]/gi, '');
    const last = val.slice(-1);

    if (last.toUpperCase() === last && last !== '') {
      emailError.textContent = error;

      shaking(emailError);
    } else if (val.match(/[A-Z]/)) {
      emailError.textContent = error;
      shaking(emailError);
    } else emailError.textContent = '';
  };

  const reset = document.querySelector('.reset');
  const button = document.getElementById('button');

  if (localStorage.getItem('formInputs')) {
    button.classList.add('button-reset');
    reset.classList.remove('reset');
    const formInputs = JSON.parse(localStorage.getItem('formInputs'));
    email.value = formInputs.email;
    name.value = formInputs.name;
  } else {
    reset.classList.add('reset');
  }

  reset.onclick = () => {
    localStorage.removeItem('formInputs');
    name.value = '';
    email.value = '';
    button.classList.remove('button-reset');
    reset.classList.add('reset');
  };

  const form = document.querySelector('form');

  form.onsubmit = () => {
    if (emailError.textContent) {
      emailError.textContent = error;
      shaking(emailError);
      return false;
    }
    localStorage.setItem('formInputs', JSON.stringify({
      name: name.value,
      email: email.value,
    }));
    return true;
  };
};
