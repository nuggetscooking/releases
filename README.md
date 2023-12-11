# Nuggets

La bibliothèque Nuggets est un ensemble de snippets pour le logiciel Articulate Storyline 360.
Elle propose un certain nombre de fonctionnalités supplémentaires et permet de simplifier l'intégration de nouvelles. 

Pour en apprendre plus, n'hésitez pas à consulter la **[chaine Youtube](http://www.youtube.com/@nuggets.cooking5653)** et l'**[API en ligne](https://nuggets.cooking/)**. 

## Installation

La bibliothèque doit être incorporée dans le **fichier source `.story`** de votre futur projet. 

Suivant votre cas, vous pouvez :
- **partir de zéro** en utilisant le fichier `.story` d'exemple présent dans le repository,
- **intégrer nuggets** dans un projet dépourvu de la librairie, 
- ou **mettre à jour** la librairie nuggets.

## Fichier source d'exemple

Le repository propore une structure de base pour démarrer votre projet de zéro.
Une fois récupérée, configurez les différentes fonctions nécessaires, puis **let's go!**

> La logique derrière la structure du fichier `.story` utilise à bon escient les déclencheurs et la navigation du player.
> La librairie est ainsi chargée **une seule et unique fois**, quelque soit la reprise contextuelle.
> Les chances donc pour que cette structure change dans le futur sont nulles.
> Pour cette raison, le fichier source d'exemple n'est pas mis à jour.
> Aussi, assurez-vous de toujours récupérer la dernière version de la librairie.<br>
> Référez-vous ensuite à la partie **'Mise à jour'** pour l'intégrer dans votre fichier `.story`.

## Projet `sans` vers un projet `avec nuggets`

Tout projet développé ou pouvant être publié sans problème avec une version récente de Storyline peut facilement implémenter la librairie.

Référez-vous au [tutoriel vidéo sur la chaine Youtube](http://www.youtube.com/@nuggets.cooking5653) (lien vidéo à venir) pour faire les modifications nécessaires à votre fichier source.
Reportez ensuite les 2 snippets ci-dessous dans les déclencheurs javascript respectifs.

### Snippets

#### Masque de diapositive principal
```
const loaded = null!== document.querySelector("[data-id='nuggets']");
GetPlayer().SetVar('nuggetsLoaded',loaded);

```
#### Masque de diapositive `nuggets`
```
(()=>{let e=t=>{if("nuggets"===t.data.origin){if(void 0===t.data.lib||null===t.data.lib)t.source.postMessage({nuggetsID:GetPlayer().GetVar("nuggetsID"),courseID:GetPlayer().GetVar("Project.ActivityId")},"*");else{window.removeEventListener("message",e,!1);let a=e=>{let s=document.createElement("script");document.querySelector("head").appendChild(s);for(let d=0;d<e.length;d+=2)s.setAttribute(e[d],e[d+1]||`${t.data.lib.shift()}`);s.addEventListener("load",()=>{t.data.lib.length?a(t.data.attr):GetPlayer().SetVar("nuggetsLoaded",!0)},!1)};a(t.data.attr)}}};window.addEventListener("message",e,!1)})();
```

## Mise à jour de nuggets

Nous préconisons de ne jamais effacer les anciennes versions de nuggets sans avoir effectué des tests au préalable.

Si votre fichier source `.story` respecte la structure `nuggets` :
- créez une nouvelle diapositive dans la scène réservée,
- importez la version récupérée,
- puis ciblez la bonne diapositive depuis le déclencheur dans le masque de diapositive principal.

Après publication, si un problème apparait, vous pourrez toujours repointer vers l'ancienne version.

## Configuration

Afin de pouvoir utiliser nuggets dans votre projet, vous devez en configurer chacune des fonctionnalités.

Suivant les cas, la configuration peut se faire à un ou plusieurs endroits :
- le déclencheur `javascript` présent dans la diapositive `nuggets`,
- le panneau de variables
- des déclencheurs `javascript` présents dans les diapositives où vous souhaitez utiliser les fonctionnalités.

Reportez-vous à l'**[API en ligne](https://nuggets.cooking/)** pour plus de détails.

## Utilisation
Une fois la librairie nuggets importée, les fonctionnalités configurées, et votre projet monté, il ne vous reste plus qu'à publier votre projet et à contempler votre travail.

Vous pouvez au choix publier en mode **Web**, **SCORM** ou bien sur la plateforme **[Reviews d'Articulate](https://360.articulate.com/review/)**.
