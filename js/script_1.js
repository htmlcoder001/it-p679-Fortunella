var resultWrapper=document.querySelector(".spin-result-wrapper"),wheel=document.querySelector(".wheel-img");function spin(){wheel.classList.contains("rotated")||(wheel.classList.add("super-rotation"),setTimeout((function(){resultWrapper.style.display="block"}),8e3),setTimeout((function(){$(".spin-wrapper").slideUp(),$(".order_block").slideDown(),start_timer()}),1e4),wheel.classList.add("rotated"))}$((function(){$("form").is("#monsterleads_form")&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?$("#traffic_type").val("1"):$("#traffic_type").val("2"))})),$((function(){$("a[href^='#']").click((function(){var e=$(this).attr("href");return $("html, body").animate({scrollTop:$(e).offset().top+"px"}),!1})),$('input[value="Узнать подробнее"], input[value="Принять участие в розыгрыше"]').click((function(){$(".eeee, .fadepopup").css("display","none")}))}));var closePopup=document.querySelector(".close-popup");$(".close-popup, .pop-up-button").click((function(e){e.preventDefault(),$(".spin-result-wrapper").fadeOut();var t=$("#roulette").offset().top;$("body,html").animate({scrollTop:t},800)}));var intr,time=600;function start_timer(){intr=setInterval(tick,1e3)}function tick(){time-=1;var e=Math.floor(time/60),t=time-60*e;0==e&&0==t&&clearInterval(intr),t=t>=10?t:"0"+t,$("#min").html("0"+e),$("#sec").html(t)}function rus_date(){var e=new Date,t="январе феврале марте апреле мае июне июле августе сентябре октябре ноябре декабре".split(" ")[e.getMonth()];document.write(t)}function rus_date2(){var e=new Date,t="январь февраль март апрель май июнь июль август сентябрь октябрь ноябрь декабрь".split(" ")[e.getMonth()];document.write(t)}function include(e){let t=document.createElement("script");t.src=e,document.getElementsByTagName("head")[0].appendChild(t)}$(document).ready((function(){$(".eeee").click((function(){$(".eeee").addClass("actsss"),$(".fadepopup").addClass("actsss"),$(".fadepopup").removeClass("xxxc"),$(".eeee").removeClass("xxxc"),$(".hikj").removeClass("actss"),$("body").removeClass("modal-show")}))}));