// 引入jQuery  
const $ = require('jquery');  
  
// 定义你的函数，使用jQuery  
function printMessage() {  
  // 例如，在DOM加载完成后打印欢迎消息  
  $(document).ready(function() {  
	var arr = "在《淮南子》中，天神司命告诉黄帝惊蛰是春季的开始，从这一天起开始春季。而在《山海经》中，有一只神龟名叫“名公”，它每年春天都会睁开眼睛，用吼声引导春天的来临。当“名公”开始吼叫时，代表着惊蛰的开始，万物开始萌发，大地开始复苏。"
    console.log(arr);  
  });  
}  
  
// 暴露函数作为模块的公开API  
module.exports = printMessage;
 