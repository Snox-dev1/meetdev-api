export default {
  path: __dirname + '../',
  title: 'Meetdev-api',
  version: '1.0.0',
  tagIndex: 1,
  ignore: ['/swagger', '/docs'],
  preferredPutPatch: 'PUT', // if PUT/PATCH are provided for the same rout, prefer PUT
  snakeCase: false, // convert route names to snake_case
  common: {
    parameters: {}, // OpenAPI conform parameters that are commonly used
    headers: {}, // OpenAPI confomr headers that are commonly used
  },
}
