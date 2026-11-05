# Aubin Tseyep — IT Infrastructure & Cybersecurity

Infrastructure and systems engineer based in Windsor, Ontario, and a cybersecurity student at St. Clair College. My work brings together enterprise infrastructure, data protection and academic research into privacy and Zero Trust.

- **Professional portfolio:** [https://aubintseyep-gif.github.io/](https://aubintseyep-gif.github.io/)
- **LinkedIn:** [Aubin Tseyep](https://ca.linkedin.com/in/aubin-tseyep-916245371)
- **Research interests:** privacy, cybersecurity governance, Zero Trust and cyber resilience.

Ingénieur infrastructure et systèmes à Windsor, je poursuis mes études en cybersécurité au St. Clair College. Ce portfolio présente mon expérience professionnelle, mes travaux universitaires et mon engagement au Club de cybersécurité.

---

# Code du portfolio — GitHub Pages

Version prête pour GitHub Pages : infrastructure informatique, cybersécurité, recherche universitaire, photos professionnelles et vidéo. Le site fonctionne en français et en anglais. Le contact passe par LinkedIn ; l’adresse courriel personnelle n’est pas dans le HTML ou le JavaScript.

## Publier avec une adresse gratuite github.io

Avec GitHub Free, utilisez un dépôt public pour GitHub Pages. Le code et les médias de ce dépôt seront donc publics.

1. Connectez-vous à votre compte GitHub.
2. Créez un dépôt **Public** nommé exactement `VOTRE_IDENTIFIANT.github.io`, en remplaçant `VOTRE_IDENTIFIANT` par votre identifiant GitHub. Pour le nom du dépôt, utilisez des minuscules.
3. Dans le dépôt, choisissez **Add file > Upload files**. Déposez le **contenu** du dossier décompressé : `index.html`, les fichiers CSS et JavaScript, `.nojekyll`, ce README et le dossier `assets`.
4. Vérifiez que `index.html` se trouve directement à la racine du dépôt, et non dans un sous-dossier `dist` ou `Aubin_Tseyep_GitHub_Pages`. Validez l’envoi avec **Commit changes**.
5. Ouvrez **Settings > Pages**.
6. Sous **Build and deployment > Source**, choisissez **Deploy from a branch**.
7. Choisissez la branche **main** et le dossier **/(root)**, puis cliquez sur **Save**.
8. Attendez la fin du déploiement. Dans **Settings > Pages**, utilisez **Visit site**. La première publication peut prendre jusqu’à environ dix minutes.

L’adresse sera de la forme `https://VOTRE_IDENTIFIANT.github.io/`. Cette adresse dépend de votre identifiant réel ; le nom utilisé ici est un exemple à remplacer.

Le fichier `.nojekyll` permet de publier directement ces fichiers statiques. Aucun outil de compilation ou serveur applicatif n’est nécessaire.

## Fichiers du site

- `index.html` : page et textes bilingues.
- `styles.css` : fond technologique, couleurs et adaptation mobile.
- `app.js` : langues, navigation, portraits, galerie et synthèses.
- `research-data.js` : travaux de recherche.
- `work-data.js` : projets techniques.
- `assets/` : portraits, photos, arrière-plan et vidéo.

Les liens vers les ressources sont relatifs. Le site peut également fonctionner comme site de projet sous une adresse `https://VOTRE_IDENTIFIANT.github.io/NOM_DU_DEPOT/`.

## Aperçu local

Depuis ce dossier, avec Python 3 installé :

```bash
python3 -m http.server 8000
```

Sous Windows :

```powershell
py -m http.server 8000
```

Ouvrez `http://localhost:8000` dans votre navigateur. Arrêtez le serveur avec `Ctrl+C`.

## Mise à jour

Modifiez les fichiers puis envoyez les modifications sur la branche `main`. Le déploiement Pages associé à cette branche publiera la nouvelle version.

L’ancienne adresse ChatGPT Sites n’est pas intégrée à cette version. Une fois l’adresse GitHub définitive connue, vous pouvez ajouter dans l’en-tête de `index.html` :

```html
<meta property="og:url" content="https://VOTRE_IDENTIFIANT.github.io/">
```

Remplacez l’adresse d’exemple par l’adresse réelle du site avant de l’ajouter.

## Documentation officielle

- https://docs.github.com/en/pages/quickstart
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

