import smtpPassword from '../../smtpPassword.js'
import projects from '../data/projects.js'
// DECLARATIONS DES VARIABLES
// SCROLL TO
const links = document.querySelectorAll('.link h3')

const linkLogo = document.querySelector('.logo')
let VH_UNIT = window.innerHeight / 100 // response in pixels
let lastTopPosition = window.scrollY
let navbarHeight = VH_UNIT * 8
// GLOBAL SCROLL
const scrollable = document.documentElement.scrollHeight - window.innerHeight;
let sectionProjectsHeight = document.querySelector('.section.projects').getBoundingClientRect().height
let sectionSkillsHeight = document.querySelector('.section.skills').getBoundingClientRect().height
let sectionContactHeight = document.querySelector('.section.contact').getBoundingClientRect().height
// NAVBAR
let logoImageDark = document.querySelector('#logo-dark')
let logoImageLight = document.querySelector('#logo-light')
let navbar = document.querySelector('.navbar')
// SECTION HOME 
let img = document.querySelector('.image')   
let imageEffect = false
let seconds = 0
let headerName = document.querySelectorAll('.home-content h4 span')
let headerTitle = document.querySelectorAll('.home-content h1 span')
// SECTION PROJECTS 
let projectsCardContainer = document.querySelector('.body-projects')
// FIN DECLARATIONS DES VARIABLES
let linkHouse = document.querySelector('.link-house')
// INITIALIZATION 
clearInterval(startTimer());
animateHomeImage()
scrollToListener()
globalScrollListener()
displayCards()
listenCards()

// NAVBAR HAMBURGER
let btnHamburger = document.querySelector('.hamburger-menu')
let hamburgerMenu = document.querySelector('.hamburger-container')
btnHamburger.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active')
})


// LOL HOUSE
let houseLOL = document.querySelector('.link-house-container')
let houseLOLunderline = document.querySelector('.link-house-container span')
houseLOL.addEventListener('mouseover', () => {


  houseLOLunderline.style.backgroundColor = "var(--background-color)"
})
houseLOL.addEventListener('mouseout', () => {

  houseLOLunderline.style.backgroundColor = "var(--lightGrey-color)"
})
// LOL HC LOGO
/*
let logooo = document.querySelector('.logo')
let logoHC = document.querySelector('.logo img')
logooo.addEventListener('click', (e) => {

    if(logoHC.classList.contains('flip-forward')){
      logoHC.classList.remove('flip-forward');
      logoHC.classList.add('flip-backward');
    }else{
      logoHC.classList.add('flip-forward');
      logoHC.classList.remove('flip-backward');
    }  
})
*/

// ARROW ANIM
let arrowElem = document.querySelector('.arrow-bottom');
clearInterval(animeArrow())
let arrowSeconds = 0
let arrowCurrentDirection = 'bottom'


function animeArrow() {
  setInterval(() => {
    arrowSeconds += 1
    if (arrowSeconds === 2) {
      arrowSeconds = 0
      arrowElem.style.transform = 'translateY(0vh)'
    } else {
      arrowElem.style.transform = 'translateY(10vh)'
    }

  },1000)
}





// TEST ZONE 
let cardsElementsArray = document.querySelectorAll('.card-project')
let buttonsFilterArray = document.querySelectorAll('.menu-projects h3')

buttonsFilterArray.forEach((button) => {
  button.addEventListener('click', (event) => {
    // hover effect
    buttonsFilterArray.forEach((button) => { 
      button.classList.remove('active')
    })
    button.classList.toggle('active')



    // gestion filter
    if (event.target.id !== 'All') {
      cardsElementsArray.forEach((card) => {
        if (card.id === event.target.id) {
          card.style.display = "flex"
        } else {
          card.style.display = "none"
        }
      })
    } else {
      cardsElementsArray.forEach((card) => {
        card.style.display = "flex"
      })
    }
    
  })
})

// TEST22
let form = document.querySelector('.contact-form form')



form.addEventListener('submit', (e) => sendMessage(e))

