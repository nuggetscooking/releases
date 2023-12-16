# Vers. 0.5.4
## 2023.12.11
### **First publication of the library**

| Category | Object | TODO | **Known issue:**  |
| :----: | :----: | ------ | ------ |
| `core` | `storyline` | `SLIDE_CHANGE_IN_LIGHTBOX` | |
|  |  | Create `Get` function to targeting player buttons | |
| `customization` | `CustomCSS` | Use W3C based `CSSStyleSheet` rules insteed direct cssText when needed | |
|  | `Caption` | Replace Caption container either in accordance of <br>  • the video space (`true`), <br>  • the slide space (`false`) or <br>  • the browser space (no action). |  |
|  | `CaptionBBCode`| manage `alignment` |  |
|  | `Lightbox` | ResetSize (to 100% of the main diapo size) |  |
|  |  | Replace (to the same position of the main diapo, event with menu open |  |
| `webobjects` | `WebObject` | `postMessage` from Storyline to the Web Object | Since security policy with top page/iframe on local drive, works only on a server  |
