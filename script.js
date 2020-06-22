//Getting the moment() method working on console first
//declare currentTime function that runs in header
let currentTime;
let textInputs = [];

function updateTime() {
  currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDay").html(currentTime);

  let currentHour = new Date().getHours();
  console.log(currentHour);

  for (let i = 0; i < 9; i++) {
    let hourVal;
    let hourIndex = $(".input-group-text");
    let colourBox = $(".form-control");
    hourVal = $(hourIndex)[i].id;
    console.log(hourVal);

    if (currentHour == hourVal) {
      $(colourBox[i]).addClass("present");
    }
    if (currentHour > hourVal) {
      $(colourBox[i]).addClass("past");
    }
    if (currentHour < hourVal) {
      $(colourBox[i]).addClass("future");
    }
  }
}

//make a save function working -
$("#btn9am").on("click", function () {
  let boxInput9am = document.getElementById("9am");
  let inputVal = boxInput9am.value;
  console.log(inputVal);
  textInputs.push(inputVal);
  localStorage.setItem("textInput", JSON.stringify(textInputs));
});

$("#btn10am").on("click", function () {
  let boxInput10am = document.getElementById("10am");
  let inputVal = boxInput10am.value;
  console.log(inputVal);
  textInputs.push(inputVal);
  localStorage.setItem("textInput", JSON.stringify(textInputs));
});
$("#btn11am").on("click", function () {
  let boxInput11am = document.getElementById("11am");
  let inputVal = boxInput11am.value;
  console.log(inputVal);
  textInputs.push(inputVal);
  localStorage.setItem("textInput", JSON.stringify(textInputs));
});
$("#btn12pm").on("click", function () {
  let boxInput12pm = document.getElementById("12pm");
  let inputVal = boxInput12pm.value;
  console.log(inputVal);
  textInputs.push(inputVal);
  localStorage.setItem("textInput", JSON.stringify(textInputs));
});
$("#btn1pm").on("click", function () {
  let boxInput1pm = document.getElementById("1pm");
  let inputVal = boxInput1pm.value;
  console.log(inputVal);
  textInputs.push(inputVal);
  localStorage.setItem("textInput", JSON.stringify(textInputs));
});
$("#btn2pm").on("click", function () {
  let boxInput2pm = document.getElementById("2pm");
  let inputVal = boxInput2pm.value;
  console.log(inputVal);
  textInputs.push(inputVal);
  localStorage.setItem("textInput", JSON.stringify(textInputs));
});
$("#btn3pm").on("click", function () {
  let boxInput3pm = document.getElementById("3pm");
  let inputVal = boxInput3pm.value;
  console.log(inputVal);
  textInputs.push(inputVal);
  localStorage.setItem("textInput", JSON.stringify(textInputs));
});
$("#btn4pm").on("click", function () {
  let boxInput4pm = document.getElementById("4pm");
  let inputVal = boxInput4pm.value;
  console.log(inputVal);
  textInputs.push(inputVal);
  localStorage.setItem("textInput", JSON.stringify(textInputs));
});
$("#btn5pm").on("click", function () {
  let boxInput5pm = document.getElementById("5pm");
  let inputVal = boxInput5pm.value;
  console.log(inputVal);
  textInputs.push(inputVal);
  localStorage.setItem("textInput", JSON.stringify(textInputs));
});
// i'm sure there is a better way to write this repetitive code into one beautiful code but i"m struggling and it's late.

$("#clearLocalBtn").on("click", function () {
  localStorage.clear();
});

//set a function that adds past, present, future class to the textarea div

updateTime();
setInterval(updateTime, 1000);
