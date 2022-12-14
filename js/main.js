// 红心动态效果
$(document).ready(function() {

	$('body').on("click", '.heart', function() {

		var A = $(this).attr("id");
		var B = A.split("like");
		var messageID = B[1];
		var C = parseInt($("#likeCount" + messageID).html());
		$(this).css("background-position", "")
		var D = $(this).attr("rel");

		if (D === 'like') {
			$("#likeCount" + messageID).html(C + 1);
			$(this).addClass("heartAnimation").attr("rel", "unlike");

		}
		// 取消红心
		// else {
		// 	$("#likeCount" + messageID).html(C - 1);
		// 	$(this).removeClass("heartAnimation").attr("rel", "like");
		// 	$(this).css("background-position", "left");
		// }
	});
});

// 点赞加数字按钮
function incrementCounter() {
	// 获取 counter 元素
	var span = document.getElementById('counter');
	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter2() {
	// 获取 counter 元素
	var span = document.getElementById("counter2");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter3() {
	// 获取 counter 元素
	var span = document.getElementById("counter3");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter4() {
	// 获取 counter 元素
	var span = document.getElementById("counter4");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter5() {
	// 获取 counter 元素
	var span = document.getElementById("counter5");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter6() {
	// 获取 counter 元素
	var span = document.getElementById("counter6");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter7() {
	// 获取 counter 元素
	var span = document.getElementById("counter7");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter8() {
	// 获取 counter 元素
	var span = document.getElementById("counter8");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter9() {
	// 获取 counter 元素
	var span = document.getElementById("counter9");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter10() {
	// 获取 counter 元素
	var span = document.getElementById("counter10");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter11() {
	// 获取 counter 元素
	var span = document.getElementById("counter11");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter12() {
	// 获取 counter 元素
	var span = document.getElementById("counter12");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter13() {
	// 获取 counter 元素
	var span = document.getElementById("counter13");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter14() {
	// 获取 counter 元素
	var span = document.getElementById("counter14");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter15() {
	// 获取 counter 元素
	var span = document.getElementById("counter15");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter16() {
	// 获取 counter 元素
	var span = document.getElementById("counter16");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter17() {
	// 获取 counter 元素
	var span = document.getElementById("counter17");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter18() {
	// 获取 counter 元素
	var span = document.getElementById("counter18");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter19() {
	// 获取 counter 元素
	var span = document.getElementById("counter19");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter20() {
	// 获取 counter 元素
	var span = document.getElementById("counter20");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter21() {
	// 获取 counter 元素
	var span = document.getElementById("counter21");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter1() {
	// 获取 counter 元素
	var span = document.getElementById("counter1");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter22() {
	// 获取 counter 元素
	var span = document.getElementById("counter22");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter23() {
	// 获取 counter 元素
	var span = document.getElementById("counter23");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}

function incrementCounter24() {
	// 获取 counter 元素
	var span = document.getElementById("counter24");

	var value = parseInt(span.innerHTML, 10);
	
	// 如果数值小于70则将 counter 的值加 1
	if (value < 70) {
		span.innerHTML = value + 1;
	}
}


$(document).ready(function() {
	// 增加所有平滑滚动效果到所有链接上
	$(".navbar a, footer a[href='#myPage']").on('click', function(event) {
		event.preventDefault();
		var hash = this.hash;

		// 用animate() 方法增加滚动效果
		$('html, body').animate({
			scrollTop: $(hash).offset().top
		}, 900, function() {
			window.location.hash = hash;
		});
	});
})

// 测试

function increaseValue() {
	var value = parseInt(document.getElementById('number').value, 10);
	value = isNaN(value) ? 0 : value;
	value++;
	document.getElementById('number').value = value;
}
