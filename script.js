

function afficherEtoiles(n) {
    let etoiles = "";
    for (let i = 0; i < n; i++) {
        etoiles += "*";
    }
    console.log(etoiles)
}

function afficherRectangle(hauteur, largeur) {
    for (let i = 0; i < hauteur; i++) {
        afficherEtoiles(largeur); 
    }
}
  
function afficherTriangleDroite(n) {   
    for (let i = 0; i < n; i++) {  
        let result = "";
        for (let j = 0; j < i; j++) {
            result += "*";
        }
        result += "\\";
        console.log(result); 
    }
}

function afficherTriangleGauche(n) {
    for (let i = 0; i < n; i++) {  
        let result = "";
        for (let j = 0; j < n-i-1; j++) {
            result += " "
        }
        result += "/";
        for (let k = 0; k < i; k++) {
            result += "*";
        }
        console.log(result); 
    }
}
  

function afficherPointeSapin(hauteur) {
    //    +
    //   /|\
    //  /*|*\
    // /**|**\
    ///***|***\
    
    let pointe = "";
    for (let i = 0; i < hauteur; i++) {
        pointe += " ";
    }
    
    pointe += "+";
    
    console.log(pointe)
}
  
afficherPointeSapin(4)

