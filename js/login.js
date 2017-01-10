var changPage =function(){
	var $signinP = $("#signinP-btn");
	var $signupP = $("#signupP-btn");
	var $logPage = $("#logPage");
	var $signinBox = $logPage.children().first();
	var $signupBox = $logPage.children().last();
	var active = "signinP-btn"; //激活页面
	var time = 1000; //动画时间
	function check(){//检测跳转页面是否是当前页面
		if (this.id !== active) {
			active = this.id;
			if (active === "signinP-btn") {
				turnIn();
			}
			if (active === "signupP-btn") {
				turnUp();
			}
		}
	}
	function turnIn(){//跳转登录界面动画
		$signinP.toggleClass('active');
		$signupP.toggleClass('active');
		$signupBox.animate({
			left:0
		},time);
		$signinBox.animate({
			left:300
		},time);
	}
	function turnUp(){//跳转注册界面动画
		$signinP.toggleClass('active');
		$signupP.toggleClass('active');
		$signupBox.animate({
			left:-300
		},time);
		$signinBox.animate({
			left:0
		},time);
	}

	$signupP.on('click',check);
	$signinP.on('click',check);
};
changPage();