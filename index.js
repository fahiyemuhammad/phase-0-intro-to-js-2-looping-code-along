// Code your solutions in this file


function writeCards(names, event) {
    // Create an empty array to hold the messages
    const messages = [];
    
    // Loop through the names array
    for (let i = 0; i < names.length; i++) {
        // Create a custom message for each name
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        
        // Add the message to the array
        messages.push(message);
    }
    
    // Return the array of messages
    return messages;
}


console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));



function countDown(number) {
    // Make sure the number is positive
    if (number < 0) {
        console.log("Please provide a positive integer.");
        return;
    }

    // Loop to count down to zero
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}

// Example usage:
countDown(10);
