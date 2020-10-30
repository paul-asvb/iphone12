const fs = require('fs');
const ytdl = require('ytdl-core');
const db = require('./db.js')
var _ = require('lodash');



function downloadVideo(videoID) {
    console.log("download: ", videoID)
    ytdl(`https://www.youtube.com/watch?v=KR0g-1hnQPA`)
        .pipe(fs.createWriteStream(`./videos/biiig.mp4`))
}
downloadVideo()



const captions = db.get('captions')
    .value().map(e=>e.id)

// videoIsWithCaptions.forEach(e => downloadVideo(e))

const myCoolFunction = (arr, i) => {
    const throttleTime = 1000 // in milliseconds
    if (i < arr.length) {      
        downloadVideo(arr[i]);
      i++; 
      setTimeout(myCoolFunction, throttleTime, arr, i);    
    }  
  };
  
  //myCoolFunction(captions, 0);