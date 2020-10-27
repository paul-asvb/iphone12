const subTitleScraper = require('youtube-captions-scraper');

module.exports = async function getSubtitle(videoID) {
  return subTitleScraper.getSubtitles({
    videoID

  }).then(function (captions) {
    const obj = {}
    obj[videoID] = captions
    return obj
  });
}
