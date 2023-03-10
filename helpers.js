// helper to generate a URL with query parameters
exports.getUrlWithParams = (url, params) => {
  if (url.indexOf('?') < 0) url += '?';
  url += Object.keys(params).map((key) => key + '=' + params[key]).join('&');
  return url;
};

// deep copy a message
exports.copy = (message) => {
  return JSON.parse(JSON.stringify(message));
};
