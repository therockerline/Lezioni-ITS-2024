let cv = {
    "Nome": "ValoreNome",
    "Cognome": "a",
    "Indirizzo": "b",
    "Tel": "c",
    "Mobile": "d",
    "Email": "e",
    "Sito": "f",
    "Sesso": "g",
    "Ddn": "h",
    "Cittadinanza": "i",
}

let contenitoreCv = document.getElementById('cv')
let contenuto = ""
for (let e of Object.entries(cv)) {
    contenuto += '<div><b>' + e[0] + ':</b> <span>' + e[1] + '</span></div>'
}
contenitoreCv.innerHTML = contenuto


