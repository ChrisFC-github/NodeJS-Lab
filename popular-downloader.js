//* PART 3 Import (require) path and fs.
const fs = require("fs"),
    path = require("path"),
    //* Using request-promise, pull articles from https://reddit.com/r/popular.json.
    rp = require("request-promise"),
    options = {
        encoding: "binary"
    }
    //* Using request-promise, pull articles from https://reddit.com/r/popular.json.
    rp("https://reddit.com/r/popular.json")
        .then(res => {
            let data = JSON.parse(res);
            data.data.children.forEach(article => {
                let fileExtension = path.extname(article.data.url);
                //* If the article is a .jpg, .gif, or a .png  https://nodejs.org/dist/latest-v10.x/docs/api/path.html#path_path_extname_path
                if (fileExtension == ".jpg" || fileExtension == ".gif" || fileExtension == ".png") {
                    //* Use request-promise to download the media.
                    rp(article.data.url, options)
                    //* Write each download to a file (named the id of the article) in the downloads directory.
                    .then(image => {
                        fs.writeFile(`./downloads/${article.data.id}${path.extname(article.data.url)}`,
                        image, options, (err) => {
                            console.log(`There was an error: ${err}`);
                        })
                    })
                    .catch(err => console.log(err));
                }
            });
        })
        .catch(err => console.log(err));
        