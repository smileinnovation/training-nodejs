const repeat = (operation, num) => {
  if (num <= 0) return
  operation()
  return repeat(operation, --num)
}

const task = () => {
  console.log("I'm working on something...");
}


repeat(task, 5);


