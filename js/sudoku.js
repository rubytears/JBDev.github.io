function thickenBorders() {
  let thickerBorder;

  for(let i = 3; i <= 9; i+=3){
    thickerBorder = document.querySelectorAll(`.c${i}`);
    thickerBorder.forEach((e) => {
      e.style.borderRight = "2px solid black";
    });
    thickerBorder = document.querySelectorAll(`.r${i}`);
    thickerBorder.forEach((e) => {
      e.style.borderBottom = "2px solid black";
    });
  }
}


thickenBorders();