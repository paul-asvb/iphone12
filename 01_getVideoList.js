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
const test = 0

 let pageToken = "CBkQAA";
// for (let i = 0; i < 10; i++) {
    function search() {  
        console.log("pageToken: ",pageToken)

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
        } else {
            const items = response.data.items
            pageToken = response.data.nextPageToken;
            if (items.length > 0) {
        
                console.log("pag: ",pageToken, " - itemlength: ",items.length)

                items.forEach(e => {
                    db.get('videolist')
                        .push(e)
                        .write()
                })
            }
        }
    })

    }

//}
search();
 setInterval(function(){ search(); }, 2000);
