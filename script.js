const objects = document.querySelectorAll("article");
let area = [...objects];
const colors = ["pink", "yellow", "blue", "green"];
let match = true;

let gridArea = [
  "area-10",
  "area-11",
  "area-12",
  "area-13",
  "area-20",
  "area-21",
  "area-22",
  "area-23",
  "area-30",
  "area-31",
  "area-32",
  "area-33",
  "area-40",
  "area-41",
  "area-42",
  "area-43",
];

function shuffle() {
  for (let i = area.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = area[j];
    area[j] = area[i];
    area[i] = temp;
  }
}

function check() {
  for (let i = 0; i < area.length; i += 2) {
    if (area[i].className === area[i + 1].className) {
      console.log(
        `${i}, ${area[i].className}, ${i + 1}, ${area[i + 1].className}`
      );
      match = true;
      break;
    } else {
      match = false;
    }
  }
  console.log(match);
}

function display() {
  area.forEach(function (block, index) {
    block.style.gridArea = gridArea[index];
    console.log(block, gridArea[index]);
  });
}

function cut() {
  if (area.length > 4) {
    for (let i = 0; i < colors.length; i++) {
      let element = area.find((obj) => obj.className === colors[i]);
      let index = area.indexOf(element);

      element.style.display = "none";
      area.splice(index, 1);
    }
    gridArea.splice(-4, 4);
    main();
  } else if (area.length == 4) {
    leaveTwo();
    main();
  }
}

function leaveTwo() {
  function removeElement() {
    const index = Math.floor(Math.random() * area.length - 1);
    const element = area.splice(index, 1)[0];
    element.style.display = "none";
  }

  removeElement();
  gridArea.shift();

  removeElement();
  gridArea.pop();
}

function main() {
  do {
    shuffle();
    check();
    if (!match) display();
  } while (match);
}

document.querySelector("#restart").addEventListener("click", function () {
  objects.forEach(function (obj) {
    obj.style.display = "block";
  });
  area = [...objects];
  match = true;

  gridArea = [
    "area-10",
    "area-11",
    "area-12",
    "area-13",
    "area-20",
    "area-21",
    "area-22",
    "area-23",
    "area-30",
    "area-31",
    "area-32",
    "area-33",
    "area-40",
    "area-41",
    "area-42",
    "area-43",
  ];
  display();
});

document.querySelector("#shuffle").addEventListener("click", main);

document.querySelector("#cut").addEventListener("click", cut);
