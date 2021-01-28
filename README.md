# Orinoco

Projet 5 du parcours Développeur Web d'OpenClassrooms

Développement de la partie frontend d'un site de e-commerce à partir d'une api mise à disposition (dossier "api").
  
  

## Pour installer ce projet en local, veuillez suivre les étapes suivantes:

**1. Cloner ce dépôt**

```
git clone https://github.com/sebastien-coupe/Orinoco.git orinoco
```  
  

**2. Se placer à la racine du projet**

```
cd orinoco
```  
  

**3. Intaller les dépendances**

```
npm install
```  
  

**4. Compiler les fichiers javascript et css**

```
npm run build
```  
  

## Visualisation du projet

1. Lancer le serveur fournissant l'API et laisser tourner en arrière plan:
```
npm run api
```


2. Pour accéder au projet depuis votre navigateur, plusieurs options:

    * Si python est disponible sur votre machine, placez vous à la racine du projet et lancer l'une de ces commandes selon votre version de python:  

    ```
    # Pour python 2
    python -m SimpleHTTPServer 8000

    # Pour python 3
    python -m http.server
    ```  
    Le site est maintenant accessible depuis l'adresse [http://0.0.0.0:8000/](http://0.0.0.0:8000/)  



    * Utiliser une extension VScode:

    Si vous utilisez VScode, vous pouvez installer l'extension [Live Server](https://github.com/ritwickdey/vscode-live-server) pour visualiser le projet à l'adresse: [http://127.0.0.1:5500](http://127.0.0.1:5500)



    * Si aucune des options précédentes n'est possible:

    Ouvrez le fichier *index.html* directement dans votre navigateur
