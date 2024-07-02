const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const responseContainer = document.getElementById('response-container');
const maxMessages = 5;
const messages = [];

sendBtn.addEventListener('click', () => {
  const userInputValue = userInput.value.trim();

  if (userInputValue === '') {
    messages.push('That is blank😅');
  } else if (customResponse(userInputValue)) {
    // If customResponse returns a truthy value, use that as the response
    messages.push(customResponse(userInputValue));
  } else {
    messages.push(userInputValue);
  }

  userInput.value = '';

  responseContainer.innerHTML = '';

  for (let i = 0; i < maxMessages; i++) {
    const message = messages[messages.length - 1 - i];
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    responseContainer.appendChild(messageElement);
  }

  messages = messages.slice(-maxMessages);
});

function customResponse(input) {
  if (input.toLowerCase() === 'hi') {
    return 'Hello!';
  } else if (input.toLowerCase() === 'hello') {
    return 'Hi there!';
  } else if (input.toLowerCase() === 'how are you') {
    return 'I\'m doing well, thanks!';
  } else if (input.toLowerCase() === 'what is your name') {
    return 'I don\'t have a personal name, but you can call me Assistant! pleople call me ass';
  } else if (input.toLowerCase() === 'goodbye') {
    return 'See you later!';
  } else if (input.toLowerCase() === 'thanks') {
    return 'You\'re welcome!';
  } else if (input.toLowerCase().startsWith('hi my name is')) {
    const name = input.substring(13).trim();
    return `Hi ${name}!`;
  } else if (input.toLowerCase().startsWith('hello my name is')) {
    const name = input.substring(13).trim();
    return `Hi ${name}!`;
  } else {
    return null; // or return a default response, e.g. "I didn't understand that."
  }
}
