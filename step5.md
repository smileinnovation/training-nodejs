
### Goal

Learn how to use javascript in a functional way

Resources : 

  - https://flaviocopes.com/javascript-functional-programming/
  - https://www.youtube.com/watch?v=e-5obm1G_FY

----

## 1) 

Implement a function that takes a function as its first argument, a number num as its second argument, then executes the passed in function num times.

----

## 2) 

### 2.1) Convert the following code from a for-loop to Array#map, and run it:

```js
const doubleAll = (numbers) => {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}
```

### 2.2) 
Given the following Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log)

```js
const inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']
```

### 2.3)
Use Array#filter to write a function called getShortMessages.

getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.

The function should return an array containing the messages themselves, without their containing object.

Use this message :

```js
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
```

-----

## 3) 

Write two functions with these missions 

  - f1 : return the sum of the two parameters
  - f2 : with only one parameter, return the sum of 10 and the parameter, leverage the usage of f1

Constrains : use bind() 

