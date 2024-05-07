const $ = require('jquery');
const dlw = require('dragon_lucky_words');

function dragonRain (str) {
   console.log("Hello 龙年大吉, %s!", str);
   dlw.printWelcomeMessage()
}
function dragonAwakeningFromHibernation (str) {
   console.log("Hello 惊蛰, %s!", str);
   dlw.printWelcomeMessage()
}
module.exports = {	dragonRain,
	dragonAwakeningFromHibernation}