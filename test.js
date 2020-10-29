const getCaption = require("./02_getCaptions")
const getList = require("./01_getVideoList")
const fs = require('fs');
const { reject } = require("async");

async function fn() {
  /*getList().then(videoList => {
    console.log("MAIN", videoList.length)
  })*/

  const videoIDs = ["KR0g-1hnQPA", "65JrtwtTOdc", "fczSjmhIYnk", "Sx6dAx7dnXg", "A6PAVB39UXw", "9wJn6nOEr7Q",]

  const captionPromises = videoIDs.map(videoIDs => {
    return getCaption(videoIDs)
  })

  Promise.all(captionPromises).then(function (p) {
    const data = JSON.stringify(p);
    fs.writeFile('./lists/captions.json', data, (err) => {
      if (err) {
        throw err;
      }
      console.log("JSON data is saved.");
    });
  });

}

fn()