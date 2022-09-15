const addMyButton = document.getElementById("my-button");

addMyButton.addEventListener("click", function () {
  console.log("Hello world");
  document.getElementById("hello").textContent = "My notebook";
});

const addDataButton = document.getElementById("add-data");

/* should add an <li> element with arbitrary text inside the <ul> tag.
instead of some arbitrary text the button should add the text inside the textarea to the <li> tag */
const ulist = document.getElementById("ul");
/*const textarea = document.getElementById("textarea");*/

addDataButton.addEventListener("click", function () {
  const text = Math.random().toString(36).substring(2, 7);
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(text));
  ulist.appendChild(li);
});
