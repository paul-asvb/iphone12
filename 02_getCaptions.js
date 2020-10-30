const subTitleScraper = require('youtube-captions-scraper');
const db = require('./db.js')

const getSubtitle = (vId) => {
  console.log("getSubtitle: ",vId)
  subTitleScraper.getSubtitles({
    videoID:vId
  }).then(function (captions) {
    // console.log(captions.length)
    const cap = captions.filter(ele => (ele.text.includes("12") || ele.text.includes("iphone")))
    const obj = {
      id: vId,
      items: cap
    }
    if (cap.length>0){
  db.get('captions')
      .push(obj)
      .write()
    }
  });
}

const videoIds = db.get('videolist')
.value().map(e => e.id.videoId)

// console.log(videoIds)
//

//videoIds.forEach(e => getSubtitle(e))
//getSubtitle("nzQ469WS9C8")

