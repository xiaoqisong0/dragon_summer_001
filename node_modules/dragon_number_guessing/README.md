# dragon_number_guessing
 数字游戏

### 游戏规则：
    这是一个简单的游戏，您必须猜测计算机生成的 1 到 10 之间的数字。但是，您只有 4 次机会猜出正确的数字。
### 安装与使用：

``` js
npm i dragon_number_guessing

import { dragonNumberGuessing } from "dragon_number_guessing";

// 开始游戏  
const gameState = numberGuessingGame.startGame();  
  
// 检查猜测  
const userGuess = 5; // 假设这是用户的输入  
const updatedGameState = numberGuessingGame.checkGuess(gameState, userGuess);

