# Projet-Loto

1. Introduction

L'exercice d'aujourd'hui consiste à vérifier si la grille de Loto d'un joueur est gagnante, et si les données qu'il a renseigné pour être recontacté son valides afin qu'il soit payé 💵

Tu devras donc tester l'adresse mail du joueur selon des conditions, vérifier qu'il ait bien rempli un nom et un prénom ainsi que tester si sa grille est complète et gagnante.

Via cet exercice, tu travailleras les notions de tableaux, certaines méthodes, les comparateurs, include, ainsi que les boucles.
2. Le projet

Le projet du jour te demandera de créer une page HTML dans un fichier index.html avec un formulaire demandant plusieurs informations :

    Un prénom
    Un nom
    Une adresse email
    6 chiffres qui correspondent aux 6 numéros du loto que l'on veut jouer (à toi de voir comment tu veux gérer les 6 chiffres, soit 6 inputs soit on les sépare par des , ...).

Un bouton doit permettre de valider le formulaire. Une fois le formulaire validé, tu devras appeler une fonction javascript écrite dans un fichier index.js.

Cette fonction devrai être prototypé comme ci dessous : javascript const checkLoto = (firstname, lastname, email, lotoNumbers) => {} Elle devra vérifier si toutes les informations saisies sont correctes et ensuite si le joueur a gagné (avec 6 chiffres tirés au hasard comme pour le projet d'hier).

Ta fonction devra afficher sur la page HTML un des messages suivants :

    Veuillez fournir un prénom (quand elle reçoit un prénom vide)
    Veuillez fournir un nom (quand elle reçoit un nom vide)
    Veuillez fournir un email (quand elle ne reçoit pas d'email)
    Votre email n'est pas valide (lorsque l'email ne fournit n'est pas au bon format)
    Désolé vous avez perdu, les nombres gagnants sont : x1, x2, x3, x4, x5, x6 (à remplacer par les 6 chiffres tirés aléatoirement).
    Félicitations vous avez gagné 1 million !!!!!

Voici les critères à respecter pour l'email, renseigne toi sur les regex :

    Doit faire + de 8 caractères
    Doit faire - de 30 caractères
    Doit contenir un @ et un point
    Doit contenir 2 ou 3 lettres après le point

Pour tester ton message de victoire n'hésite pas à forcer un peu la chance, ça prendrait beaucoup d'essais si on remplaçait pas 6 chiffres aléatoires pas 6 chiffres en bruts.
