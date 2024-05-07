// 引入jQuery  
const $ = require('jquery');  
  
// 定义你的函数，使用jQuery  
function printMessage() {  
  // 例如，在DOM加载完成后打印欢迎消息  
  $(document).ready(function() {  
	var arr = "相传在古时候，天帝命令春神下凡，为百姓带来春天的喜讯。春神骑着神鹿疾驰而来，手持一把神奇的扇子。当他一扇动扇子，大地万物便焕发生机，万物发芽，春雨滋润大地，让一切焕然一新。这个传说体现了人们对春天和生命力的赞美，也展示了古代人们对自然现象的想象和解释。"
    console.log(arr);  
  });  
}  
  
// 暴露函数作为模块的公开API  
module.exports = printMessage;
 