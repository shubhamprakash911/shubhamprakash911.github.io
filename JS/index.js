//? <!----------------------------------------------- < Preloader & Progressbar> ----------------------------------------------->
let loader = document.getElementById("loader");
let brandbg = document.getElementById("brandbg");

brandbg.innerHTML = `<span class="spinner-grow text-primary" role="status"></span>
shubham `;
let gitloadercal = document.getElementById("gitcalendar");
window.addEventListener("load", function () {
  brandbg.innerHTML = `🔵 Shubham `;
  GitHubCalendar(".calendar", "shubhamprakash911", { responsive: true });
});

function TopButtonFunction() {
  if (!topbutton) return;
  if (document.documentElement.scrollTop > 60) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}
let topbutton = document.getElementById("topbutton");
topbutton.addEventListener(
  "click",
  () => (document.documentElement.scrollTop = 0)
);

const filled = document.querySelector(".filled");
function update() {
  filled.style.width = `${
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
  }%`;
  requestAnimationFrame(update);
}

update();
//? <!----------------------------------------------- < Scroll slide animations> ----------------------------------------------->
let ScreenSize = window.innerWidth;
window.onresize = () => {
  ScreenSize = window.innerWidth;
  console.log(ScreenSize);
};

let aboutroll = document.getElementById("Aboutroll");
let projectroll = document.getElementById("projectHead");
window.addEventListener("scroll", () => {
  TopButtonFunction();
  let value = window.scrollY;
  if (ScreenSize <= 1400) value += 300;
  aboutroll.style.transform = `translateX(${(value - 2350) / 3}px)`;
  projectroll.style.transform = `translateX(${(-value + 2700) / 3}px)`;
});

//? <!----------------------------------------------- < Resume> ----------------------------------------------->

function resume() {
  window.open("Kunal-Mehra-Resume.pdf", "_blank");
}

//? <!----------------------------------------------- < Repo Redirect> ----------------------------------------------->
Repo1.addEventListener("click", () => {
  window.open("https://github.com/KunalMehra075/OrangeFryFrontend");
});
Repo2.addEventListener("click", () => {
  window.open("https://github.com/KunalMehra075/MyCal.com-Frontend");
});
Repo3.addEventListener("click", () => {
  window.open("https://github.com/Tanishka-22/KK-Kushwah");
});
Repo4.addEventListener("click", () => {
  window.open("https://github.com/KunalMehra075/obscene-icicle-4134 ");
});

brandbg.addEventListener("click", (e) => {
  console.log(e);
});
