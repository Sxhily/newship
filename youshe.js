$(function(){
//滑出效果
		$(".right_nav li").has("ul").hover(function(){
		$(this).children("ul").slideDown();
	},function(){
		$(this).children("ul").hide();
	});
// 轮播
    var num=$(".scroll_nav li");
	len=num.length;
	$(".scroll_nav li").click(function(){
		var index=$(this).index();
		i=index;
		$(".scroll li").eq(index).show().siblings().hide();		
	}).eq(0).click();
// 伴随滚动
	var i=0;
	var timer=setInterval(turnpic,3000);
	function turnpic(){
		i++;
		if (i==len) {
			i=0;
		}
		$(".scroll_nav li").eq(i).addClass('active').siblings().removeClass('active');
		$(".scroll li").eq(i).show().siblings().hide();
	}
	$(".scroll").hover(function(){
		clearInterval(timer);
	},function(){
		timer=setInterval(turnpic,3000);
	})

	$("#next").click(function(){
		i++;
		if (i==len) {
			i=0;
		}
		$(".scroll li").eq(i).show().siblings().hide();
	});
	$("#prev").click(function(){
		i--;
		if (i==-1) {
			i=len-1;
		}
		$(".scroll li").eq(i).show().siblings().hide();
	});

// tab切换
	$(".icon1").parent("span").mouseover(function(){
		$("#part1").show().siblings().hide();
	})
	$(".icon2").parent("span").mouseover(function(){
		$("#part2").show().siblings().hide();
	})
	$(".icon3").parent("span").mouseover(function(){
		$("#part3").show().siblings().hide();
	})
	$("#tab_title span").mouseover(function(){
		$(this).addClass('select').siblings().removeClass('select');
	});
//back_top
    $(window).bind("scroll", function () {
        var height = $(window).scrollTop();
        var height = parseInt(height);
    	if (height<658) {
    		$(".back_top").hide();
    		$(".ad_right").css("position","relative");
        }
    	else if (height>=658&&height<=2050) {
    		$(".ad_right").css("position","relative");
    		$(".back_top").show();
    	}
    	else if(height>2050){
    		$(".ad_right").css("position","fixed");
    		$(".back_top").show();
    	}
    });
//share
	$(".share li").has("ul").hover(function(){
		$(this).children("ul").slideDown();
	},function(){
		$(this).children("ul").hide();
	});   

})
