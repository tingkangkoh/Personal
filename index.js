$('.carousel').carousel({
    interval:false,
});

new TypeIt("#title", {
    speed: 80,
    loop: true,
    startDelay:500,
  }).go();







function addCardsListeners(){
    let cards=document.querySelectorAll(".skill-card");

    for (let i=0;i<cards.length;i++){
        let skill=cards[i].id;
        let selector="skill-" + skill;
        let text=document.getElementById(selector);

        cards[i].addEventListener("mouseover",()=>{
            text.style.display="block"
        })

        cards[i].addEventListener("mouseout",()=>{
            text.style.display="none";
        })
    }
}

const appearOptions={
    threshold:0,
    rootMargin:"0px 0px -200px 0px"
};
const faders=document.querySelectorAll(".fade-in");
const sliders=document.querySelectorAll(".slide-in");

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
            addCardsListeners();
        }
    })
}, appearOptions);

faders.forEach(fader=>{
    appearOnScroll.observe(fader);
})

sliders.forEach(slider=>{
    appearOnScroll.observe(slider);
})