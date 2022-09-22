
var newList = document.createElement("ul");
newList.className = "list";

var newli = document.createElement("li");

var newLink = document.createElement("a");
newLink.href = "http://localhost:3000/";
newLink.text = "Localhost";

var navUl = document.querySelector("nav");

navUl.appendChild(newList);
newList.appendChild(newLi);
newLi.appendChild(newLink);

var firstLi = document.createElement("li");
firstLi.textContent = "Item 0";

var olPointer = document.querySelector("ol");
olPointer.insertBefore(firstLi,olPointer.firstChild);

var todo = document.getElementById("todo");
todo.classList.remove("navi");