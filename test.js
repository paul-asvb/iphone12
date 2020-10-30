const db = require('./db.js')
var _ = require('lodash');
/*
const videoList = db.get('videolist')
  .value()

const ids = videoList.map(c => c.id.videoId)

 const uniqueVideoList =  _.uniqBy(videoList, 'id.videoId');



console.log(videoList.length)
console.log(_.uniq(ids).length)
*/
/*
const captions = db.get('captions')
  .value()

 const uniqueCaptions =  _.uniqBy(captions, 'id');


  console.log(captions.length)
  console.log(uniqueCaptions.length)

  db.set('captions',uniqueCaptions)
  .write()

  */