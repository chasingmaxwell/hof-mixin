/**
 * Constructs a HOF which formats a successful response as HTTP.
 *
 * @param options The options to pass to the HOF.
 * @param options.headers The headers to use in the response.
 *
 * @returns The HOF.
 */
const withHttpResponse = ({ headers = {} }) => handler => (
  event,
  context,
  callback
) =>
  handler(
    event,
    context,
    (err, body) =>
      err
        ? callback(err)
        : callback(undefined, { statusCode: 200, body, headers })
  );

module.exports = withHttpResponse;
