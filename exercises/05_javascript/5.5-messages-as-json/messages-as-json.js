
const contacts = document.getElementById("contacts");
const template = document.getElementById("user-card-template");


document.addEventListener('userDataReady', function(evt){
    console.log(evt.detail.jsonText);
    const obj = JSON.parse(evt.detail.jsonText);


    obj.forEach(user =>{
        console.log(user);     
        const clone = template.content.cloneNode(true);

        const name = clone.querySelector("h1");
        name.textContent = user["firstName"] + " " + user["lastName"];

        const email = clone.querySelector(".title.email");
        email.textContent = user["email"];

        const homepage = clone.querySelector("homepage");
        // homepage.href = user["homepage"];

        const phoneNumber = clone.querySelector("phone");
        phoneNumber.textContent = user["phone"];

        const avatar = clone.querySelector("avatar");
        avatar.src = user["avatar"];

        const address = clone.querySelector(".address").querySelector("p");
        address.textContent = user["address"]["streetAddress"];
        address.nextElementSibling.textContent = 
        user["address"]["zipCode"] + " " + user["address"]["city"];
        address.nextElementSibling.textContent = ["address"]["country"];

        contacts.append(clone);
    });
});

fetchUserData();