// 引入jQuery  const $ = require('jquery');    // 问题function printProblemMessage() {    var q = '你的剑就是我的剑' 
  console.log(q)}  

// 答案
function printAnswerMessage() {  
  // 例如，在DOM加载完成后打印欢迎消息  
  var a = '易大师' 
  console.log(a)
}   // 暴露函数作为模块的公开API  module.exports = {
	printProblemMessage,
	printAnswerMessage
}; 