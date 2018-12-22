function insert_Row() {
  var x = document.getElementById("sampleTable").insertRow(0);
  var y = x.insertCell(0);
  var z = x.insertCell(1);
  y.innerHTML = "New Cell1";
  z.innerHTML = "New Cell2";
}

const insertListItem = () => {
  const list = document.querySelector(".list");
  const newItem = document.createElement("li");
  newItem.innerHTML = prompt("What is the next item on the list?");
  list.appendChild(newItem);
};

const removeListItem = () => {
  const list = document.querySelector(".list");
  list.removeChild(list.lastChild);
};
