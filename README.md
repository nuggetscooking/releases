![logo](/assets/images/nuggets-logo-small.png)

The Nuggets library is a set of snippets for the **`Articulate Storyline 360`** software.
It offers a number of **additional functionalities** and **simplifies** the integration of new ones. 

To find out more, check out the **[Youtube channel](http://www.youtube.com/@nuggets.cooking5653)** and the **[online API](https://nuggets.cooking/)**. 

## Installation

The library must be incorporated into the `.story` source file of your future project. 

Depending on the situation, you can :
- **start from scratch** using the reference `.story` file in this repository,
- **integrate nuggets** into a project without the library, 
- or **update** the nuggets library.

## Reference source file

The repository provides a basic structure for starting your project from scratch.

> The logic behind the structure of the `.story` file makes good use of the storyline player's triggers and navigation.
> In this way, the library is loaded **only once**, whatever the contextual restart.
> So the chances of this structure changing in the future are nil.
> For this reason, the reference source file will be not updated.
> So make sure you always have the latest version of the library in.<br>
> Then refer to the section **'Updating nuggets'** to integrate it into your `.story` file.

Once downloaded, configure the necessary functions, then let's go!

## Project `without` towards a project `with nuggets`.

Any project that has been developed or can be published with a recent version of Storyline can easily implement the library.

Refer to the tutorial on the **[Youtube channel](http://www.youtube.com/@nuggets.cooking5653)** (video link coming soon) to make the necessary changes to your source file. Then copy/past the snippets below to the respective javascript triggers.

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

## Updating nuggets

We strongly recommend not deleting old versions of nuggets without testing updates first.

If your `.story` source file respects the `nuggets` structure:
- create a new slide in the `nuggets` dedicated scene,
- import the last version,
- then target the correct slide from the trigger in the main  mask.

After publishing, if a problem arises, you can always revert to the previous version.

## Configuration

To use nuggets in your project, you need to configure each of its functions.

Depending on the requirements, the configuration needs to be done in one or several spots:
- the `javascript` trigger in the `nuggets` slide,
- the `variables` panel and
- `javascript` triggers in the slides where you want to use the power of nuggets.

See the **[API online](https://nuggets.cooking/)** for more details.

## Usage
Once you've imported and configured the nuggets library, built your project, all that's left to do is publish it and admire your work.

You can choose to publish either in **Web**, **SCORM** or on the **[Articulate Reviews](https://360.articulate.com/review/)** platform.
