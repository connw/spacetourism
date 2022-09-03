const destination = {
    name: ["moon", "mars", "europa", "titan"],
    description: [
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    ],
    distance: ["384,400 km", "225 mil. km", "628 mil. km", "1.6 bil. km"],
    time: ["3 days", "9 months", "3 years", "7 years"]
};
const crew = {
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
};
const technology = {
    name: [
        ["Launch Vehicle", "launch-vehicle"],
        ["Spaceport", "spaceport"],
        ["Space capsule", "space-capsule"]
    ],
    description: [
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    ]
};
const contentNav = document.querySelectorAll(".content-nav li");
const images = document.querySelectorAll("main img");

document.querySelector(".hamburger-icon").addEventListener("click", mobileNav);

contentNav.forEach(el => {
    const page = el.parentNode.classList[1];

    if (page == "js-destination") { 
        el.addEventListener("click", changeDestintaion); 
    } else if (page == "js-crew") { 
        el.addEventListener("click", changeCrew); 
    } else if (page == "js-technology") { 
        el.addEventListener("click", changeTechnology); 
    }
});

function mobileNav() {
    const hamburgerNav = document.querySelector(".site-nav--mobile");

    hamburgerNav.classList.add("js-active");

    document.querySelectorAll(".site-nav__close--mobile, main")
        .forEach(el => el.addEventListener("click", () => { hamburgerNav.classList.remove("js-active"); })
    );
}

function activeSelection(selection) {
    contentNav.forEach(el => { if (el.classList.contains("selected")) el.classList.remove("selected") });
    contentNav.forEach(el => { if (el.value == selection.value) el.classList.add("selected") });
}

function changeDestintaion() {
    const selection = this.value;
    const name = destination.name[selection];
    const description = destination.description[selection];
    const distance = destination.distance[selection];
    const time = destination.time[selection];

    activeSelection(this);
    
    images.forEach(el => el.setAttribute("src", "assets/destination/image-" + name + ".png"));
    images.forEach(el => el.setAttribute("alt", name + " photo"));

    document.querySelectorAll(".name").forEach(el => el.innerHTML = name);
    document.querySelectorAll(".description").forEach(el => el.innerHTML = description);
    document.querySelectorAll(".facts__distance .facts__value").forEach(el => el.innerHTML = distance);
    document.querySelectorAll(".facts__time .facts__value").forEach(el => el.innerHTML = time);
}

function changeCrew() {
    const selection = this.value;
    const name = crew.name[selection];
    const title = crew.title[selection];
    const description = crew.description[selection];

    activeSelection(this);

    images.forEach(el => el.setAttribute("src", "assets/crew/image-" + name[1] + ".png"));
    images.forEach(el => el.setAttribute("alt", name[0] + " photo"));

    document.querySelectorAll(".title").forEach(el => el.innerHTML = title[0]);
    document.querySelectorAll(".name").forEach(el => el.innerHTML = name[0]);
    document.querySelectorAll(".description").forEach(el => el.innerHTML = description);
}

function changeTechnology() {
    const selection = this.value;
    const name = technology.name[selection];
    const description = technology.description[selection];

    activeSelection(this);

    document.querySelector(".desktop img").setAttribute("src", "assets/technology/image-" + name[1] + "-portrait.jpg");
    document.querySelector(".mobile img").setAttribute("src", "assets/technology/image-" + name[1] + "-landscape.jpg");
    document.querySelectorAll("main img").forEach(el => el.setAttribute("alt", name[0] + " photo"));

    document.querySelectorAll(".name").forEach(el => el.innerHTML = name[0]);
    document.querySelectorAll(".description").forEach(el => el.innerHTML = description);
}