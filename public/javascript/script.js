// set khi hover social
window.onload = function(){
	var hover = document.getElementsByClassName("set-hover");
	for(var i = 0 ; i < hover.length ; i++) {
		hover[i].addEventListener('mousemove',function(){
			this.style.width = "60px";
			this.style.transition =  "0.5s ease-in-out";
	//  cho nó trỏ lên cho biết là của thằng nào
		});
		hover[i].addEventListener('mouseout',function() {
			this.style.width = "45px";
			this.style.transition =  "0.5s ease-in-out";
		});
	}
	// xử lý của sổ open 
	function open() {
		if(document.getElementById("default").getAttribute('style') == "display: block;") {
			console.log(1);
			document.getElementById("default").style.display = 'none';
			document.getElementById("daux").style.display = 'block';
			document.getElementsByClassName("open")[0].style.display = 'block';
			return; 
		}
		document.getElementById("default").style.display = 'block';
		document.getElementById("daux").style.display = 'none';
		document.getElementsByClassName("open")[0].style.display = 'none';
	}
	// document.getElementsByClassName("bonus")[0].addEventListener('click',open);

	// xử lý slider tự động chạy
	var index = 0;
	run();
	function run(){
		var arrImage = document.getElementsByClassName("run");
		var dots = document.getElementsByClassName("dot");
		for(var i = 0 ; i < arrImage.length; i++) {
			arrImage[i].style.display = "none";
		}
		for (var i = 0 ; i < dots.length ; i++) {
			dots[i].className = dots[i].className.replace(" active","");
		}
		index++;
		if(index > arrImage.length) {
			index = 1;
		}
		arrImage[index-1].style.display = "block";
		dots[index-1].className += " active";
		setTimeout(run,3000);
	}

	// xử lý icon tự động chạy
	var indexIcon = 1;
	sliderIcon(indexIcon);

	document.getElementsByClassName("prev-slide")[0].addEventListener('click',function (){
		indexIcon -= 6;
		sliderIcon(indexIcon);
	});
	document.getElementsByClassName("next-slide")[0].addEventListener('click', function(){
		indexIcon += 6;
		sliderIcon(indexIcon);
	});
	
	function sliderIcon(n) {

		arrImageIcon = document.getElementsByClassName("slider-x");
		if(n > arrImageIcon.length) {
			indexIcon = 1;
		}
		if(n < 1) {
			indexIcon = arrImageIcon.length/2+1;
		}
		for(var i = 0; i < arrImageIcon.length ; i++) {
			arrImageIcon[i].style.display = "none";
		}
		if(indexIcon > 6) {
			for(var i = indexIcon-1; i < arrImageIcon.length; i++) {
				arrImageIcon[i].style.display = "block";
			}
		}
		else {
			for(var i = indexIcon-1; i < arrImageIcon.length/2; i++) {
				arrImageIcon[i].style.display = "block";
			}
		}
	}

	// xử lý feed-back slider
	var indexFeedBack = 1;
	feedSlider(indexFeedBack);
	document.getElementById("left-angle").addEventListener('click',function() {
		indexFeedBack -= 1;
		feedSlider(indexFeedBack);
	});
	document.getElementById("right-angle").addEventListener('click',function(){
		indexFeedBack += 1;
		feedSlider(indexFeedBack);
	});
	function feedSlider(m) {
		var arrfeedSliders = document.getElementsByClassName("feed-content");
		if(m < 1) {
			indexFeedBack = arrfeedSliders.length;
		}
		if(m > arrfeedSliders.length) {
			indexFeedBack = 1;
		}
		for(var i = 0 ; i < arrfeedSliders.length ; i++) {
			arrfeedSliders[i].style.display = "none";
		}
		arrfeedSliders[indexFeedBack-1].style.display = "block";
	}
	
	// xử lý viettravelgroup
	document.getElementById('viettravel').addEventListener('click', showVietTravel);
	function showVietTravel() {
		// document.getElementById("viettravel").style.left "0px";
		if(document.getElementById("viettravel").style.left== "-310px") {
			document.getElementById("viettravel").style.left = "0px";
		}
		else {
			document.getElementById("viettravel").style.left = '-310px';
		}
	}
	// xử lý form-search
	var searchTour = document.getElementById("search-tour");
	searchTour.addEventListener('click',function() {
		document.getElementById("search-tour").style.color = 'red';
		document.getElementById("search-book").style.color = 'white';
		document.getElementById("search-info").style.color = 'white';
		document.getElementById("container-tour").style.display = 'block';
		document.getElementById("container-book").style.display = 'none';
		document.getElementById("container-info").style.display = 'none';
	});

	var searchBook = document.getElementById("search-book");
	searchBook.addEventListener('click',function() {
		document.getElementById("search-tour").style.color = 'white';
		document.getElementById("search-book").style.color = 'red';
		document.getElementById("search-info").style.color = 'white';
		document.getElementById("container-tour").style.display = 'none';
		document.getElementById("container-book").style.display = 'block';
		document.getElementById("container-info").style.display = 'none';
	});

	var searchInfo = document.getElementById("search-info");
	searchInfo.addEventListener('click',function() {
		document.getElementById("search-tour").style.color = 'white';
		document.getElementById("search-book").style.color = 'white';
		document.getElementById("search-info").style.color = 'red';
		document.getElementById("container-tour").style.display = 'none';
		document.getElementById("container-book").style.display = 'none';
		document.getElementById("container-info").style.display = 'block';
	});


	// scroll back to up
	window.onscroll = function () {
		scrollFunction();
		scrollTransition();
	};

	function scrollFunction() {
		if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
			document.getElementsByClassName("position")[0].style.bottom = "100px";
		}
		else {
			document.getElementsByClassName("position")[0].style.bottom = "-60px";
		}
	}

	document.getElementsByClassName("position")[0].addEventListener('click',function(){
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	});	

	function scrollTransition() {
		if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
			var coc = document.getElementsByClassName("container-overlay-center");
			for(var i = 0 ; i < coc.length ; i++) {
				coc[i].style.bottom = "0px";
			}
		}
		if(document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
			var reason = document.getElementsByClassName("reason");
			for(var i = 0 ; i < reason.length ; i++) {
				reason[i].style.marginTop = "60px";
			}
		}
	}

	//  xử lý form-chat
	var closeChat = document.getElementById("message-margin");
	var clickTitle = document.getElementById("title-form-chat");
	var openChat = document.getElementById("message-form");
	closeChat.addEventListener('click',function() {
		closeChat.style.display = "none";
		openChat.style.display = "block";
	});
	clickTitle.addEventListener('click',function() {
		closeChat.style.display = "block";
		openChat.style.display = "none";
	});
}
