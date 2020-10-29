
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)

module.exports = cutVideo(start, duration, videoID){
    ffmpeg(`./videos/${videoID}.mp4`)
        .setStartTime(sample.start)
        .setDuration(sample.dur)
        .output(`./snippets/${makeid(8)}.mp4`)
        .on('end', function (err) {
            if (!err) { console.log('conversion Done for video : ' + videoID) }
        })
        .on('error', function (err) {
            console.log('ffmpeg error: ', err, "on video" + videoID)
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
} Ì