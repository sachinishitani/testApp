function altRan2() {
	var r = Math.floor(Math.random() * 10) +1; //乱数の発生

  document.getElementById("sai").innerHTML = r; //値の出力
}

document.getElementById("view_time").innerHTML = getNow();

function getNow() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();

	//出力用
	var s = year + "年" + mon + "月" + day + "日" + hour + "時" + min + "分" + sec + "秒"; 
	return s;
}