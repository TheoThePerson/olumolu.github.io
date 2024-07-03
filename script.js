function customResponse(input) {
  // Remove special characters from input
  input = input.replace(/[^a-zA-Z0-9\s]/g, '').trim().toLowerCase();
  
  if (input === 'hi') {
    return 'Hello!';
  } else if (input === 'hello') {
    return 'Hi there!';
  } else if (input === 'how are you') {
    return 'I\'m doing well, thanks!';
  } else if (input === 'what is your name') {
    return 'I don\'t have a personal name, but you can call me Assistant!';
  } else if (input === 'goodbye') {
    return 'See you later!';
  } else if (input === 'thanks') {
    return 'You\'re welcome!';
  } else if (input === 'hey') {
    return 'Yes please';
  } else if (input.startsWith('hi my name is')) {
    const name = input.substring(13).trim();
    return `Hi ${name}!`;
  } else if (input.startsWith('hello my name is')) {
    const name = input.substring(13).trim();
    return `Hi ${name}!`;
  } else if (input.includes('joke')) {
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
    ];
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    return randomJoke; // Return the random joke directly
  } else {
    return "I didn't understand that."; // default response
  }
}
