export function taskFirst() {
  // taskFirst function
  const task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  // getLast function
  return ' is okay';
}

export function taskNext() {
  // taskNext function
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}