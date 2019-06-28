const inputNumbers = [1, 2, 3];
const inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
const messages = [
  { 
    message: 'Esse id amet quis eu esse aute officia ipsum.' 
  },
  {
    message: "Wou d'Uelzecht durech d'Wisen zéit, Duerch d'Fielsen d'Sauer brëcht"
  },
  {
    message: 'We choose to go to the Moon. We choose to go to the Moon in this decade and do the other things, not because they are easy, but because they are hard'
  },
  {
    message: 'something short'
  }
]; 

// 2.1
const doubleAll = (numbers) => {
  return numbers.map(number => number * 2)
}

// 2.2
const countWords = (words) => {
  return words.reduce((acc, item) => {
    acc[item] = ++acc[item] || 1;
    return acc;
  }, {})
}

// 2.3
const getShortMessages = (messages) => {
  return messages
  .filter((item) => {
    return item.message.length < 50;
  }).map( (item) => {
    return item.message;
  })
}

console.log(doubleAll(inputNumbers));

console.log(countWords(inputWords));

console.log(getShortMessages(messages));

