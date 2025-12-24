const nameElement = document.getElementById("nameElement");

const parameters = new URL(window.location.href).searchParams;
const entries = new URLSearchParams(parameters).entries();
const entriesArray = Array.from(entries);

entriesArray.forEach((entry) => {
  let key = entry[0];
  let value = entry[1];

  if (key == "name") {
    let name = value.replace("-", " ");
    nameElement.innerHTML = name;
  }
});
