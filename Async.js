const { readFile, writeFile } = require('fs')

console.log('start')
readFile('./contentFCC/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./contentFCC/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './contentFCC/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')