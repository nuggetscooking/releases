
const nuggets = {

  dispatcher: null,

  getFolder: () => {
    const _webObjectFolder = nuggets.dispatcher.src.match(/\w{11}(?!.*\w{11})/).toString();
    return `story_content/WebObjects/${_webObjectFolder}/assets/js/nuggets`;
  },

  initialize: () => {
    if (null===nuggets.dispatcher) {
      nuggets.dispatcher = Query(document,'script',['data-id','nuggets']); // first node is enough
    }
  },

  addEventListener: ($eventType, $handler) => {
    nuggets.initialize();
    nuggets.dispatcher.addEventListener($eventType, $handler, true);
  },

  removeEventListener: ($eventType, $handler) => {
    nuggets.initialize();
    nuggets.dispatcher.removeEventListener($eventType, $handler, true);
  },

  dispatchEvent: ($event, $detail) => {
    nuggets.initialize();
    const _event = $detail 
              ? new CustomEvent($event, {detail: $detail} ) 
              : new Event($event);
    nuggets.dispatcher.dispatchEvent(_event);
  }

};

