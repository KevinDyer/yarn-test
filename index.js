(() => {
  'use strict';

  const grpc = require('grpc');
  console.log(require('util').inspect(grpc, {colors: true, depth: null}));
})();
