function alph(ch) {
    i = 0
    while ((i < ch.length) && (ch.charAt(i).toUpperCase() >= 'A' && ch.charAt(i).toUpperCase() <= 'Z')) {
        i += 1
    }
    return i == ch.length
}
function estnum() {
    i = 0
    while ((i < ch.length) && (ch.charAt(i) >= '0' && ch.charAt(i) <= '9')) {
        i += 1
    }
    return i == ch.length
}

function verifier() {
    permis = document.getElementById('permis').value
    nom = document.getElementById('nom').value
    prenom = document.getElementById('prenom').value
    femme = document.getElementById('femme').checked
    homme = document.getElementById('homme').checked

    if (permis.length != 8 || permis.charAt(2) != '/' || estnum(permis) == false) {
        alert('permis invalide')
        return false;
    }
    else if (alph(nom) == false || (nom.length < 3 || nom.length > 20)) {
        alert('nom invalide')
        return false
    }
    else if (alph(prenom) == false || (prenom.length < 3 || prenom.length > 20)) {
        alert('prenom invalide')
        return false
    }
    else if (femme == false && homme == false) {
        alert('selection du genre est obligatoire');
        return false
    }

}