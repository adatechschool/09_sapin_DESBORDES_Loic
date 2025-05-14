

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


function afficherEtage(hauteur, pointe_offset) {

    let pointe = "";
    for (let i = 0; i < hauteur; i++) {
        pointe += " ";
    }
    pointe += "+";
    console.log(pointe)

    for (let i = pointe_offset; i < hauteur + pointe_offset; i++) {  
        
        let result = "";
        for (let j = 0; j < hauteur-i-1; j++) {
            result += " "
        }
        result += "/";
        for (let k = 0; k < i; k++) {
            result += "*";
        }
        result += "|";
    
        for (let j = 0; j < i; j++) {
            result += "*";
        }
    
        result += "\\";
    
        console.log(result)
    } 
}

afficherEtage(3, 0)
afficherEtage(3, 1) 
afficherEtage(3, 2) 


//   /|\
//  /*|*\
// /**|**\
//   /*|*\
//  /**|**\
// /***|***\
//   /**|**\
//  /***|***\
// /****|****\
