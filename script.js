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
  // Remove special characters from input
  input = input.replace(/[^a-zA-Z0-9\s]/g, '').trim().toLowerCase();
  
  if (input.toLowerCase() === 'hi') {
    return 'Hello!';
  } else if (input.toLowerCase() === 'hello') {
    return 'Hi there!';
  } else if (input.toLowerCase() === 'how are you') {
    return 'I\'m doing well, thanks!';
  } else if (input.toLowerCase() === 'what is your name') {
    return 'I don\'t have a personal name, but you can call me Assistant!';
  } else if (input.toLowerCase() === 'goodbye') {
    return 'See you later!';
  } else if (input.toLowerCase() === 'thanks') {
    return 'You\'re welcome!';
  } else if (input.toLowerCase().includes('joke')) {
      const jokes = [
        "Why do programmers prefer dark mode? Because light attracts bugs.",
        "Why did the physicist break up with his girlfriend? He found her mass attractive, but her gravity was overwhelming.",
        "Why did the cell go to therapy? It was feeling a little divided.",
        "Why did the math book look so sad? Because it had too many problems.",
        "Why did the astronaut break up with his girlfriend before going to Mars? Because he needed space.",
        "Why do computers go to the doctor? They have a virus!",
        "Why did the atom lose its job? Because it couldn't bond with its coworkers.",
        "Why did the engineer cross the road? To get to the other side... of the equation.",
        "Why did the statistician quit his job? Because he didn't get a significant result.",
        "Why did the robot go on a diet? It wanted to lose some bytes.",
        "Why was the pizza in a bad mood? It was feeling crusty.",
        "Why did the tourist bring a ladder to Paris? He wanted to elevate his experience.",
        "Why did the guitar go to the doctor? It had a fretful problem.",
        "Why did the golfer wear two pairs of pants? In case he got a hole in one.",
        "Why did the scarecrow win an award? Because he was outstanding in his field.",
        "What do you call a fake noodle? An impasta.",
        "Why did the coffee file a police report? It got mugged!",
        "Why did the bicycle fall over? Because it was two-tired.",
        "What do you call a group of cows playing instruments? A moo-sical band.",
        "Why did the banana go to the doctor? He wasn't peeling well.",
        "Why did the chicken cross the playground? To get to the other slide.",
        "What do you call a bear with no socks on? Barefoot.",
        "Why did the mushroom go to the party? Because he was a fun-gi."
        "Why did the tomato turn red? Because it saw the salad dressing!",
        "What do you call a pair of two friends having the similar size cup? We call them bras!"
    Why did the cookie go to the doctor? It felt crumby!
    How does a penguin build its house? Igloos it together!
Why did the chef get rid of his onions? He wanted to kill his kitchen's 
bad mood.

    
      ];
      const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
      return `Here is one: ${randomJoke}`;
  } else if (input.toLowerCase() === 'thangggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggks') {
    return 'You\'re welcome!';
  } else if (input.toLowerCase().startsWith('hi my name is')) {
    const name = input.substring(13).trim();
    return `Hi ${name}!`;
  } else if (input.toLowerCase().startsWith('hello my name is')) {
    const name = input.substring(13).trim();
    return `Hi ${name}!`;
  } else {
    return "I didn't understand that."; // default response
  }
}
