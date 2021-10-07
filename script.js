/* */

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    // removeColor(box);
    highlightBox(box);
    if (box.classList.contains("active")) {
      setTimeout(function () {
        insertColor(box)
      }, 0)
      
    } else {
      return (box.style.backgroundColor = "#fff");
    }
    
    // flashBoxes(box)
    
  });
});


function pickRandomColor() {
  const colors = [
    "#CD5C5C",
    "#DFFF00",
    "#DE3163",
    "#CCCCFF",
    "#40E0D0",
    "#0000FF",
    "#808000",
    "#FF00FF",
    "#000080",
    "#DA70D6",
    "#778899",
    "#800080",
  ];

  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function highlightBox(box) {
  return box.classList.toggle("active");
}


function insertColor(box) {
     return (box.style.backgroundColor = pickRandomColor(box));
      
  }
  






  // if (box.classList.contains("active")) {
  //     const times = 0;

  //     const interval = setInterval(function () {
        
  //         if (times < 3) {
  //           setTimeout(() => {
  //             insertColor(box);
  //           }, 1000);
  //           times++;
  //         } else {
  //         removeColor(box);
  //       }
  //     }, 1000);
  //   return (box.style.backgroundColor = pickRandomColor());
  //   // return removeColor(box)
  // } else {
  //   return (box.style.backgroundColor = "#fff");
  // }






function removeColor(box) {
  return box.classList.remove("active");
}

// function flashBoxes(box) {
 
//   const times = 0;

//     insertColor(box);
//     increment(times)
// }

// function increment(times) {
//     if (times >= 10) {
//         clearInterval(interval)
//         return;
//     }
//     i++
// }


// function flashBoxes(box) {
//   insertColor(box);
//   const times = 0;

//   const interval = setInterval(function () {
//     if (times <= 10) {
//       setTimeout(function () {
//         insertColor(box);
//       }, 200);
//       times++;
//     } else {
//       clearInterval(interval);
//     }
//   }, 1000);
// }
