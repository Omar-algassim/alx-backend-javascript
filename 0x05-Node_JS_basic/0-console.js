#!/usr/bin/node

function displayMessage(message) {
    process.stdout.write(`${message}\n`);
}

module.exports = displayMessage;
