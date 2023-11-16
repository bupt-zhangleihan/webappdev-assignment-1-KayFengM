// 创建游戏画布
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// 创建游戏要素的基类
class GameElement {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
    ctx.fill();
  }

  move(dx, dy) {
    this.x += dx;
    this.y += dy;

    // 边界检测
    if (this.x < 10) {
      this.x = 10;
    } else if (this.x > canvas.width - 10) {
      this.x = canvas.width - 10;
    }

    if (this.y < 10) {
      this.y = 10;
    } else if (this.y > canvas.height - 10) {
      this.y = canvas.height - 10;
    }
  }
}

// 创建小球类，继承自游戏要素基类
class Ball extends GameElement {
  constructor(x, y, color) {
    super(x, y, color);
  }
}

// 创建游戏类
class Game {
  constructor() {
    this.elements = [];
  }

  addElement(element) {
    this.elements.push(element);
  }

  update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const element of this.elements) {
      element.draw();
    }
  }
}

// 创建游戏实例
const game = new Game();

// 创建小球实例
const ball1 = new Ball(150, 200, '#5F4B8B');
const ball2 = new Ball(150, 300, '#7BAFD4');
const ball3 = new Ball(150, 400, '#add5a2');

// 添加小球到游戏中
game.addElement(ball1);
game.addElement(ball2);
game.addElement(ball3);

// 更新游戏画面
function updateGame() {
  game.update();
  requestAnimationFrame(updateGame);
}

// 监听键盘事件，控制小球移动
document.addEventListener('keydown', (event) => {
  const keyCode = event.keyCode;
  let dx = 0, dy = 0;

  // 根据按键控制不同的小球移动
  if (keyCode === 37) { // 左箭头键
    dx = -1;
    ball1.move(dx, dy);
  } else if (keyCode === 38) { // 上箭头键
    dy = -1;
    ball2.move(dx, dy);
  } else if (keyCode === 39) { // 右箭头键
    dx = 1;
    ball3.move(dx, dy);
  } else if (keyCode === 40) { // 下箭头键
    dy = 1;
   ball1.move(dx, dy);
   ball2.move(dx, dy);
   ball3.move(dx, dy);
  }

   
 });
// 启动游戏循环
updateGame();