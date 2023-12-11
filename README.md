# Nuggets

The Nuggets library is a set of snippets for the Articulate Storyline 360 software.
It offers a number of additional functionalities and simplifies the integration of new ones. 

To find out more, check out the **[Youtube channel](http://www.youtube.com/@nuggets.cooking5653)** and the **[online API](https://nuggets.cooking/)**. 

## Installation

The library must be incorporated into the `.story` source file of your future project. 

Depending on your situation, you can :
- **start from scratch** using the reference `.story` file in this repository,
- **integrate nuggets** into a project without the library, 
- or **update** the nuggets library.

## Reference source file

The repository provides a basic structure for starting your project from scratch.
Once downloaded, configure the necessary functions, then **let's go!**.

> The logic behind the structure of the `.story` file makes good use of the player's triggers and navigation.
> In this way, the library is loaded **only once**, whatever the contextual restart.
> So the chances of this structure changing in the future are nil.
> For this reason, the reference source file will be not updated.
> So make sure you always have the latest version of the library.<br>
> Then refer to the section **'Update'** to integrate it into your `.story` file.

## Project `without` towards a project `with nuggets`.

Any project that has been developed or can be published with a recent version of Storyline can easily implement the library.

Refer to the video tutorial on the **[Youtube channel](http://www.youtube.com/@nuggets.cooking5653)** (video link coming soon) to make the necessary changes to your source file. Then copy/past the snippets below to the respective javascript triggers.

### Snippets

#### Main mask
```
const loaded = null!== document.querySelector("[data-id='nuggets']");
GetPlayer().SetVar('nuggetsLoaded',loaded);

```
#### `nuggets ` mask
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
