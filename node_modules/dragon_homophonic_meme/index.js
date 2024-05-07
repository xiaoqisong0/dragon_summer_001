// 引入jQuery  const $ = require('jquery');    // 问题function printProblemMessage() {    var q = '有一天，小牛、小猪、小狗、小羊一起去便利店，小牛、小猪和小狗都被打了，但是小羊没有被打。为什么呢？' 
  console.log(q)}  

// 答案
function printAnswerMessage() {  
  // 例如，在DOM加载完成后打印欢迎消息  
  var a = '便利店24小时不打烊（不打羊）。' 
  console.log(a)
}   // 暴露函数作为模块的公开API  module.exports = {
	printProblemMessage,
	printAnswerMessage
}; 