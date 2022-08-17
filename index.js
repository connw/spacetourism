const destinations = {
    header: ["moon", "mars", "europa", "titan"],
    description: [
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", 
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!", 
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", 
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    ],
    distance: ["384,400 km", "225 mil. km", "628 mil. km", "1.6 bil. km"],
    time: ["3 days", "9 months", "3 years", "7 years"]
}
const crews = {
    title: [ 
        ["Commander", "commander"], 
        ["Mission Specialist", "specialist"], 
        ["Pilot", "pilot"], 
        ["Flight Engineer", "engineer"]
    ],
    name: [
        ["Douglas Hurley", "douglas-hurley"], 
        ["Mark Shuttleworth", "mark-shuttleworth"], 
        ["Victor Glover", "victor-glover"], 
        ["Anousheh Ansari", "anousheh-ansari"]
    ],
    description: [
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.", 
        "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.", 
        "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64, and served as a station systems flight engineer.", 
        "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
    ]
}
const technologies = {
    term: [
        ["Launch Vehicle", "launch-vehicle"], 
        ["Spaceport", "spaceport"], 
        ["Space capsule", "space-capsule"]
    ],
    description: [
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    ]
}
const destContentNavItem = document.querySelectorAll(".destinations .content-nav-item");
const destContentImage = document.querySelector(".destinations img");
const crewContentNavItem = document.querySelectorAll(".crew .content-nav-item");
const crewContentImage = document.querySelectorAll(".crew img");
const techContentNavItem = document.querySelectorAll(".technology .content-nav-item");

// Mobile Navigation Bar
document.querySelector(".hamb").addEventListener("click", openNav);
document.querySelectorAll(".hamb-close, main, .mobile, .logo").forEach(elem => elem.addEventListener("click", closeNav));

function openNav() {
    document.querySelector(".header-nav-hamb").style.display = "block";
}

function closeNav() {
    document.querySelector(".header-nav-hamb").style.display = "none";
}

// Content for destinations.html
destContentNavItem.forEach(elem => elem.addEventListener("click", function() {
    let destination = this.value;
    destContentNavItem.forEach(elem => elem.classList.remove("selected"));
    this.classList.add("selected");
    destContentImage.setAttribute("src", "assets/destination/image-" + destinations.header[destination] + ".png");
    destContentImage.setAttribute("alt", "Destination " + destinations.header[destination]);
    document.querySelector(".content-header").innerHTML = destinations.header[destination];
    document.querySelector(".content-desc").innerHTML = destinations.description[destination];
    document.querySelector(".distance .content-fact-value").innerHTML = destinations.distance[destination];
    document.querySelector(".time .content-fact-value").innerHTML = destinations.time[destination];
}));

// Content for crew.html
crewContentNavItem.forEach(elem => elem.addEventListener("click", function() {
    let crew = this.value;
    crewContentNavItem.forEach(elem => elem.classList.remove("selected"));
    crewContentNavItem.forEach(elem => {if (elem.value == crew) elem.classList.add("selected")});
    crewContentImage.forEach(elem => elem.setAttribute("src", "assets/crew/image-" + crews.name[crew][1] + ".png"))
    crewContentImage.forEach(elem => elem.setAttribute("alt", crews.name[crew][0] + " photo"));
    document.querySelectorAll(".content-crew-title").forEach(elem => elem.innerHTML = crews.title[crew][0]);
    document.querySelectorAll(".content-crew-name").forEach(elem => elem.innerHTML = crews.name[crew][0]);
    document.querySelectorAll(".content-desc").forEach(elem => elem.innerHTML = crews.description[crew]);
}));

// Content for technology.html
techContentNavItem.forEach(elem => elem.addEventListener("click", function() {
    let tech = this.value;
    techContentNavItem.forEach(elem => elem.classList.remove("selected"));
    techContentNavItem.forEach(elem => {if (elem.value == tech) elem.classList.add("selected")});
    document.querySelector(".technology.desktop img").setAttribute("src", "assets/technology/image-" + technologies.term[tech][1] + "-portrait.jpg");
    document.querySelector(".technology.tablet-mobile img").setAttribute("src", "assets/technology/image-" + technologies.term[tech][1] + "-landscape.jpg");
    document.querySelectorAll(".technology img").forEach(elem => elem.setAttribute("alt",  technologies.term[tech][0] + " photo"));
    document.querySelectorAll(".content-term").forEach(elem => elem.innerHTML = technologies.term[tech][0]);
    document.querySelectorAll(".content-desc").forEach(elem => elem.innerHTML = technologies.description[tech]);
}));