function sendMessage(e) {
  e.preventDefault()
  let formName = document.querySelector('#input-name')
  let formEmail = document.querySelector('#input-email')
  let formTextarea = document.querySelector('#input-textarea')
  let formCheckbox = document.querySelector('#checkbox')
  let testEmail = /^[a-z\d.]+@[a-z]+\.[a-z]+.?[a-z]+?$/.test(formEmail.value)
  let alertText = document.querySelector('.form-alert p')
  let alertElem = document.querySelector('.form-alert')
  let alertSuccess = document.querySelector('.hidden-success-alert')
  let formTop = document.querySelector('.form-top')
  let formBot = document.querySelector('.form-bottom')
  let conditionsToSendEmail = true
  let messageToDisplayONE = 0
  let messageToDisplayTWO = 0

  if (formName.value.length === 0) {
    conditionsToSendEmail = false
    messageToDisplayONE = 1
  }
  if (formEmail.value.length === 0) {
    conditionsToSendEmail = false
    messageToDisplayONE = 1
  }
  if (testEmail === false) {
    conditionsToSendEmail = false
    messageToDisplayTWO = 1
  }
  if (formTextarea.value.length === 0) {
    conditionsToSendEmail = false
    messageToDisplayONE = 1
  }
  if (formCheckbox.checked === false) {
    conditionsToSendEmail = false
    messageToDisplayONE = 1
  }
  let messageError = 0
  if (messageToDisplayONE === 1) {
    messageError = 1
  }
  if (messageToDisplayTWO === 1) {
    messageError = 2
  }
  if (messageToDisplayTWO === 1 && messageToDisplayONE === 1) {
    messageError = 1
  }
  //
  if (conditionsToSendEmail === true) {
    Email.send({
      Host : "smtp.gmail.com",
      Username : "pedrofromperu2@gmail.com",
      Password : smtpPassword,
      To : "pedrofromperu2@gmail.com",
      From : formEmail.value,
      Subject : `PORTOFOLIO - Demande de : ${formName.value}`,
      Body : formTextarea.value
    }).then((message) => {
      console.log(message)
      alertSuccess.style.display = "block"
      formTop.style.display = "none"
      formBot.style.display = "none"
      form.reset()
    })
  } else {
    // display errors & borders
    formName.style.border = "2px solid rgb(250, 25, 50)"
    formEmail.style.border = "2px solid rgb(250, 25, 50)"
    formTextarea.style.border = "2px solid rgb(250, 25, 50)"
    formCheckbox.style.border = "2px solid rgb(250, 25, 50)"
    if (messageError === 1) {
      alertText.innerHTML = '<span>ERREUR</span> : Tous les champs doivent être renseignés.'
      alertElem.style.display = "flex"
    } else if (messageError === 2) {
      alertText.innerHTML = '<span>ERREUR</span> : Adresse email non valide.'
      alertElem.style.display = "flex"
    }
  }

}





// FUNCTIONS
function moveToDiv(link) {

  // remove all link-underlines toggled as active
  document.querySelectorAll('.link-underline').forEach((el)=>el.classList.remove('active'));
  let arrivalElement
  //let linkToUnderline 
  switch (link.id) {
    case "home":
    case "house" :
      arrivalElement = document.querySelector('.section.home')
      break;
    case "projects":
      arrivalElement = document.querySelector('.section.projects')
      //linkToUnderline = document.querySelector('.link-underline.projects')
      break;
    case "skills":
      arrivalElement = document.querySelector('.section.skills')
      //linkToUnderline = document.querySelector('.link-underline.skills')
      break;
    case "contact":
      arrivalElement = document.querySelector('.section.contact')
      //linkToUnderline = document.querySelector('.link-underline.contact')
      break;  
  }
  let distanceFromTop = arrivalElement.getBoundingClientRect().top
  window.scrollTo({
    top: distanceFromTop - (navbarHeight) + window.scrollY,
    behavior: "smooth"
  })
  //linkToUnderline.classList.toggle('active')
}

function startTimer() {
  setInterval(() => {
    seconds += 1
    if (imageEffect === false) {
      img.style.backgroundSize = '150% 150%';
    } else if (imageEffect === true) {
      img.style.backgroundSize = '100% 100%';
    }
    if (seconds >= 15) {
      seconds = 0
      if (imageEffect === false) {
        imageEffect = true
      } else if (imageEffect === true) {
        imageEffect = false
      }
   
    }
  },1000)
}

