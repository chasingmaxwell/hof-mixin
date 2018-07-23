const handler = require('./handler');
const mixin = require('./mixin');
const hof = require('./hof');
const invoke = require('./invoke');

const headers = { 'Content-Type': 'application/json' };

// compose the HOF handler.
const hofHandler = hof({ headers })(handler);

// @TODO: compose the mixin handler.
const mixinHandler = handler;

(async () => {
  try {
    console.log('HOF:', await invoke(hofHandler));
  } catch (e) {
    console.error('HOF Failed:', e);
  }
})();
(async () => {
  try {
    console.log('Mixin:', await invoke(mixinHandler));
  } catch (e) {
    console.error('Mixin Failed:', e);
  }
})();
