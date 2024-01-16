










var Keyboard = {
  initialize: () => {
    console.log("shortcuts init");
    document.addEventListener('keydown', Keyboard.onKeyDown);
    document.addEventListener('keyup', Keyboard.onKeyUp);
  },

  list: {},

  registerShortcut: (...args) => {
    Keyboard.list[args.shift()] = args.sort();
  },

  keys: [],

  onKeyUp: ($event) => {
    const index = Keyboard.keys.indexOf($event.key);
    if (index !== -1) {
      Keyboard.keys.splice(index, 1);
    }
  },

  onKeyDown: ($event) => {
    console.log("press " + $event.key);
    if (Keyboard.keys.indexOf($event.key) === -1) {
      Keyboard.keys.push($event.key);
      Keyboard.keys.sort();

      for (const shortcut in Keyboard.list) {
        if (Keyboard.list[shortcut].length === Keyboard.keys.length &&
          Keyboard.list[shortcut].every(($v, $i) => $v === Keyboard.keys[$i])) {
          const value = GetVarFromSTL(shortcut);
          if (typeof value === 'boolean') {
            UpdateVarInSTL(shortcut, !value);
          }
        }
      }
    }
  }
};
