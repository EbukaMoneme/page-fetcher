let args = process.argv.slice(2);
const fs = require('fs');
const path = require('path');
let requested = args[0];
let target = args[1];

// const checkFile = (file) => {
//   fs.readdirSync(path.dirname(file)).map(fileName => {
//     return path.join(file, fileName)
//   })
// }
// console.log(checkFile(args[1]));

const request = require('request');
request(requested, (error, response, body) => {
  // if (target) {
  //   console.log('exists');
  // } else {
  //   console.log('not here');
  // }
  fs.writeFile(target, body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Downloaded and saved ${body.length} bytes to ./index.html`); // Print the HTML for the Google homepage.
  })
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
});