function animateHomeImage() {
  window.addEventListener('load', () => {
    const TL = gsap.timeline({paused: true});
    TL
      .staggerFrom(headerName, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.075)
      .staggerFrom(headerTitle, 1, { top: -50, opacity: 0, ease: "power2.out" }, 0.075, '-=1') 
    TL.play()
  })  
}

function scrollToListener() {
  lastTopPosition = window.scrollY
  links.forEach((link) => {
    link.addEventListener('click', () => moveToDiv(link))
  })
  linkLogo.addEventListener('click', () => moveToDiv(linkLogo))
  linkHouse.addEventListener('click', () => moveToDiv(linkHouse))
  document.querySelectorAll('.hamburger-container li').forEach((link) => {
    link.addEventListener('click', () => moveToDiv(link))
  })
  document.querySelector('.arrow-bottom').addEventListener('click', () => moveToDiv(document.querySelector('.arrow-bottom')))
}


function globalScrollListener() {
  window.addEventListener('scroll', (e) => {
    const scrolled = window.scrollY;
    // only for navbar

    let hamburgerColoration = document.querySelector('.hamburger-container')
    if (scrolled>= window.innerHeight - navbar.getBoundingClientRect().height  ) {
      navbar.style.backgroundColor = "var(--lightGrey-color)"
      logoImageDark.style.opacity = 0
      logoImageLight.style.opacity = 1
      hamburgerColoration.style.backgroundColor ="var(--lightGrey-color)"
      let test3223 = document.querySelectorAll('.link-underline')
      test3223.forEach((el) => el.style.backgroundColor = "var(--background-color)")
    } else {
      navbar.style.backgroundColor = "var(--background-color)"
      logoImageDark.style.opacity = 1
      logoImageLight.style.opacity = 0
      hamburgerColoration.style.backgroundColor ="var(--background-color)"
      let tetez34235 = document.querySelectorAll('.link-underline')
      tetez34235.forEach((el) => {
        el.style.backgroundColor = "var(--lightGrey-color)"
      })
    }
    // section home
    if (scrolled < (window.innerHeight - navbarHeight -1) ) {
      if (document.querySelector('.link-underline.home').classList.contains('active')) {
      } else {
        document.querySelector('.link-underline.home').classList.toggle('active')
      }
    } else {
      document.querySelector('.link-underline.home').classList.remove('active')
    }

    // section project animate
    if (scrolled >= ((window.innerHeight - navbarHeight) * 0.5)) {
      document.querySelector('.container-section-projects').style.transform = 'translateY(0vw)'
    }

    // section projects
    if (scrolled >=  (window.innerHeight - navbarHeight - 1 )
      && scrolled <= sectionProjectsHeight + (window.innerHeight - navbar.getBoundingClientRect().height)) {
      if (document.querySelector('.link-underline.projects').classList.contains('active')) {
      } else {
        document.querySelector('.link-underline.projects').classList.toggle('active')
        //let test123= document.querySelector('.container-section-projects').style.transform = 'translateY(0vw)'
      
      }
    } else {
      document.querySelector('.link-underline.projects').classList.remove('active')
    }
    // section skills
    if (scrolled >=  (sectionProjectsHeight + window.innerHeight - navbarHeight ) 
      && scrolled <= scrollable - navbar.getBoundingClientRect().height) {
      if (document.querySelector('.link-underline.skills').classList.contains('active')) {
      } else {
        document.querySelector('.link-underline.skills').classList.toggle('active')
      }
    } else {
      document.querySelector('.link-underline.skills').classList.remove('active')
    }
    // section contact
    if (scrolled >= scrollable - navbar.getBoundingClientRect().height){
      if (document.querySelector('.link-underline.contact').classList.contains('active')) {
      } else {
        document.querySelector('.link-underline.contact').classList.toggle('active')
      }
    } else {
      document.querySelector('.link-underline.contact').classList.remove('active')
    }
  })  
}


function listenCards() {
  let projectCardsElements = document.querySelectorAll('.card-project')
  
  
  projectCardsElements.forEach((card) => {
    let cardDefaultDiv = card.querySelector('.card-view-1')
    let cardHiddenDiv = card.querySelector('.card-view-2')
    let cardDate = card.querySelector('.card-footer')
    card.addEventListener('mouseover', () => {
      cardHiddenDiv.style.opacity = 1;
      cardDate.style.opacity = 0
    })
    card.addEventListener('mouseout', () => {
      cardHiddenDiv.style.opacity = 0;
      cardDate.style.opacity = 1
    })

  })
}

