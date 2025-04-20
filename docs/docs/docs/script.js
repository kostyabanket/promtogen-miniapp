document.getElementById("sendButton").addEventListener("click", () => {
  const userText = document.getElementById("userInput").value.trim();

  if (!userText) {
    document.getElementById("response").innerText = "Пожалуйста, введите вопрос.";
    return;
  }

  // Тут будет заглушка вместо OpenAI, так как нет сервера
  document.getElementById("response").innerText = "🧙‍♂️ Промтоген говорит: «Это просто заглушка, но скоро я стану настоящим помощником!»";

  // TODO: Здесь можно сделать fetch-запрос к backend, если подключим сервер
});
