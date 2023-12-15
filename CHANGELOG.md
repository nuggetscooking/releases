# Vers. 0.5.4
## 2023.12.11
### **First publication of the library**
#### TODO



| Category | Object | TODO | **Known issue:**  |
| :----: | :----: | ------ | ------ |
| `core` | `storyline` | Create `Get` function to targeting player buttons | |
| `customization` | `CustomCSS` | Use W3C based `CSSStyleSheet` rules insteed direct cssText when needed | |
|  | `Caption` | Replace Caption container either in accordance of <br>  • the video space `(true)`, <br>  • the slide space `(false)` or <br>  • the browser space (no action). |  |
|  | `CaptionBBCode`| manage `alignment` |  |
|  | `Lightbox` | ResetSize (to 100% of the main diapo size) |  |
|  |  | Replace (to the same position of the main diapo, event with menu open |  |
| `webobjects` | `WebObject` | `postMessage` from Storyline to the Web Object | Since security policy with top page/iframe on local drive, works only on a server  |



- `core.storyline`
  -   Storyline player buttons not targeted  
  
- `customization.CustomCSS`
  - W3C based CSSStyleSheet rules insteed direct cssText
 
- `customization.Caption`
  - replace GetCaptionContainer() either in accordance of the video space (true), the slide space (false) or the browser space (no action).

-  `customization.CaptionBBCode`
    -   alignment

-  `customization.Lightbox`
    -   resetSize (to 100% of the main diapo size)
    -   replace (to the same position of the main diapo, event with menu open
      
- `webobjects.WebObject` 
    -   postMessage from Storyline to the Web Object
    -   **Known issue:** Since security policy with top page/iframe on local drive, works only on a server