function displayCards() {
  projects.forEach((project) => {
    let cardContainer = document.createElement('div')
    cardContainer.className += 'card-project'
    cardContainer.id = `${project.langage}`
  
    // only for card header
    let cardBodyHeader = document.createElement('div')
    cardBodyHeader.className += 'card-header'
    cardBodyHeader.innerHTML += `<h4>${project.title}</h4>`
    let cardBodyHeaderGroup = document.createElement('div')
    cardBodyHeaderGroup.className += 'card-group'
    for (let i = 0; i < project.nbOfDeveloppers; i++){
      cardBodyHeaderGroup.innerHTML += '<img src="./src/assets/logos/person-icon-dark.png" alt="person logo">'
    }
    cardBodyHeader.append(cardBodyHeaderGroup)
  
    // only for view #1
    let cardBodyViewOne = document.createElement('div')
    cardBodyViewOne.className += 'card-view-1'
    let cardBodyViewOneImage = document.createElement('div')
    cardBodyViewOneImage.className += `card-image`
    cardBodyViewOneImage.id = `${project.title.toLocaleLowerCase()}`
  
  
    cardBodyViewOne.append(cardBodyViewOneImage)
    
  
    // only for view #2
    let cardBodyViewTwo = document.createElement('div')
    cardBodyViewTwo.className += 'card-view-2'
    let cardBodyDescription = document.createElement('div')
    cardBodyDescription.className += 'card-description'
    cardBodyDescription.innerHTML += `<p>${project.description}</p>`
    let cardBodyTagsContainer = document.createElement('div')
    cardBodyTagsContainer.className += 'card-tags-container'
    let cardBodyTagsContainerHeader = document.createElement('div')
    cardBodyTagsContainerHeader.className += 'card-tags-container-header'
    cardBodyTagsContainerHeader.innerHTML += '<span></span><h5>Tags</h5><span></span>'
    let cardBodyTagsContainerBody = document.createElement('div')
    cardBodyTagsContainerBody.className += 'card-tags-container-body'
    for (let i = 0; i < project.tags.length; i++){
      cardBodyTagsContainerBody.innerHTML += `<div class="card-tag"><p>${project.tags[i]}</p></div>`
    }
    cardBodyTagsContainer.append(cardBodyTagsContainerHeader)
    cardBodyTagsContainer.append(cardBodyTagsContainerBody)
    let cardBodyLinksContainer = document.createElement('div')
    cardBodyLinksContainer.className += 'card-links-container'
    let cardBodyLinksHeader = document.createElement('div')
    cardBodyLinksHeader.className += 'card-links-header'
    cardBodyLinksHeader.innerHTML += '<span></span><h5>Liens</h5><span></span>'
    let cardBodyLinksBody = document.createElement('div')
    cardBodyLinksBody.className += 'card-links-body'
    cardBodyLinksBody.innerHTML += `
    <div class="link-container"><a href="${project.link}" target="_blank">Demo Live</a></div>
    <div class="link-container"><a href="${project.github}" target="_blank">Code Github</a></div>
    `
    cardBodyLinksContainer.append(cardBodyLinksHeader)
    cardBodyLinksContainer.append(cardBodyLinksBody)
    // to the parent
    cardBodyViewTwo.append(cardBodyDescription)
    cardBodyViewTwo.append(cardBodyTagsContainer)
    cardBodyViewTwo.append(cardBodyLinksContainer)
  
    // only for card footer
    let cardBodyFooter = document.createElement('div')
    cardBodyFooter.className += 'card-footer'
    cardBodyFooter.innerHTML += `<p>${project.date}</p>`
  
    let newContainer = document.createElement('div')
    newContainer.className = 'views-wrapper'
    newContainer.append(cardBodyViewOne)
    newContainer.append(cardBodyViewTwo)
  
    // gathering all to the card container
    cardContainer.append(cardBodyHeader)
    cardContainer.append(newContainer)
    cardContainer.append(cardBodyFooter)
    projectsCardContainer.append(cardContainer)
  }) 
}