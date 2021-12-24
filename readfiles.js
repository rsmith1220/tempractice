const {readFileSync, writeFileSync} = require("fs")

const first =readFileSync("./contentFCC/first.txt","utf8")
const second =readFileSync("./contentFCC/second.txt","utf8")

writeFileSync("./contentFCC/result-sync.txt",
    "Here's the result: " + first + second,
    { flag: "a"}
    )