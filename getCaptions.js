const subTitleScraper = require('youtube-captions-scraper');

module.exports = async function getSubtitle(videoID) {
  return subTitleScraper.getSubtitles({
    videoID

  }).then(function (captions) {
    console.log(captions.length)
    const cap = captions.filter(ele => (ele.text.includes("12") || ele.text.includes("iphone")))
    const obj = {}
    obj[videoID] = cap
    return obj
  });
}
