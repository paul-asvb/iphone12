const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('./db.json')
const db = low(adapter)

db.defaults({ videolist: [] })
  .write()

const save = (col, obj) => {
  db.get(col)
    .push(obj)
    .write()
}


module.exports = {
  save: save
}

