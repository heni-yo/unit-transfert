let convertBtn = document.getElementById("convert-btn");
let element = document.getElementById("ele");
let unitArray = [
  { title: "Length", unit1: "meters", unit2: "feet" },
  { title: "Volume", unit1: "liters", unit2: "gallons" },
  { title: "Mass", unit1: "kilos", unit2: "pounds" },
];

let changeable = (unit, num) => `
<div class="element" id="element">
    <h3>${unit.title} (${unit.unit1}/${unit.unit2})</h3>
    <p>${num} ${unit.unit1} = ${fromTo(unit.unit1, num)} ${unit.unit2} | ${num} ${unit.unit2} = ${fromTo(unit.unit2, num)} ${unit.unit1}</p>
</div>
`;
function convert(num) {
  let substitute = "";
  for (let i = 0; i < unitArray.length; i++) {
    substitute += changeable(unitArray[i], num);
  }
  element.innerHTML = substitute;
}

convertBtn.addEventListener("click", function () {
  let value = document.getElementById("value");
  convert(Number(value.value));
});

function fromTo(unit, num) {
  if (unit === "meters") {
    return (num * 3.281).toFixed(3);
  } else if (unit === "feet") {
    return (num / 3.281).toFixed(3);
  } else if (unit === "liters") {
    return (num * 0.264).toFixed(3);
  } else if (unit === "gallons") {
    return (num / 0.264).toFixed(3);
  } else if (unit === "kilos") {
    return (num * 2.204).toFixed(3);
  } else if (unit === "pounds") {
    return (num / 2.204).toFixed(3);
  }
}
