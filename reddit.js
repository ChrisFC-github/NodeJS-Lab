//* PART 2 Import (require) path and fs.
const fs = require("fs"),
path = require("path"),
//* PART 2 Use request-promise to retrieve articles from https://reddit.com/r/popular.json
rp = require("request-promise"),
writePath = path.join(__dirname, "popular-articles.json");

//* PART 2 Use request-promise to retrieve articles from https://reddit.com/r/popular.json
rp("https://reddit.com/r/popular.json")
    //* Extract from each article title, url, and author
    .then(res => {
        let redditData = JSON.parse(res);
        let outputArr = [];
        redditData.data.children.forEach(article => {
            let obj = {
                title: article.data.title,
                author: article. data.author,
                url: article.data.url
            };
            //* Push each extracted article to an array.
            outputArr.push(obj);
        });
        //* Write the array to a file in the root of your project called popular-articles.json.
        const jsonData = JSON.stringify(outputArr);
        fs.writeFile(writePath, jsonData, (err) => {
            console.log(err);
        });
    })
    .catch(err => console.log(err));