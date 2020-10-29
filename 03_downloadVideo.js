const fs = require('fs');
const ytdl = require('ytdl-core');
const db = require('./db.js')
var _ = require('lodash');



function downloadVideo(videoID) {
    console.log("download: ", videoID)
    ytdl(`http://www.youtube.com/watch?v=${videoID}`)
        .pipe(fs.createWriteStream(`./videos/${videoID}.mp4`))
}




const videoIsWithCaptions = db.get('captions')
    .value().filter(caption => caption.items.length > 0).map(c => c.id)

console.log(_.uniq(videoIsWithCaptions))


// videoIsWithCaptions.forEach(e => downloadVideo(e))