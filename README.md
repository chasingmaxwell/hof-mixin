# HOF / Mixin comparison

The purpose of this repository is to compare the higher order function and mixin
patterns for for function composition. Our example use-case is an AWS lambda
handler which returns a simple string response. Our composed handlers decorate
that response with a status code and a headers object to represent an HTTP
response.

## Test output

To test the output of both approaches, run `node test.js`. This will run both
the HOF and Mixin-composed handlers and log the result to console.

## Benchmark

To compare performance between the two patterns, run `node benchmark.js` which
will benchmark the composition and invocation of both patterns, logging the
result to the console.
