// To test :
// ok : node ./six.js '{"hello":"world"}'
// ko : node ./six.js whatever
const parsePromised = (json) => {
  return new Promise( (resolve, reject) => {
    try {
      resolve(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
}

const onReject = (error) => {
  console.log(error.message);
}

const prettyPrint = (json) => {
  console.log(JSON.stringify(json, ' ', 2));
}

parsePromised(process.argv[2])
.then(prettyPrint, onReject);

