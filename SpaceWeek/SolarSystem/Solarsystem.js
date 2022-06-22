const solarSystem = document.getElementById("solarSystem")
const planetDivs = document.querySelectorAll(".planet")
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey"
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow"
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green"
    },
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink"
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow"
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange"
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey"
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue"
    }
]

planetDivs.forEach((planet, index) => {
    planet.style.width = `${planets[index].diameter / 1000}px`
    planet.style.backgroundColor = planets[index].color
    
    const planetName = planet.firstElementChild.firstElementChild
    const planetDiameter = planetName.nextElementSibling
    const planetColor = planetDiameter.nextElementSibling
    
    planetName.textContent = `Name: ${planets[index].name}`
    planetDiameter.textContent = `Diameter: ${planets[index].diameter}km`
    planetColor.textContent = `Color: ${planets[index].color}`
})
// Task:
// Write a function to render 
// the planets from the planets array using JavaScript.
 
// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)