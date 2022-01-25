const timelineOfAnimations = gsap.timeline({
    defaults: { duration: 0.75, ease: "power3.easeOut" },
});

timelineOfAnimations.fromTo(
    ".hero-img",
    { scale: 1.3, borderRadius: "0rem" },
    {
        scale: 1,
        borderRadius: "2rem",
        delay: 0.35,
        duration: 2.5,
        ease: "elastic.out(1.5,1)",
    }
);
timelineOfAnimations.fromTo(
    ".cta1",
    { x: "100%", opacity: 0 },
    { x: 0, opacity: 1 },
    "<20%"
);
timelineOfAnimations.fromTo(
    ".cta3",
    { x: "-100%", opacity: 0 },
    { x: 0, opacity: 1 },
    "<20%"
);
timelineOfAnimations.fromTo(
    ".cta2",
    { y: "100%", opacity: 0 },
    { y: 0, opacity: 1 },
    "<20%"
);
timelineOfAnimations.fromTo(
    ".cta4",
    { x: "100%", opacity: 0 },
    { x: 0, opacity: 1 },
    "<20%"
);
timelineOfAnimations.fromTo(
    ".cta6",
    { x: "-100%", opacity: 0 },
    { x: 0, opacity: 1 },
    "<20%"
);
timelineOfAnimations.fromTo(
    ".cta5",
    { y: "100%", opacity: 0 },
    { y: 0, opacity: 1 },
    "<20%"
);
timelineOfAnimations.fromTo(
    ".cta-btn",
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1 },
    "<"
);

//! Split text
const logo = document.querySelector(".logo");
const letters = logo.textContent.split("");
logo.textContent = "";
letters.forEach((letter) => {
    logo.innerHTML += `<span class="letter">` + letter + `<span/>`;
});
gsap.set(".letter", { display: "inline-block" });
gsap.fromTo(
    ".letter",
    { y: "100%" },
    { y: 0, delay: 2, stagger: 0.05, ease: "back.out(3)" }
);
