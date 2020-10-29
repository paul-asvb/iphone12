const { error } = require('console');
const { google } = require('googleapis');
const db = require('./db.js')
require('dotenv').config()

if (process.env.GOOGLE_TOKEN == undefined) {
    console.error("process.env.GOOGLE_TOKEN undefined")
}

const service = google.youtube({
    version: 'v3',
    auth: process.env.GOOGLE_TOKEN
});


let pageToken = "";
for (let i = 0; i < 10; i++) {
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
                  //  db.save("videolist", e)
                })
            }
        }
    })
}