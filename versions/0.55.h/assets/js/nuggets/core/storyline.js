
// Communication with Storyline player
const GetVarFromSTL = (...args) => GetPlayer().GetVar(...args);
const UpdateVarInSTL = (...args) => GetPlayer().SetVar(...args);

// Target HTML elements in Storyline player
const GetPreso = () => Query(document,'div',['id','preso']);
const GetCanvas = () => Query(document, 'canvas');
const GetSlide = () => Query(document, 'div', ['class', 'slide-container']);

const GetCaptionContainer = () => Query(document, 'div', ['class', 'caption-container']);
const GetCaption = () => Query(GetCaptionContainer(), 'div', ['class^', 'caption']);
const GetCaptionText = () => Query(GetCaption(), 'p');

const GetOverlay = () => Query(document, 'div', ['class','visible-overlay']);
const GetLightboxWrapper = () => Query(document,'div', ['id','light-box-wrapper']);

// TODO : player buttons

const GetLightboxCloseButton = () => Query(document,'button', ['id','light-box-close']);

const GetToggleFullScreenButton = () => Query(document,'button', ['id','full-screen-toggle']);
const GetMenuButton = () => Query(document,'button', ['id','hamburger']);

// Events
const STORYLINE_EVENTS = {
    DISPLAY_CAPTION: 'displayCaption',
    CHANGE_CAPTION: 'changeCaption',
    REMOVE_CAPTION: 'removeCaption',

    SCENE_CHANGE: 'onSceneChange',
    SLIDE_CHANGE: 'onSlideChange',

    OPEN_LIGHTBOX: 'openLightbox',
    CLOSE_LIGHTBOX: 'closeLightbox'
};


const storyline = {

    currentState: { caption: null, sceneId: null, slideId: null },

    
    /* -------------------- *
     *        CAPTION       *
     * -------------------- */

    changeCaptionHandler: () => {
        const _previous = storyline.currentState.caption,
            _current = GetCaptionText();

        const _eventName =  !_current ? STORYLINE_EVENTS.REMOVE_CAPTION :
                                !_previous ? STORYLINE_EVENTS.DISPLAY_CAPTION : 
                                    STORYLINE_EVENTS.CHANGE_CAPTION;

        nuggets.dispatchEvent(_eventName);
        storyline.currentState.caption = _current;
    },

    captionObserver: null,
    watchCaption: () => {
        if ( null===storyline.captionObserver ) {
            storyline.captionObserver = new MutationObserver(storyline.changeCaptionHandler);
            storyline.captionObserver.observe(GetCaption(), { childList: true, subtree: true } );
        }
    },


    /* -------------------- *
     *      SCENE/SLIDE     *
     * -------------------- */

    changeSlideHandler: () => {
        const _dataElement = Query(GetSlide(), 'div', ['data-reactid^', '.0.0.1.0:$_player']);
        const _ids = _dataElement.dataset.reactid.match(/(=[a-zA-Z0-1])\w+/g);
        
        const newSceneId = _ids[0].substring(1);
        if ( newSceneId!==storyline.currentState.sceneId ) {
            nuggets.dispatchEvent(STORYLINE_EVENTS.SCENE_CHANGE,{sceneId:(storyline.currentState.sceneId=newSceneId)});
        }

        const newSlideId = _ids[1].substring(1);
        if ( newSlideId!==storyline.currentState.slideId ) {
            nuggets.dispatchEvent(STORYLINE_EVENTS.SLIDE_CHANGE,{slideId:(storyline.currentState.slideId=newSlideId)});
        } 
    },

    slideObserver: null,
    watchSlide: () => {
        if ( null===storyline.slideObserver ) {
            storyline.slideObserver = new MutationObserver(storyline.changeSlideHandler);
            storyline.slideObserver.observe(GetSlide(), { childList: true, attributes: true } );
        }
    },



    /* -------------------- *
     *       LIGHTBOX       *
     * -------------------- */    

    lightBoxCurrentState:false,
    changePresoHandler: () => { 

        const _permutState = ($state) => {            
            nuggets.dispatchEvent( (storyline.lightBoxCurrentState = $state) ? 
                    STORYLINE_EVENTS.DISPLAY_LIGHTBOX : 
                    STORYLINE_EVENTS.REMOVE_LIGHTBOX );
        }

        if ( null!==GetLightboxWrapper() ) {
            if ( false===storyline.lightBoxCurrentState ) { _permutState(true) }
        } else {
            if ( true===storyline.lightBoxCurrentState ) { _permutState(false) }
        }
    },

    presoObserver: null,
    watchLightbox: () => {
        if ( null===storyline.presoObserver ) {
            storyline.presoObserver = new MutationObserver(storyline.changePresoHandler);
            storyline.presoObserver.observe(GetPreso(),{ childList: true, subtree: true, attributes: true });  
        }
    }



}
