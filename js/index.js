const isAdmin = localStorage.getItem("gebruiker");
const paginaInOnderhoudt = 0;

if (paginaInOnderhoudt === 0){
    return;
}else {
    if (isAdmin === 0) {
    window.location.href("./werkzaamheden/html/index.html");
    }else{
        if (localStorage.getItem("gebruiker")[0] == "true"){
            return;
        }else{
            window.location.href("./werkzaamheden/html/index.html");
        }
    }
}
