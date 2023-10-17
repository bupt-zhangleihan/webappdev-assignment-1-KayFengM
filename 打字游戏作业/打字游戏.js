const quotes = [
  'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
  'There is nothing more deceptive than an obvious fact.',
  'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
  'I never make exceptions. An exception disproves the rule.',
  'What one man can invent another can discover.',
  'Nothing clears up a case so much as stating it to another person.',
  'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];
let words = [];
let wordIndex = 0;
let startTime = Date.now();
const quoteElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('typed-value');
const startButton = document.getElementById('start');
const dialogElement = document.getElementById('dialog');

let isGameCompleted = false; // 游戏完成的标志
let highScore = localStorage.getItem('highScore') || 0; // 从localStorage中检索最高分，默认为0

startButton.addEventListener('click', startGame);

function startGame() {
  isGameCompleted = false; // 重置游戏完成标志

  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
  words = quote.split(' ');
  wordIndex = 0;

  const spanWords = words.map(function (word) {
    return `<span>${word} </span>`;
  });
  quoteElement.innerHTML = spanWords.join('');
  quoteElement.childNodes[0].className = 'highlight';
  messageElement.innerText = `High Score: ${highScore}`;

  typedValueElement.value = '';
  typedValueElement.focus();

  typedValueElement.addEventListener('input', handleInput); // 添加输入事件侦听器

  startTime = new Date().getTime();
}

function handleInput() {
  const currentWord = words[wordIndex];
  const typedValue = typedValueElement.value;

  if (typedValue === currentWord && wordIndex === words.length - 1) {
    const elapsedTime = new Date().getTime() - startTime;
    const message = `CONGRATULATIONS! You finished in ${elapsedTime / 1000} seconds.`;
    showCongratulations(message); // 显示恭贺讯息
    updateHighScore(elapsedTime); // 更新最高分
    typedValueElement.disabled = true; // 禁用文本框
    isGameCompleted = true; // 设置游戏完成标志
    typedValueElement.removeEventListener('input', handleInput); // 移除输入事件侦听器
  } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    typedValueElement.value = '';
    wordIndex++;
    for (const wordElement of quoteElement.childNodes) {
      wordElement.className = '';
    }
    quoteElement.childNodes[wordIndex].className = 'highlight';
  } else if (currentWord.startsWith(typedValue)) {
    typedValueElement.className = '';
  } else {
    typedValueElement.className = 'error';
  }
}

function showCongratulations(message) {
  const dialogMessage = document.createElement('p');
  dialogMessage.innerText = message;
  dialogElement.appendChild(dialogMessage);
}

function updateHighScore(time) {
  if (time < highScore || highScore === 0) {
    highScore = time;
    localStorage.setItem('highScore', highScore); // 存储最高分到localStorage
    messageElement.innerText = `High Score: ${highScore}`;
  }
}

startButton.addEventListener('click', () => {
  if (isGameCompleted) {
    typedValueElement.disabled = false; // 启用文本框
    typedValueElement.addEventListener('input', handleInput); // 添加输入事件侦听器
    startGame(); // 开始新的游戏
  }
});