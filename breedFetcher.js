const args = process.argv.slice(2, process.argv.length);
// console.log(args[0].slice(0, 4))
const searchId = args[0].slice(0, 4);

const request = require('request');

request('https://api.thecatapi.com/v1/images/search?breed_ids=' + searchId, (error, response, body) => {
  if (error) {
    console.log(error)
    return
  }
  if (body.length === 2) {
    console.log('empty search')
    return
  }
  const data = JSON.parse(body);
  // console.log(data)
  // console.log(typeof data)
  console.log(data[0].breeds[0].description);
});