// 引入jQuery  
const $ = require('jquery');  
const dr = require('dragon_rain'); 
const dng = require('dragon_number_guessing'); 
  
// 定义你的函数，使用jQuery  
function printWelcomeMessage() {  
  // 例如，在DOM加载完成后打印欢迎消息  
  $(document).ready(function() {  
	  
	  var arr = {
			"龙年到，龙年到，有成绩，别骄傲，失败过，别死掉，齐努力，开大炮，好运气，天上掉，同分享，大家笑。",
			"龙年祝你事业如日中天，恋人亲密无间，薪水上万成千，快乐无际无边，烦恼渺如云烟，逍遥胜似神仙！",
			"龙年众神关照你，天公青睐你，唐僧庇护你，观音保佑你，如来欣赏你，妖魔鬼怪屈从你，就连我都得祝福你！",
			"龙年祝你：低头捡个一两万，工资开个三五万，麻将赢个七八万，彩票中个五百万，银行存它千百万，钞票永远花不完！",
			"龙年运程零时的钟声响彻天涯，新年的列车准时出发。它驮去一个难忘的岁月，迎来了又一度火红的年华。祝新年快乐！",
			"龙年祝你：一帆风顺、二龙腾飞、三羊开泰、四季平安、五福临门、六六大顺、七星高照、八方来财、九九同心、十全十美、百事亨通、千事吉祥、万事如意！",
			"龙年到了，事儿多了吧？招待客人别累着，狼吞虎咽别撑着，啤的白的别掺着，孩子别忘照顾着，最后我的惦念常带着。",
			"龙年到来，请遵守四项基本原则：将财神看守到底，将幸福紧握到底，将好运怀抱到底、将爱情进行到底！请严格遵守，直至革命胜利！"
		  }
		  
	// 获取随机索引  
	var randomIndex = Math.floor(Math.random() * arr.length);  
		  
    console.log("欢迎来到我们的网站！");  
	// 输出随机元素  
	console.log(arr[randomIndex]);
		  
	dr.dragonRain('lee');
		  
	dng.startGame();

  });  
}  
  
// 暴露函数作为模块的公开API  
module.exports = printWelcomeMessage;
 