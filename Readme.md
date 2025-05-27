# Coffee Machine - Modélisation

## Business : Coffee Machine

La machine à café est un système automatisé permettant à un utilisateur d'acquérir un café selon différents parfums. Elle repose sur un enchaînement d'actions simples :

1. **Paiement** : l'utilisateur insère une somme d'argent dans la machine.
2. **Choix** : l'utilisateur sélectionne un parfum de café parmi les options proposées (ex : vanille, caramel, noisette).
3. **Distribution** : si le paiement est valide et que le parfum est disponible, la machine prépare et sert le café.

Ce processus vise à simplifier l’achat de café personnalisé de manière autonome, sans intervention humaine. La machine à café peut être utilisée dans divers contextes (entreprises, gares, universités, etc.).

---

## Use Cases

### Acteur principal

- **Utilisateur** : personne utilisant la machine pour acheter un café aromatisé.

### Cas d'utilisation fonctionnels

1. **Payer** : l'utilisateur insère de l'argent dans la machine.
2. **Choisir un parfum** : il sélectionne un parfum disponible sur l'interface.
3. **Recevoir le café (getCoffee)** : après validation du paiement, le café avec le parfum choisi est servi.
4. **Annuler la commande** : possibilité d’annuler tant que le café n’a pas été servi.

---

## Erreurs possibles

La machine peut rencontrer plusieurs types d’erreurs pendant l’utilisation :

- **Paiement insuffisant** : le montant inséré est inférieur au prix du café.
- **Parfum non disponible** : le parfum choisi est en rupture de stock.
- **Choix invalide** : sélection d’un parfum qui n'existe pas.
- **Panne de la machine** : dysfonctionnement technique empêchant le service normal.

Ces erreurs doivent être traitées par la machine avec des messages clairs à l’utilisateur.

---

## Modélisation

La modélisation du système repose sur l'identification des entités, de leurs responsabilités et des interactions possibles. Voici une description conceptuelle du système :

### Entités principales

- **Machine à café** : responsable de la gestion des paiements, des choix de parfums et de la distribution.
- **Utilisateur** : initie les actions de paiement et de sélection.
- **Parfum** : objet représentant une saveur de café (nom, prix, quantité).

### Comportement général

1. L’utilisateur insère de l’argent.
2. Il choisit un parfum parmi les options affichées.
3. La machine vérifie la validité du paiement et la disponibilité du parfum.
4. Si tout est correct, la machine prépare et sert automatiquement le café.
5. Sinon, un message d’erreur est affiché (et le solde peut être restitué ou une nouvelle tentative permise).

### Schéma conceptuel

```text
+------------------+
|  Utilisateur     |
+------------------+
        |
        v
+-----------------------+
|     Machine à café     |
|-----------------------|
| + solde               |
| + parfums             |
|-----------------------|
| + insérerArgent()     |
| + choisirParfum()     |
| + distribuerCafe()    |
+-----------------------+
        |
        v
+------------------+
|     Parfum        |
|------------------|
| + nom            |
| + prix           |
| + quantité       |
+------------------+
```
