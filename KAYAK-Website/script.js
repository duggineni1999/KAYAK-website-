

var xValues = ["J", "F", "M", "A", "M","J","Ju","A","S","O","N","D"];
var yValues = [18131, 17799, 18867, 18529,22930,35159,27812,21046,23892,20729,20646,15278];
var barColors = ["black","black","black","black","black","black","black","black","black","black","black","black"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Average Night Price Per Month"
    }
  }
});
var xValues = ["Sun", "Mon", "Tues", "Wed", "Thurs","Fri","Sat"];
var yValues = [29123, 27865, 26112, 26263,25362,21662,23053];
var barColors = ["black","black","black","black","black","black","black"];

new Chart("myChart1", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Average Nightly Price"
    }
  }
});
const slider = document.querySelector(".slider");     
const profileCard = document.querySelector(".profile-card");

//current mouse pointer position
let pointerPosition;

//slider current scroll position from left
let sliderScrollLeft;

//boolean
let isDrag = false;

//profile card width
let cardWidth = profileCard.offsetWidth;

//function to start dragging slider
const start = (event) => {
  isDrag = true;
  //The pageX property returns the document relative X coordinate of the mouse pointer when a mouse event occurs.
  pointerPosition = event.pageX;
  //The scrollLeft property sets or returns the number of pixels an element's content is scrolled horizontally.
  sliderScrollLeft = slider.scrollLeft;
  //adding drag class to slider
  slider.classList.add("drag");
};

const drag = (event) => {
  if (!isDrag) return;
  //calculating slider scroll value from left
  slider.scrollLeft = sliderScrollLeft - (event.pageX - pointerPosition);
};

const stop = () => {
  isDrag = false;
  //removing drag class from slider
  slider.classList.remove("drag");
};

slider.addEventListener("mousedown", start);
slider.addEventListener("mousemove", drag);
slider.addEventListener("mouseup", stop);

const slider1 = document.querySelector(".slider1");     
const profileCard1 = document.querySelector(".profile-card1");

//current mouse pointer position
let pointerPosition1;

//slider current scroll position from left
let sliderScrollLeft1;

//boolean
let isDrag1 = false;

//profile card width
let cardWidth1 = profileCard1.offsetWidth;

//function to start dragging slider
const start1 = (event1) => {
  isDrag1 = true;
  //The pageX property returns the document relative X coordinate of the mouse pointer when a mouse event occurs.
  pointerPosition1 = event1.pageX;
  //The scrollLeft property sets or returns the number of pixels an element's content is scrolled horizontally.
  sliderScrollLeft1 = slider1.scrollLeft;
  //adding drag class to slider
  slider1.classList.add("drag");
};

const drag1 = (event1) => {
  if (!isDrag1) return;
  //calculating slider scroll value from left
  slider1.scrollLeft = sliderScrollLeft1 - (event1.pageX - pointerPosition1);
};

const stop1 = () => {
  isDrag1 = false;
  //removing drag class from slider
  slider1.classList.remove("drag");
};

slider1.addEventListener("mousedown", start1);
slider1.addEventListener("mousemove", drag1);
slider1.addEventListener("mouseup", stop1);
window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector(".btn1");
    const searchBtn = document.querySelector(".bx-search")

    closeBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })
    closeBtn.addEventListener("onmouseover",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })


    searchBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })
    searchBtn.addEventListener("onmouseout",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })
    

    function menuBtnChange(){
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-menu","bx-menu")
        }else{
            closeBtn.classList.replace("bx-menu","bx-menu")
        }
    }
}