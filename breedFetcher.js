const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName.slice(0, 4), (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    const data = JSON.parse(body);
    // callback(null, data[0].description);
    // console.log(data)
    if (data[0] === undefined) {
      callback("breed not found")
    } else {
      callback(null, data[0].description)
    }
    // if (body.length === 2) {
    //   console.log('empty search');
    //   return;
    // }
    // // console.log(data)
    // // console.log(typeof data)
    // console.log(data[0].description);
  });
};

module.exports = { fetchBreedDescription };