window.addEventListener('scroll', changeHeader);
var headerNode = document.getElementsByTagName('header')[0];
function changeHeader() {
	var bodyNode = document.body;
    console.dir(bodyNode)
	// височината на vewport-a:
	var vh = window.innerHeight;
	// височината на реалното съдържание в body:
	var bh = bodyNode.scrollHeight;
	console.log("vh=", vh, "; bodyHeight=", bh);



if (bh > vh && bodyNode.scrollTop > (bh - vh) / 2) {
    headerNode.style.background = 'rgba(80, 80, 80, .5)';
    headerNode.style.color = '#333';
    console.log("scrollTop", document.body.scrollTop);
 } else if (bodyNode.scrollTop === 0){
    headerNode.style.color = '#DDD';
    headerNode.style.backgroundColor = 'rgba(80, 80, 80, 1)';

}
}