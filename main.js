import './style.css'
import Experience from './Experience/Experience.js'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";


const experience = new Experience(document.querySelector(".experience-canvas"))

gsap.registerPlugin(ScrollTrigger);
// REVEAL //
gsap.utils.toArray(".section-heading").forEach(function (elem) {
  ScrollTrigger.create({
    trigger: elem,
    start: "top 80%",
    end: "bottom 0%",
    // markers: true,
    onEnter: function () {
      gsap.fromTo(
        elem,
        { x: -100, autoAlpha: 0 },
        {
          duration: 0.55,
          x: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeave: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    },
    onEnterBack: function () {
      gsap.fromTo(
        elem,
        { x: -100, autoAlpha: 0 },
        {
          duration: 0.55,
          x: 0,
          autoAlpha: 1,
          ease: "back",
          overwrite: "auto"
        }
      );
    },
    onLeaveBack: function () {
      gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
    }
  });
});



gsap.utils.toArray(".section-text").forEach(function (elem) {
    ScrollTrigger.create({
      trigger: elem,
      start: "top 80%",
      end: "bottom 0%",
      // markers: true,
      onEnter: function () {
        gsap.fromTo(
          elem,
          { x: -100, autoAlpha: 0 },
          {
            duration: 0.55,
            x: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      },
      onLeave: function () {
        gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      },
      onEnterBack: function () {
        gsap.fromTo(
          elem,
          { x: -100, autoAlpha: 0 },
          {
            duration: 0.55,
            x: 0,
            autoAlpha: 1,
            ease: "back",
            overwrite: "auto"
          }
        );
      },
      onLeaveBack: function () {
        gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
      }
    });
  });


// Get the text element
let text = document.querySelector(".char");

// Create a timeline
let timeline = gsap.timeline();


// Add a fade out animation to the timeline


// Add event listener to listen for scroll events
window.addEventListener("scroll", function() {
  // Check if the scroll position is greater than the height of the text element
  if (window.pageYOffset > text.offsetHeight) {
    // Play the timeline
    timeline.to(text, { duration: 0.1, opacity: 0 });
  }
});