const tagUl = document.querySelector(".valuesList");
const tagResults = document.querySelector(".result");
const tagSection = document.querySelector(".sectionItens");
const newValue = document.querySelector("#newValue");
const addValue = document.querySelector("#addValue");
let insertedValuesfilteredIn = [];
let insertedValuesfilteredOut = [];
let insertedValuesfilteredAll = [];

// criando array apenas com a key value da database
insertedValues.map((item) => {
  item.value;
  if (item.value > 0 && item.categoryID == 1) {
    insertedValuesfilteredIn.push(item.value);
  }
});
insertedValues.map((item) => {
  item.value;
  if (item.value > 0 && item.categoryID == 2) {
    insertedValuesfilteredOut.push(item.value);
  }
});
insertedValues.map((item) => {
  item.value;
  if (item.value > 0) {
    insertedValuesfilteredAll.push(item.value);
  }
});

// calculando o valor do array para depois utilizar no "soma dos valores"
let countValuesAll = insertedValuesfilteredAll.reduce(
  (previousValue, currentValue) => {
    return previousValue + currentValue;
  }
);
let countValuesIn = insertedValuesfilteredIn.reduce(
  (previousValue, currentValue) => {
    return previousValue + currentValue;
  }
);
let countValuesOut = insertedValuesfilteredOut.reduce(
  (previousValue, currentValue) => {
    return previousValue + currentValue;
  }
);

// renderizando valores adicionados a dataBase

function insertSumValuesAll() {
  document.querySelector(".result").insertAdjacentHTML(
    "afterbegin",
    `<p>Soma dos valores</p>
          <p>R$${countValuesAll.toFixed(2)}</p>`
  );
}
function insertSumValuesIn() {
  document.querySelector(".result").insertAdjacentHTML(
    "afterbegin",
    `<p>Soma dos valores</p>
          <p>R$${countValuesIn.toFixed(2)}</p>`
  );
}
function insertSumValuesOut() {
  document.querySelector(".result").insertAdjacentHTML(
    "afterbegin",
    `<p>Soma dos valores</p>
          <p>R$${countValuesOut.toFixed(2)}</p>`
  );
}

// renderizando database
function insertDataAll(dataBase) {
  dataBase.forEach((element) => {
    document.querySelector(".valuesList").insertAdjacentHTML(
      "afterbegin",
      `
      <li>
      <p>R$${element.value}</p>
      <div>
        <button class="button-in">${
          element.categoryID === 1 ? `Entrada` : `Saída`
        }</button>
        <button class="button-trash"></button>
      </div>
    </li>
      `
    );
  });
}
function insertDataIn(dataBase) {
  dataBase.forEach((element) => {
    if (element.categoryID == 1) {
      document.querySelector(".valuesList").insertAdjacentHTML(
        "afterbegin",
        `
      <li>
      <p>R$${element.value.toFixed(2)}</p>
      <div>
        <button class="button-in">${
          element.categoryID === 1 ? `Entrada` : `Saída`
        }</button>
        <button class="button-trash"></button>
      </div>
    </li>
      `
      );
    }
  });
}
function insertDataOut(dataBase) {
  dataBase.forEach((element) => {
    if (element.categoryID == 2) {
      document.querySelector(".valuesList").insertAdjacentHTML(
        "afterbegin",
        `
      <li>
      <p>R$${element.value.toFixed(2)}</p>
      <div>
        <button class="button-in">${
          element.categoryID === 1 ? `Entrada` : `Saída`
        }</button>
        <button class="button-trash"></button>
      </div>
    </li>
      `
      );
    }
  });
}
function insertEmptyDiv() {
  document.querySelector(".sectionItens").insertAdjacentHTML(
    "afterbegin",
    `<div class="empty">
      <h3>Nenhum valor cadastrado</h3>
      <p>Registrar novo valor</p>
    </div>`
  );
}
function empty(dataBase) {
  dataBase.indexOf((element) => {
    if (element == -1) {
      return insertEmptyDiv();
    }
  });
}
empty(insertedValues);
// adicionando evento de clique

const inputAll = document
  .querySelector("#all")
  .addEventListener("click", () => {
    tagUl.innerHTML = "";
    tagResults.innerHTML = "";
    insertDataAll(insertedValues);
    insertSumValuesAll();
  });
const inputIn = document.querySelector("#in").addEventListener("click", () => {
  tagUl.innerHTML = "";
  tagResults.innerHTML = "";
  insertDataIn(insertedValues);
  insertSumValuesIn(insertedValuesfilteredIn);
});

const inputOut = document
  .querySelector("#out")
  .addEventListener("click", () => {
    tagUl.innerHTML = "";
    tagResults.innerHTML = "";
    insertDataOut(insertedValues);
    insertSumValuesOut(insertedValuesfilteredOut);
  });

// adicionando novos valores
addValue.onclick = () => {
  insertedValues.push({
    id: "",
    value: parseInt(newValue.value),
    categoryId: 1,
  });
  inputAll;
  newValue = "";
  tagUl.innerHTML = "";
  tagResults.innerHTML = "";
};
