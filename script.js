document.addEventListener('DOMContentLoaded', () => {
  const tg = window.Telegram.WebApp;
  const sendButton = document.getElementById('sendButton');
  const userInput = document.getElementById('userInput');
  const responseDiv = document.getElementById('response');

  sendButton.addEventListener('click', async () => {
    const text = userInput.value.trim();
    if (!text) return;

    responseDiv.textContent = "Промтоген думает...";

    setTimeout(() => {
      responseDiv.textContent = `🧙‍♂️ Промтоген гласит: "${text}" — это начало великого пути.`;
    }, 1200);
  });

  tg.ready();
});
