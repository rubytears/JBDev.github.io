function startQuiz() {
  const select = document.getElementById("selection").value;
  beginning.classList.add("hidden");
  quiz.classList.remove("hidden");
  createQuiz(select);
}

function createQuiz(name) {
  let size;
  const table = document.getElementById("table");
  const tbody = table.createTBody();

  if(name.includes("quiz")){
    number.textContent = name.replace("quiz", "문제");
    makeTable(12, tbody);    
  } else if(name.includes("guess")){
    number.textContent = name.replace("guess", "추리문제");
    makeTable(10, tbody);
  }
  quiz.appendChild(table);
}

function makeTable(size, tbody) {
  for(let r = 0; r < size; r++){
    let tr = tbody.insertRow();
    for(let c = 0; c < size; c++){
      let td = tr.insertCell();
      td.setAttribute("id", `r${r}c${c}`);
    }
  }
}

const quiz23 = {
  row: [[1,[0,3]],[1,[5,9]],[2,[9,11]],[3,[2,6]]]
}

const beginning = document.getElementById("beginning");
const quiz = document.getElementById("quiz");
const number = document.getElementById("number");