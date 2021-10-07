/* */

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    // removeColor(box);
    highlightBox(box);
    if (box.classList.contains("active")) {
      insertColor(box)
      colorMover(box, 2)
      
    } else {
      return (box.style.backgroundColor = "#fff");
    }
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
    "#8E388E",
    "#EE0000",
    "#CDAA7D",
    "#7171C6",
    "#F0E68C",
    "#00FF7F",
    "#2F4F4F",
    "#1E90FF",
  ];

  let randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function highlightBox(box) {
  return box.classList.toggle("active");
}


function insertColor(box) {
  const colorBox = (box.style.backgroundColor = pickRandomColor(box));
  return colorBox
      
}


function resetColor(box) {
  const colorBox = (box.style.backgroundColor = "#fff");
    return colorBox;  
}


function colorMover(box, count) {
  // let count = 0;
  const max = 10;

  if (count < max) {
    setTimeout(function () {
      insertColor(box)
      count++;
    }, 1000);

    setTimeout(function () {
      insertColor(box);
      count++;
    }, 1000);
  
  }
    


  // let interval = setInterval(function () {
  //   if (count <= max) {
  //     highlightBox(box);
  //     insertColor(box)
  //     count++
  //   } else {
  //     clearInterval(interval);
  //   }
  // })
  // resetColor(box)

}


function removeColor(box) {
  return box.classList.remove("active");
}


function stopTimeLoop() {
  clearTimeout(colorMover)
}
