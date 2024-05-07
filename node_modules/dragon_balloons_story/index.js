// 引入jQuery  const $ = require('jquery');    // 问题function printProblemMessage() {    var q = '有一天，白气球遇到黑气球，一见面白气球二话不说就打了黑气球。黑气球非常生气，于是，它做了一个决定：告白气球！' 
  console.log(q)}  

// 答案
function printAnswerMessage() {  
  // 例如，在DOM加载完成后打印欢迎消息  
  var a = '“告白气球”既是一个动作（告诉白气球自己被打的事情），又是一个流行歌曲的名字，形成了有趣的谐音。' 
  console.log(a)
}   // 暴露函数作为模块的公开API  module.exports = {
	printProblemMessage,
	printAnswerMessage
}; 