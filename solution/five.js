const attachTitle = (name) => {
  return 'Hello ' + name;
}

Promise.resolve('Bob')
  .then(attachTitle)
  .then(console.log);
