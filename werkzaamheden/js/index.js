const adminlogin = document.querySelector(".adminlogin");

const developer = [
    ["Joris", "wachtwoord_joris"],
    ["Joost", "wachtwoord_joost"]
];


function dev(){
    adminlogin.style.display = "block";
}

document.querySelector("#loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const gebruikersnaam = document.querySelector("#gebruikersnaam").value.trim();
    const wachtwoord = document.querySelector("#wachtwoord").value;

    const isAdmin = developer.some(
        ([naam, ww]) => naam === gebruikersnaam && wachtwoord === ww
    );

    if (isAdmin){
        localStorage.setItem("gebruiker", JSON.stringify({
            gebruikersnaam: gebruikersnaam,
            isAdmin: true
        }));

        window.location.href = "../../voorpagina.html";
    }else {
        alert("Onjuiste gebruikersnaam of wachtwoord");
    }
})

