Object {
	form: Object,
	setLoginInfo: Object,
	miniCart: Object,
	bigtap: Object,
	GLOBAL_CONFIG: Object…
}
GLOBAL_CONFIG: ObjectassetsSite: "//s01.mifile.cn"
cartSite: "//cart.mi.com"
damiaoGoodsId: Array[0] length: 0 __proto__: Array[0] damiaoSite: "https://tp.hd.mi.com/"
itemSite: "//item.mi.com"
listSite: "//list.mi.com"
logoutUrl: "http://order.mi.com/site/logout"
mySite: "//my.mi.com"
orderSite: "http://order.mi.com"
quickLoginUrl: "https://account.xiaomi.com/pass/static/login.html"
searchSite: "//search.mi.com"
staticSite: "//static.mi.com"
wwwSite: "//www.mi.com"
__proto__: ObjectaddShopCart: (e, t, n) {
	if (e && "function" == typeof t) {
		var r = MI.GLOBAL_CONFIG.cartSite + "/cart/add/" + e;
		$.ajax({
			url: r,
			dataType: "jsonp",
			jsonp: "jsonpcallback",
			success: function(r) {
				var i = function() {
					t(r, n), MI.updateMiniCart(), n && n.removeAttr("data-disabled")
				};
				1 === r.needSec ? MI.killRobot.init(e, i) : i()
			}
		})
	}
}
arguments: nullcaller: nulllength: 3 name: ""
prototype: MI.addShopCart__proto__: Empty() {} < function scope > bigtap: ObjectbigtapAddCart: (e) {
	var t = {
		obj: ".xmAddShopCart",
		before: "",
		callback: "",
		overCallback: "",
		beforeQueue: ""
	};
	$.extend(t, e || {}), $(document).on("click", t.obj, function() {
		var e = $(this).attr("data-gid"),
			n = $(this).attr("data-disabled") || "false",
			r = $(this).attr("data-package") || "false",
			i = $.cookie("userId"),
			o = $.cookie("xm_order_btauth");
		if ("false" === n) {
			if ($(this).attr("data-disabled", "true"), "function" == typeof t.before && t.before(), !e || "true" === r || "function" != typeof t.callback) return !0;
			MI.GLOBAL_CONFIG.damiaoGoodsId && $.inArray(e, MI.GLOBAL_CONFIG.damiaoGoodsId) >= 0 ? i && o ? MI.bigtap.init({
				gid: e,
				callback: t.callback,
				obj: $(this),
				overCallback: t.overCallback,
				beforeQueue: t.beforeQueue
			}) : window.location.href = i ? MI.GLOBAL_CONFIG.orderSite + "/site/login?redirectUrl=" + location.href : MI.GLOBAL_CONFIG.orderSite + "/site/login?redirectUrl=" + location.href : MI.addShopCart(e, t.callback, $(this))
		}
		return !1
	})
}
form: Objectinit: e() {
	function e() {
		i.each(function() {
			var e = $(this),
				t = e.closest(".form-section");
			"" !== e.val() && t.addClass("form-section-active"), e.off(".form").on({
				"focus.mi.form": function() {
					t.addClass("form-section-focus form-section-active")
				},
				"blur.mi.form": function() {
					t.removeClass($(this).val() ? "form-section-focus" : "form-section-focus form-section-active")
				},
				"valid.mi.form": function() {
					t.removeClass("form-section-error").addClass("form-section-valid").find(".msg-error").remove()
				},
				"error.mi.form": function(e, n) {
					t.addClass("form-section-error"), n && t.find(".msg-error").remove().end().append('<p class="msg msg-error">' + n + "</p>")
				}
			})
		})
	}

	function n() {
		o.each(function() {
			t && o.addClass("xm-ie-select")
		})
	}
	var r = $(".form-section"),
		i = r.find(".input-text"),
		o = r.find(".xm-select");
	i.length && e(), o.length && n()
}
arguments: nullcaller: nulllength: 0 name: "e"
prototype: e__proto__: Empty() {} < function scope > __proto__: ObjectkillRobot: ObjectminiCart: Objectinit: o() {
	return "undefined" != typeof miniCartDisable && miniCartDisable && "undefined" != typeof MI.GLOBAL_CONFIG.closeMiniCart && "1" === MI.GLOBAL_CONFIG.closeMiniCart ? !1 : (a.on({
		mouseenter: function() {
			clearTimeout(c), $(this).hasClass("topbar-cart-active") || ($(this).addClass("topbar-cart-active"), t(), n())
		},
		mouseleave: function() {
			c = setTimeout(function() {
				r()
			}, 200)
		}
	}), void s.on("click", ".J_delItem", function(e) {
		var t = $(this).attr("gid"),
			n = $(this).attr("data-isbigtap");
		return "true" !== n || confirm("您正在删除开放购买活动商品\n\n删除后您失去本次开放购买资格，无法下单购买此商品。\n确认删除此商品吗？") ? (e.preventDefault(), void i(t)) : !1
	}))
}
__proto__: Objectnamespace: () {
	var e, t, n, r = arguments,
		i = null;
	for (e = 0; e < r.length; e += 1)
		for (n = ("" + r[e]).split("."), i = MI, t = "MI" === n[0] ? 1 : 0; t < n.length; t += 1) i[n[t]] = i[n[t]] || {}, i = i[n[t]];
	return i
}
arguments: nullcaller: nulllength: 0 name: ""
prototype: MI.namespace__proto__: Empty() {} < function scope > payConfirm: Objectinit: () {
	$("#J_miniHeaderTitle").html("<h2>支付订单</h2>"), MI.form.init(), $("#J_showDetail").on("click", function() {
		$(".order-detail").slideToggle(500), $("#J_postInfo").toggleClass("post-info-hide")
	}), $(".J_paymentList").find(".J_bank").on("click", function() {
		$(".J_paymentList").find(".J_bank").removeClass("selected"), $(this).find("input").prop("checked", !0);
		var t = $(this).attr("data-isinstalment");
		t || ($(this).addClass("selected"), $(".J_tabInstallment").addClass("hide"), $("#J_installmentConfirm").addClass("hide"), $('input[name="installments"]').prop("checked", !1), $("#J_payForm").submit())
	}), $(".J_installmentConfirmBtn").on("click", function() {
		$(this).siblings("input").prop("checked", !0), $("#J_payForm").submit()
	}), $(".J_tabSwitch").tabSwitch({
		onShow: function(t) {
			t.removeClass("hide").slideDown()
		}
	}), $(".J_showMore").on("click", function() {
		$(this).siblings(".J_bank:gt(10)").toggleClass("hide"), $(this).find(".text").toggleClass("hide")
	}).trigger("click"), t(), $("#J_payForm").on("submit", i), $("#J_checkCodeBtn").on("click", function() {
		return n(), !1
	}), $("#J_alipay").on("click", function() {
		_confirmConfig.showAlipayCode = !0;
		var t = $("#J_use_cash_account").length ? $("#J_use_cash_account").val() : !1;
		if ("1" === t && !s) {
			var e = $("#J_useBalance").attr("data-disable");
			if ("true" !== e) return $("#J_payForm").submit(), !1
		}
		$("#J_modalAlipay").modal({
			backdrop: "static",
			show: !0
		}).on("hide.bs.modal", function() {
			_confirmConfig.showAlipayCode = !1
		}), $("#J_payForm").attr({
			action: "?pay_mode=1&id=" + _confirmConfig.order_id,
			target: "alipayQrcodeIframe"
		}), $("#alipay").prop("checked", !0), $("#J_payForm").submit(), $("#J_payForm").attr({
			action: "#",
			target: "_blank"
		}), $("#alipay").prop("checked", !1)
	}), $("#J_noticeClose").on("click", function() {
		$(this).parent().hide()
	}), $("#J_deliverDesc").on("mouseover", ".beta", function() {
		var t = $(this).offset(),
			e = $(this).width(),
			a = $("#J_deliverBeta"),
			n = a.outerWidth();
		a.removeClass("hide").css({
			top: t.top + 25,
			left: t.left - n / 2 + e / 2
		}), window.betaTimer && clearTimeout(window.betaTimer)
	}).on("mouseout", ".beta", function() {
		window.betaTimer = setTimeout(function() {
			$("#J_deliverBeta").addClass("hide")
		}, 1e3)
	}), $("#J_deliverBeta").on("mouseover", function() {
		window.betaTimer && clearTimeout(window.betaTimer)
	}).on("mouseout", function() {
		window.betaTimer = setTimeout(function() {
			$("#J_deliverBeta").addClass("hide")
		}, 500)
	})
}
__proto__: ObjectsetLoginInfo: Objectconfig: ObjectcreateScript: (e) {
	this.updateDom(e);
	var t = document.createElement("script");
	t.src = "https://account.xiaomi.com/pass/userInfoJsonP?userId=" + e + "&callback=setLoginInfo_getAccountInfo", t.type = "text/javascript", t.async = !0, document.getElementsByTagName("head")[0].appendChild(t)
}
data: ObjectdefautConfig: Objectinit: (e) {
	var t = this;
	this.config = $.extend({}, e, this.defautConfig), this.uuidCookie(), this.miid && 0 !== this.miid && this.miidLink ? (this.data.userName = this.miid ? $.cookie("XM_" + this.miid + "_UN") : "", this.data.goodsNum = $.cookie("xm_user_www_num"), this.data.goodsNum = null == this.data.goodsNum ? 0 : this.data.goodsNum, null == this.data.userName || "" === this.data.userName ? t.createScript(this.miid) : this.updateDom(this.miid)) : $.ajax({
		dataType: "jsonp",
		url: "//userid.xiaomi.com/userId",
		jsonpCallback: "userLogincallback",
		success: function(e) {
			if (0 === parseInt(e.userId) || null == e.userId) {
				var n = "//order.mi.com/site/login?redirectUrl=" + encodeURI(location.href);
				return MI.GLOBAL_CONFIG && MI.GLOBAL_CONFIG.orderSite && (n = MI.GLOBAL_CONFIG.orderSite + "/site/login?redirectUrl=" + encodeURI(location.href)), void $("#J_userInfo").find(".link[data-needlogin]").attr("href", n)
			}
			var r = {
				path: "/",
				domain: ".mi.com"
			};
			$.cookie("userId", e.userId, r), t.createScript(e.userId)
		}
	})
}
logoutUrl: "http://order.mi.com/site/logout"
miid: 172011891 miidLink: "gWhyUO8bfXuQyfu1WOYe6K8kSQOIx0YepBXr8daZCOQ="
orderUrl: "http://order.mi.com/user/order"
updateDom: (e) {
	var t, n, r = this.data.userName || e,
		i = MI.GLOBAL_CONFIG.staticSite || "http://static.mi.com",
		o = $("#J_userInfo"),
		a = '<ul class="user-menu"><li><a href="' + MI.GLOBAL_CONFIG.mySite + '/portal" target="_blank">个人中心</a></li><li><a href="' + MI.GLOBAL_CONFIG.orderSite + '/user/comment" target="_blank">评价晒单</a></li><li><a href="' + MI.GLOBAL_CONFIG.orderSite + '/user/favorite" target="_blank">我的喜欢</a></li><li><a href="http://account.xiaomi.com/" target="_blank">小米账户</a></li><li><a href="' + this.config.logoutUrl + '">退出登录</a></li></ul>',
		s = '<span class="user"><a class="user-name" href="' + MI.GLOBAL_CONFIG.mySite + '/portal" target="_blank"><span class="name">' + r + '</span><i class="iconfont">&#xe61c;</i></a>' + a + '</span><span class="sep">|</span><a class="link link-order" href="' + i + '/order/" target="_blank">我的订单</a>',
		u = null;
	o.html(s), t = o.find(".user"), n = o.find(".user-menu"), t.on({
		mouseenter: function() {
			u && clearTimeout(u), t.addClass("user-active"), n.slideDown("fast")
		},
		mouseleave: function() {
			u = setTimeout(function() {
				t.removeClass("user-active"), n.slideUp("fast")
			}, 200)
		}
	})
}
uuidCookie: () {
	var e = ("xmguest-" + r.v1()).toUpperCase(),
		t = $.cookie("xmuuid");
	if (!t) {
		var n = {
			path: "/",
			domain: ".mi.com",
			expires: 18250
		};
		$.cookie("xmuuid", e, n)
	}
}
__proto__: ObjectupdateMiniCart: () {
	var e = $(".J_cartNum"),
		t = $("#J_miniCartTrigger"),
		n = $.cookie("xm_user_www_num");
	return n && parseFloat(n) > 0 ? (e.text("（" + n + "）"), t.addClass("topbar-cart-filled").find(".cart-mini .iconfont").html("&#xe60d;"), n) : (e.text("（0）"), t.removeClass("topbar-cart-filled").find(".cart-mini .iconfont").html("&#xe60c;"), 0)
}
arguments: nullcaller: nulllength: 0 name: ""
prototype: MI.updateMiniCart__proto__: Empty() {} < function scope > __proto__: Object