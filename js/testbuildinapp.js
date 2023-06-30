const path = require("path");
const url = require("url");
const fs = require("fs");

// console.log(path.join(__dirname, "1"));
// console.log(path.join(__dirname, "1", "2"));
// console.log(path.join(__dirname, "area", "taipei", "大同區"));

// console.log(path.basename(__filename));
// console.log(path.basename("../../.."));
// console.log(__filename);

// const testURL1 = "http://user:pass@host.com:8080/p/a/t/h?query=string#hash";
// const testURL2 = "https://github.com/zhengchun/LocalVPN-Kotlin/blob/master/app/src/main/java/org/kotlin/examples/localvpn/LocalVpnService.kt";
// const testURL3 = "https://github.com:8080/?name=123&age=34&gender=male";
// console.log(url.parse(testURL1, true));
// console.log(url.parse(testURL2, true));
// console.log(url.parse(testURL3, true));
// console.log(url.parse(testURL3, true).query.name);

fs.writeFile("../document/test.txt", "test test", (e) => {
    if (e) throw console.log(e);;

    console.log("file Success !");
})

fs.readFile("../document/test.txt", "utf8", (e, data) => {
    if (e) throw e;

    console.log(data);
})

