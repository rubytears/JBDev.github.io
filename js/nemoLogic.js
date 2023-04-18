function createGrid(picross) {
  checking = new Array(picross.rows);
  // Creating vertical number representation
  let vRep = document.createElement("div");
  vRep.setAttribute("class", `vertical numbers`);
  canvas.appendChild(vRep);

  for(let x = 0; x < picross.rows; x++){
    const row = document.createElement("div");
    const vNum = document.createElement("div");
    vNum.setAttribute("class", `vn ${x}`);
    vRep.appendChild(vNum);
    row.setAttribute("class", `row ${x}`);
    // Creating 
    for(let y = 0; y < picross.columns; y++){
      checking[y] = new Array(picross.columns);
      let column = document.createElement("div");
      column.setAttribute("class", `box r${x}c${y}`);
      row.appendChild(column);
    }
    canvas.appendChild(row);
  }
}

function solve(picross) {
  let box;
  for(let x = 0; x < picross.rows; x++){
    for(let y = 0; y < picross.columns; y++){
      if(picross.solution[x][y] === 1){
        box = document.querySelector(`.r${x}c${y}`);
        box.style.background = "black";
      }
    }
  }
}

function checked(box) {
  box.target.classList.remove("crossed");
  box.target.classList.toggle("checked");
  let xy = box.target.getAttribute("class").slice(5).replace("c", " ").split(" ");
  console.log(xy);
}

function crossed(box) {
  box.preventDefault();
  box.target.classList.remove("checked");
  box.target.classList.toggle("crossed");
  console.log(box);
}


let checking;

const canvas = document.querySelector(".canvas");

let dear = {
  name: "dear",
  rows: 15,
  columns: 15,
  solution: [
    [0,0,1,0,0,0,0,0,1,0,1,0,0,0,0], //1
    [1,0,1,0,0,0,0,0,1,1,1,0,0,0,0], //2
    [1,1,1,1,0,0,1,1,1,0,0,0,0,0,0], //3
    [0,0,0,0,1,0,1,0,0,0,0,0,0,0,0], //4
    [0,0,0,1,1,1,1,0,0,0,0,0,0,0,0], //5
    [0,0,1,1,1,1,0,0,0,0,0,0,0,0,0], //6
    [0,0,0,0,1,1,1,0,1,1,1,1,0,0,0], //7
    [0,0,0,0,1,1,1,1,1,0,1,0,1,1,0], //8
    [0,0,0,0,1,1,1,1,0,1,0,1,0,1,1], //9
    [0,0,0,0,0,1,1,1,1,1,1,1,1,1,0], //10
    [0,0,0,0,0,1,1,0,1,1,0,1,1,1,0], //11
    [0,0,0,0,0,1,0,0,1,1,0,0,1,1,0], //12
    [0,0,0,0,1,0,0,0,1,0,0,0,1,1,0], //13
    [0,0,0,0,1,0,0,1,0,0,0,0,0,1,0], //14
    [0,0,0,0,1,0,0,1,0,0,0,0,0,1,0]  //15
  ],
  difficulty: "normal"
};

createGrid(dear);
//solve(dear);

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
  box.addEventListener("click", box => checked(box));
  box.addEventListener("contextmenu", box => crossed(box));
})

