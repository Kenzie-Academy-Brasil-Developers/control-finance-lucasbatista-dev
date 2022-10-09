//----------------------------- CAPTURANDO ELEMENTOS HTML

const ulValues = document.querySelector(".valuesList");
const btnInsertValue = document.getElementById("addValue");
const inputValue = document.getElementById("newValue");
const inputIn = document.getElementById("in-modal");
const inputOut = document.getElementById("out-modal");
const type = document.querySelector("#type");
const sectionValues = document.querySelector(".sectionItens");

const filterAll = document.getElementById("all");
const filterIn = document.getElementById("in");
const filterOut = document.getElementById("out");
const resultSum = document.querySelector(".resultSum");

let insertedValues = [];

//------------------------------ RENDERIZANDO TODOS
filterAll.onclick = () => {
  ulValues.innerHTML = "";
  resultSum.innerHTML = "";
  setValuesAll();
  sumAll();
};

//------------------------------ RENDERIZANDO ENTRADAS
filterIn.onclick = () => {
  ulValues.innerHTML = "";
  resultSum.innerHTML = "";
  setValuesIn();
  sumIn();
};

//------------------------------ RENDERIZANDO SAIDAS
filterOut.onclick = () => {
  ulValues.innerHTML = "";
  resultSum.innerHTML = "";
  sumOut();
  setValuesOut();
};

btnInsertValue.onclick = () => {
  insertedValues.push({
    value: Math.abs(inputValue.value).toFixed(2),
    type: type.value,
  });
  setItensLocal();
  inputValue.value = "";
  setValuesAll();
  sumAll();
};
//--------------------------------- Delete Values

function deleteValues(index) {
  insertedValues.splice(index, 1);
  setItensLocal();
  setValuesAll();
  sumAll();
}

//Criar função responsável por receber um HTML e renderizar em tela

// function render(array) {}

function renderValues(element, index) {
  let ul = document.querySelector(".valuesList").insertAdjacentHTML(
    "afterbegin",
    `
    <li>
    <p>R$${element.value}</p>
    <div>
      <button class="button-in">${element.type}</button>
      <button onclick="deleteValues(${index})" class="button-trash"></button>
    </div>
  </li>
    `
  );
}

//-----------------------------------

function setValuesAll() {
  insertedValues = getItensLocal();
  ulValues.innerHTML = "";
  insertedValues.forEach((item, index) => {
    renderValues(item, index);
  });
}

function setValuesIn() {
  insertedValues = getItensLocal();
  ulValues.innerHTML = "";
  insertedValues
    .filter((element) => element.type === "Entrada")
    .forEach((item, index) => {
      renderValues(item, index);
    });
}

function setValuesOut() {
  insertedValues = getItensLocal();
  ulValues.innerHTML = "";
  insertedValues
    .filter((element) => element.type === "Saida")
    .forEach((item, index) => {
      renderValues(item, index);
    });
}
// --------------------------------- SOMA

// --------------------------------- TOTAL
function sumAll() {
  const entryVaues = insertedValues
    .filter((element) => element.type === "Entrada")
    .map((value) => Number(value.value));

  const outputVaues = insertedValues
    .filter((element) => element.type === "Saida")
    .map((value) => Number(value.value));

  const sumEntries = entryVaues
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toFixed(2);

  const sumOutputs = Math.abs(
    outputVaues.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    )
  ).toFixed(2);

  let allValues = Number(sumEntries) + Number(sumOutputs);

  resultSum.innerHTML = `R$ ${allValues},00`;
}

// --------------------------------- ENTRADAS

function sumIn() {
  const entryVaues = insertedValues
    .filter((element) => element.type === "Entrada")
    .map((value) => Number(value.value));

  const sumEntries = entryVaues
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
    .toFixed(2);

  let allValues = Number(sumEntries);

  resultSum.innerHTML = `R$ ${allValues},00`;
}

// --------------------------------- SAIDAS

function sumOut() {
  const outputVaues = insertedValues
    .filter((element) => element.type === "Saida")
    .map((value) => Number(value.value));

  const sumOutputs = Math.abs(
    outputVaues.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    )
  ).toFixed(2);

  let allValues = Number(sumOutputs);

  resultSum.innerHTML = `R$ ${allValues},00`;
}

// ---------------------------------- LOCAL STORAGE

const getItensLocal = () =>
  JSON.parse(localStorage.getItem("local_values")) ?? [];

const setItensLocal = () =>
  localStorage.setItem("local_values", JSON.stringify(insertedValues));

console.log(getItensLocal());
// setValuesAll();
