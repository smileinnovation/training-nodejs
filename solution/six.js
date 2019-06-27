
const parsePromised = (json) => {
  return new Promise( (fulfill, reject) => {
    try {
      fulfill(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
}

const onReject = (error) => {
  console.log(error.message);
}

parsePromised(process.argv[2])
.then(null, onReject);

