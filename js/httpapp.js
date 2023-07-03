const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    if (req.url === "/") {

        fs.readFile(path.join("/Users/timyumac/Desktop/VSCodeProject/udermyNodeJS", "index.html"), (e, data) => {
            if (e) throw e;

            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        })
    }
    else {
        console.log(url.parse(req.url, true).pathname);
        const dataJson = { name: "Tim", age: 18 };

        res.writeHead(200, { "Content-Type": "text/html" });
        let data = JSON.parse(JSON.stringify(dataJson));

        res.write(`<H1>Hello ${data.name}  ${url.parse(req.url, true).pathname}</H1>`);
        res.end();
    }
});


server.listen(3351, () => {
    console.log("Server is running on port 3351");
})