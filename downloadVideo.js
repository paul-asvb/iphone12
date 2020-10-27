const fs = require('fs');
const ytdl = require('ytdl-core');

export function downloadVideo(videoID) {
    ytdl(`http://www.youtube.com/watch?v=${videoID}`)
        .pipe(fs.createWriteStream(`./videos/${videoID}.mp4`))
}
