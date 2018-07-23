const handler = require('./handler');
const mixin = require('./mixin');
const hof = require('./hof');
const invoke = require('./invoke');
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

suite
  .add('hof', async () => {
    // compose the HOF handler.
    const h = hof({ headers: { 'Content-Type': 'application/json' } })(handler);

    // invoke the handler.
    await invoke(h);
  })
  .add('mixin', async () => {
    // @TODO: compose the handler with a mixin.
    const h = handler;

    // invoke the handler.
    await invoke(h);
  })
  .on('cycle', event => console.log(String(event.target)))
  .on('complete', () =>
    console.log(`Fastest is ${suite.filter('fastest').map('name')}`)
  )
  .run({ async: true });
