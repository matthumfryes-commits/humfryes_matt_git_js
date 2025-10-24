const etatDeCaisse = {
    '1': 23, // piece
    '2': 12, // piece
    '5': 10, // billet
    '10': 2, // billet
    '20': 3  // billet
}

const achat = {
    montantAchat: 120,
    montantDonneParClient: 500
}

const retourMonnaie = (etatDeCaisse, achat) => {
    while(achat.montantAchat >= 20)
    {
        etatDeCaisse.20++;
        achat.montantAchat -= 20;
    }
    while(achat.montantAchat >= 10)
    {
        etatDeCaisse.10++;
        achat.montantAchat -= 10;
    }
    while(achat.montantAchat >= 5)
    {
        etatDeCaisse.5++;
        achat.montantAchat -= 5;
    }
    while(achat.montantAchat >= 2)
    {
        etatDeCaisse.2++;
        achat.montantAchat -= 2;
    }
    while(achat.montantAchat >= 1)
    {
        etatDeCaisse.1++;
        achat.montantAchat--;
    }

    let aRendre = achat.montantDonneParClient - achat.montantAchat;

    while(aRendre >= 20 && etatDeCaisse.20 > 0)
    {
        etatDeCaisse.20--;
        aRendre -= 20;
    }
    while(aRendre >= 10 && etatDeCaisse.10 > 0)
    {
        etatDeCaisse.10--;
        aRendre -= 10;
    }
    while(aRendre >= 5 && etatDeCaisse.5 > 0)
    {
        etatDeCaisse.5--;
        aRendre -= 5;
    }
    while(aRendre >= 2  && etatDeCaisse.2 > 0)
    {
        etatDeCaisse.2--;
        aRendre -= 2;
    }
    while(aRendre >= 1  && etatDeCaisse.1 > 0)
    {
        etatDeCaisse.1--;
        aRendre--;
    }

    return etatDeCaisse;
}
