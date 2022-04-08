import projects from '../data/projects.js'
// DECLARATIONS DES VARIABLES
// SCROLL TO
const links = document.querySelectorAll('.link')
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
// FIN DECLARATIONS DES VARIABLES

// TEST22TEST
console.log(projects)
let projectsCardContainer = document.querySelector('.body-projects')
/*
projects.forEach((project) => {
  let newProject = document.createElement('div')
  newProject.className += 'project-card'
  newProject.
})
*/

projects.forEach((project) => {
  let cardContainer = document.createElement('div')
  cardContainer.className += 'card-project'

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
  <a href="${project.link}" target="_blank">Demo Live</a>
  <a href="${project.github}" target="_blank">Code Github</a>
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


  // gathering all to the card container
  cardContainer.append(cardBodyHeader)
  cardContainer.append(cardBodyViewOne)
  cardContainer.append(cardBodyViewTwo)
  cardContainer.append(cardBodyFooter)
  projectsCardContainer.append(cardContainer)
})


//REWORD MOUSE IN OUT GLOBAL

let projectCardsElements = document.querySelectorAll('.card-project')
console.log(projectCardsElements)
projectCardsElements.forEach((card) => {
  let cardDefaultDiv = card.querySelector('.card-view-1')
  let cardHiddenDiv = card.querySelector('.card-view-2')
  console.log(cardDefaultDiv)
  console.log(cardHiddenDiv)
  card.addEventListener('mouseover', () => {
    console.log('in')
    cardDefaultDiv.style.display = "none";
    cardHiddenDiv.style.display = "grid"
  })

  card.addEventListener('mouseout', () => {
    console.log('out')
    cardDefaultDiv.style.display = "block";
    cardHiddenDiv.style.display = "none"
  })

})

/*
// MOUSE IN-OUT CARD TESTING ZONE //
let divCardElement = document.querySelectorAll('.card-project')[0]
let hiddenDivCardElement = document.querySelectorAll('.card-view-2')[0]
let showedDefaultCardElement = document.querySelectorAll('.card-view-1')[0]
console.log(divCardElement)
divCardElement.addEventListener('mouseover', () => {
  console.log('up')
  hiddenDivCardElement.style.display = "grid";
  showedDefaultCardElement.style.display = "none"
})
divCardElement.addEventListener('mouseout', () => {
  console.log('down')
  hiddenDivCardElement.style.display = "none";
  showedDefaultCardElement.style.display = "block"
})
// MOUSE IN-OUT CARD END //
*/

// INITIALIZATION 
clearInterval(startTimer());
animateHomeImage()
scrollToListener()
globalScrollListener()

// FUNCTIONS
function moveToDiv(link) {
  // remove all link-underlines toggled as active
  document.querySelectorAll('.link-underline').forEach((el)=>el.classList.remove('active'));
  let arrivalElement
  //let linkToUnderline 
  switch (link.id) {
    case "home":
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
      img.style.backgroundSize = '150%';
    } else if (imageEffect === true) {
      img.style.backgroundSize = '100%';
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
}


function globalScrollListener() {
  window.addEventListener('scroll', (e) => {
    const scrolled = window.scrollY;
    // only for navbar
    if (scrolled>= window.innerHeight - navbar.getBoundingClientRect().height  ) {
      navbar.style.backgroundColor = "var(--lightGrey-color)"
      logoImageDark.style.opacity = 0
      logoImageLight.style.opacity= 1
    } else {
      navbar.style.backgroundColor = "var(--background-color)"
      logoImageDark.style.opacity = 1
      logoImageLight.style.opacity= 0
    }
    // section projects
    if (scrolled >=  (window.innerHeight - navbarHeight)
      && scrolled <= sectionProjectsHeight + (window.innerHeight - navbar.getBoundingClientRect().height)) {
      if (document.querySelector('.link-underline.projects').classList.contains('active')) {
      } else {
        document.querySelector('.link-underline.projects').classList.toggle('active')
        let test123= document.querySelector('.container-section-projects').style.transform = 'translateY(0vw)'
        console.log(test123)
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
