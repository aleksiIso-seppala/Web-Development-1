

var newLi = document.createElement("li");

var newLink = document.createElement("a");
newLink.href = "http://localhost:3000/";
newLink.text = "Localhost";

var navUl = document.querySelector("ul.navi");
navUl.classList.add("list");

navUl.appendChild(newLi);
newLi.appendChild(newLink);

var firstLi = document.createElement("li");
firstLi.textContent = "Item 0";

var olPointer = document.querySelector("ol");
olPointer.insertBefore(firstLi,olPointer.firstChild);

var todo = document.getElementById("todo");
todo.classList.remove("navi")

todo.getElementsByTagName("li").item(1).remove();