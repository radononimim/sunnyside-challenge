const mobileNavBtn = document.querySelector(".mobile-nav-btn ")
const mobileNav = document.querySelector(".mobile-nav")
const bar1 = document.querySelector(".bar1")
const bar2 = document.querySelector(".bar2")
const bar3 = document.querySelector(".bar3")

mobileNavBtn.addEventListener("click", e => {
  mobileNav.classList.toggle("mobile-nav-open")
  if (!bar1.classList.contains("open")) {
    bar1.classList.add("open")
    bar2.classList.add("open")
    bar3.classList.add("open")
  } else if (bar1.classList.contains("open")) {
    bar1.classList.toggle("close")
    bar2.classList.toggle("close")
    bar3.classList.toggle("close")
  }
})
