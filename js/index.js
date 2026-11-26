const genbruiker = JSON.parse(localStorage.getItem("gebruiker") || "null");
const isAdmin = genbruiker?.isAdmin === true;

const paginaInOnderhoudt = true;

if (paginaInOnderhoudt && !isAdmin){
    window.location.href = "./werkzaamheden/html/index.html"
}