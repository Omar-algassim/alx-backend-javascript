#!/usr/bin/node

process.stdout.write('Welcome to Holberton School, what is your name?\n');

const data = process.stdin.on('readable', () => {
  const data = process.stdin.read();
  if (data) {
    process.stdout.write(`Your name is: ${data}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
