const db = require('./db.js')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)
const fs = require('fs')

function cutVideo(start, duration, inputFile){
    ffmpeg(inputFile)
        .setStartTime(start)
        .setDuration(duration)
        .output(`./snippets/${makeid(8)}.mp4`)
        .on('end', function (err) {
            if (!err) { console.log('conversion Done for video: ' + inputFile) }
        })
        .on('error', function (err) {
            console.log('ffmpeg error: ', err, "on video: " + inputFile)
        }).run()
}


function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
} 

const captions = db.get('captions')
  .value().forEach(caption => {
    const inputFile = `./videos/${caption.id}.mp4`
    try {
        if (fs.existsSync(inputFile)) {
            console.log(caption.items.length)
            caption.items.forEach(c =>  cutVideo(c.start,c.dur,inputFile))
        }
      } catch(err) {
        console.error("inputfile error", inputFile)
      }    
  })

