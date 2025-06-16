import '@testing-library/jest-dom';

// Polyfill para TextEncoder y TextDecoder en el entorno de pruebas
if (typeof global.TextEncoder === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { TextEncoder } = require('util');
  global.TextEncoder = TextEncoder;
}
if (typeof global.TextDecoder === 'undefined') {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { TextDecoder } = require('util');
  global.TextDecoder = TextDecoder;
}
