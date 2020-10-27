const { error } = require('console');
const { google } = require('googleapis');
require('dotenv').config()

if (process.env.GOOGLE_TOKEN == undefined) {
    console.error("process.env.GOOGLE_TOKEN undefined")
}

const service = google.youtube({
    version: 'v3',
    auth: process.env.GOOGLE_TOKEN
});




module.exports = async function getList() {
    return new Promise(function (resolve, reject) {
        let pageToken = "";
        let array = [];
        for (let i = 0; i < 10; i++) {
            console.log("run: ", i, pageToken)
            service.search.list({
                q: "phone 12",
                part: 'snippet',
                order: "viewCount",
                type: "video",
                videoDefinition: "high",
                pageToken: pageToken,
            }, function (err, response) {
                if (err) {
                    console.error(err)
                    reject(err)
                } else {
                    pageToken = response.data.nextPageToken;
                    if (response.data.items.length > 0) {
                        const items = response.data.items
                        items.forEach(e => {
                            // console.log(e)
                            array.push(e)
                        })
                    }
                    console.log(array.length)
                }
            })
        }
        resolve(array)
    });
}