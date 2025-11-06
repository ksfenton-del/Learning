// Wait until the page loads
document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector("button");
  const heading = document.querySelector("h1");

  button.addEventListener("click", () => {
    const greetings = [
      "Hello, world!",
      "Hi there!",
      "Welcome to my website!",
      "Glad you're here!",
      "Nice to see you!"
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    heading.textContent = randomGreeting;
  });
});
