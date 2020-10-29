const subTitleScraper = require('youtube-captions-scraper');
const db = require('./db.js')
var _ = require('lodash');

const getSubtitle = (videoId) => {
  return subTitleScraper.getSubtitles({
    videoId

  }).then(function (captions) {
    console.log(captions.length)
    const cap = captions.filter(ele => (ele.text.includes("12") || ele.text.includes("iphone")))
    const obj = {
      id: videoId,
      items: cap
    }
    db.get('captions')
      .push(obj)
      .write()
  });
}
const videoIds = videolist.map(e => e.id.videoId)

//videoIds.forEach(e => getSubtitle(e))