module.exports = {
  self: 'localhost:3006',
  '/auth': {
    uri: 'localhost:3005',
    preserveHost: true,
    preservePrefix: true
  },
  '/api': {
    uri: 'localhost:3005',
    preserveHost: true,
    preservePrefix: true
  },
  '/': {
    uri: 'localhost:3000',
    preserveHost: true,
    preservePrefix: true
  }
}
