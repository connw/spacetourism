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
const contentNav = document.querySelectorAll(".content-nav-item");
const image = document.querySelector("main img");
const images = document.querySelectorAll("main img");

document.querySelector(".hamb").addEventListener("click", openNav);
document.querySelectorAll(".hamb-close, main, .mobile").forEach(elem => elem.addEventListener("click", closeNav));

contentNav.forEach(elem => {
    page = elem.parentNode.classList[1];

    if (page == "destinations") { elem.addEventListener("click", destinationContent); } 
    else if (page == "crew") { elem.addEventListener("click", crewContent); } 
    else if (page == "technology") { elem.addEventListener("click", technologyContent); }
});

function openNav() {
    document.querySelector(".header-nav-hamb").classList.add("show");
}

function closeNav() {
    document.querySelector(".header-nav-hamb").classList.remove("show");
}

function destinationContent() {
    const selection = this.value;

    activeSelection(this);

    image.setAttribute("src", "assets/destination/image-" + destinations.header[selection] + ".png");
    image.setAttribute("alt", "Destination " + destinations.header[selection]);

    document.querySelector(".content-header").innerHTML = destinations.header[selection];
    document.querySelector(".content-desc").innerHTML = destinations.description[selection];
    document.querySelector(".distance .content-fact-value").innerHTML = destinations.distance[selection];
    document.querySelector(".time .content-fact-value").innerHTML = destinations.time[selection];
}

function crewContent() {
    const selection = this.value;

    activeSelection(this);

    images.forEach(elem => elem.setAttribute("src", "assets/crew/image-" + crews.name[selection][1] + ".png"))
    images.forEach(elem => elem.setAttribute("alt", crews.name[selection][0] + " photo"));

    document.querySelectorAll(".content-crew-title").forEach(elem => elem.innerHTML = crews.title[selection][0]);
    document.querySelectorAll(".content-crew-name").forEach(elem => elem.innerHTML = crews.name[selection][0]);
    document.querySelectorAll(".content-desc").forEach(elem => elem.innerHTML = crews.description[selection]);
}

function technologyContent() {
    const selection = this.value;

    activeSelection(this);

    document.querySelector(".desktop img").setAttribute("src", "assets/technology/image-" + technologies.term[selection][1] + "-portrait.jpg");
    document.querySelector(".mobile img").setAttribute("src", "assets/technology/image-" + technologies.term[selection][1] + "-landscape.jpg");
    document.querySelectorAll(".technology img").forEach(elem => elem.setAttribute("alt", technologies.term[selection][0] + " photo"));

    document.querySelectorAll(".content-term").forEach(elem => elem.innerHTML = technologies.term[selection][0]);
    document.querySelectorAll(".content-desc").forEach(elem => elem.innerHTML = technologies.description[selection]);
}


function activeSelection(choice) {
    const hasMultipleDisplays = document.getElementsByTagName("main").length > 1;

    contentNav.forEach(elem => { if (elem.classList.contains("selected")) elem.classList.remove("selected") });

    choice.classList.add("selected");

    if (hasMultipleDisplays) {
        contentNav.forEach(elem => { if (elem.value == choice.value) elem.classList.add("selected") });
    }
}