const TelegramBot = require('node-telegram-bot-api');
const token = 'YOUR_BOT_TOKEN'; // BotFather থেকে পাওয়া token
const bot = new TelegramBot(token, { polling: true });

// Start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, "Play X.Snake!", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Play X.Snake", web_app: { url: "https://rowakir.github.io/snake-evolution-game/" } }
        ]
      ]
    }
  });
});

// Optional: Inline Mode
bot.on('inline_query', (query) => {
  const results = [
    {
      type: 'article',
      id: '1',
      title: 'Play X.Snake!',
      input_message_content: { message_text: '🚀 Tap below to play X.Snake!' },
      reply_markup: {
        inline_keyboard: [
          [{ text: "Play X.Snake", web_app: { url: "https://rowakir.github.io/snake-evolution-game/" } }]
        ]
      }
    }
  ];
  bot.answerInlineQuery(query.id, results);
});
