const form = document.getElementById("form");
const contacts = document.querySelector("div");
const contactTemplate = document.querySelector("template");

const submit = document.getElementById("submit");

submit.addEventListener('click', (event) =>{
    event.preventDefault();
    var formData = new FormData(form);
    var name = formData.get("name");
    var email = formData.get("email");
    var homepage = formData.get("homepage");

    let clone = contactTemplate.content.cloneNode(true);
    clone.querySelector("h2").innerHTML = name;
    clone.querySelector("p.email").innerHTML = email;
    clone.querySelector("p.homepage").querySelector("a").href = homepage;
    clone.querySelector("p.homepage").querySelector("a").innerHTML = homepage;
    form.reset();
    
});