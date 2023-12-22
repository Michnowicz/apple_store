
let inventaire = [
    {
        id: 1,
        type:"pc portable",
        nom:"Macbook air",
        prix: 1299
    },
    {
        id: 2,
        type:"pc portable",
        nom:"Macbook pro",
        prix: 2029
    },
    {
        id:3,
        type:"pc fixe",
        nom:"iMac",
        prix: 1619
    },
    {
        id: 4,
        type:"pc fixe",
        nom:"Mac mini",
        prix: 719
    },
    {
        id: 5,
        type:"pc fixe",
        nom:"Mac pro",
        prix: 8399
    }
]

let client = {
    panier:[],
    dette: 0
}


let choice = confirm("Bienvenue chez Appeul©. Voulez-vous entrer dans le magasin?")

if (choice == false) {
    alert("De toute façon vous êtes trop pauvre pour nous, espèce de pequenot.")
} else {
    let choice = confirm("Voulez-vous voir nos articles?")
    if (choice == false) {
        alert("Du balais paysan!")
    } else {
        let newArticle = "o"
        while (newArticle == "o") {
            // boucle pour afficher les objets
            let objets = ""
            let tab = []
            inventaire.forEach(inv => {
                objets = objets + inv.type + " : " + inv.nom + "\n"
                tab.push(inv.nom.toLowerCase())
            });
            
            //boucle selection d'objet
            let article = ""
            do {
                article = prompt("Voici la liste des articles disponibles:\n" + objets + "\nEcrivez le nom du produit que vous voullez acquerir.").toLowerCase()
            } while (tab.includes(article) == false);
            client.panier.push(article)

            newArticle = prompt("Désirez-vous autre chose? (o/n)").toLowerCase()
            while (newArticle != "o" && newArticle != "n") {
                newArticle = prompt("Mes excuses, nous n'avons pas cet article en rayon.\n Désirez-vous autre chose? (o/n)").toLowerCase()
            }
        }

        //caisse
        alert("Il est temps de passer en caisse.")
        let caisseText = "Voici votre facture:\n"
        inventaire.forEach(element => {
            if (client.panier.includes(element.nom.toLowerCase()) == true) {
                client.dette = client.dette + element.prix
                caisseText = caisseText + element.nom + " : " + element.prix + " €\n"
            }
        });
        
        choice = confirm(caisseText + "\nTotal: " + client.dette + " €\nDésirez-vous payer?")
        if (choice == false) {
            alert("Hors de ma vue margoulin!")
        } else {
            alert("Merci de votre achat pigeon.")
        }
    }
}