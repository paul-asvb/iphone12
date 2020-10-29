const db = require('./db.js')
var _ = require('lodash');

const ids = db.get('videolist')
  .value().map(c => c.id.videoId)

console.log(_.uniq(ids))
