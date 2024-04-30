setTimeout("$('.body').css('transform','translateY(0)');", 1e3), setTimeout("$('.main-desc').addClass('b-show')", 1500), setTimeout("$('body').addClass('add-scroll')", 3e3), setTimeout("$('html').addClass('add-scroll')", 3e3), $(".glow-button").on("click", (function () {
  $(".comment-item").addClass("comment-item-show"), $(".glow-button").addClass("hide"), $(".shine-button").addClass("show")
}));
const OFFER = "«Fortunella»";
let now = new Date, mm = now.getMonth() + 1, day = now.getDate(), year = now.getFullYear(),
  date = day + "." + mm + "." + year;
const massange = [
  {m: "Salve, mi chiamo Mireia Belmonte. Sono medico dietologo ed endocrinologo. Benvenuti sul mio sito."},
  {m: "Qui offro una diagnosi online gratuita e raccomandazioni personalizzate che hanno aiutato migliaia dei miei pazienti a liberarsi del peso in eccesso."},
  {m: "Per ricevere i miei consigli sulla perdita di peso, rispondete a qualche domanda."},
  {m: '<p class="quest">Quanti chili vuoi perdere?</p>'},
  {m: '<p class="quest">Quali parti del tuo corpo necessitano di correzione?</p>'},
  {m: '<p class="quest">Quanto è attivo il tuo stile di vita?</p>'},
  {m: '<p class="quest">Mangi in modo sano?</p>'},
  {m: '<p class="quest">Quanti anni hai?</p>'},
  {m: '<p class="quest">Qual è il tuo peso attuale?</p>'},
  {m: '<p class="quest">Quanto sei alto?</p>'},
  {m: "Grazie. Certamente, hai un peso in eccesso, ma sei perfettamente in grado di raggiungere l'obiettivo desiderato di perdita di peso. La causa principale del tuo sovrappeso è un metabolismo rallentato. Questo è particolarmente evidente per il grasso viscerale, che si accumula intorno ai fianchi e all'addome."},
  {m: "Raccomandazione personale per te: Spinaci, carciofi, cannella, fortunella."},
  {m: "Spinaci: Questo probiotico naturale non solo supporta la salute intestinale, ma aiuta anche a controllare l'appetito. Gli spinaci aumentano la sensazione di sazietà, aiutando a ridurre l'assunzione calorica e accelerando il processo di perdita di peso."},
  {m: "Carciofi: Sono noti per le loro proprietà antiossidanti, la riduzione del colesterolo totale e \"cattivo\" e la capacità di accelerare il metabolismo. L'estratto di carciofo aiuta ad aumentare il consumo di energia e la combustione dei grassi, rendendolo un componente importante per una perdita di peso efficace."},
  {m: "Cannella: La cannella non solo conferisce un sapore esotico, ma ha anche potenti proprietà antinfiammatorie. Aiuta a ridurre l'infiammazione nel corpo, che spesso ostacola la perdita di peso."},
  {m: OFFER + ": La fortunella è da tempo utilizzata nei paesi asiatici per migliorare la digestione e accelerare il metabolismo. Aiuta a migliorare la digestione e accelera i processi metabolici, contribuendo a una più efficace combustione di calorie."},
  {m: "Questi componenti possono essere assunti singolarmente, ma è molto più comodo ed efficace utilizzarli come parte del complesso Fortunella. Sono presenti sotto forma di estratti intensi con la massima concentrazione di sostanze utili."},
  {m: "Per ottenere una visibile perdita di peso, è sufficiente assumere Fortunella due volte al giorno: al mattino prima dei pasti e alla sera prima di coricarsi. In soli un mese potrete raggiungere il vostro obiettivo."},
  {m: 'Ecco come appare Fortunella: <br><br> <img src="images/prod.png" class="product-img" style="width: 100%; max-width: 140px;"> '},
  {m: "Le gocce contengono estratti altamente concentrati di brucia grassi naturali, che avviano il processo di combustione dei grassi e lo mantengono."},
  {m: "Pertanto, Fortunella dissolve e rimuove in modo molto efficace il grasso viscerale, che riveste le pareti degli organi interni e ne ostacola il corretto funzionamento, sbloccando il metabolismo e purificando l'organismo dalle tossine e dalle scorie."},
  {m: "Di conseguenza, il vostro organismo si libera autonomamente del grasso in eccesso, utilizzandolo come fonte di energia. Inizierete a mangiare meno e non avrete sensazione di fame, il che amplifica l'effetto dimagrante."},
  {m: 'Ecco i risultati dei miei clienti che hanno perso peso con successo seguendo i miei consigli: <br> <br><img src="images/comm-photo3-135-arb.jpg"> <br> <img src="images/comm2-92a-arb.jpg"> <br> <img src="images/comm6-abb-arb.jpg"> '},
  {m: "La durata ottimale del corso, considerando la vostra età, l'indice di massa corporea attuale e lo stile di vita, sarà in media di circa 60 giorni."},
  {m: "In questo periodo avverrà una profonda pulizia dell'organismo e il metabolismo si normalizzerà."},
  {m: "Ho anche delle ottime notizie per voi. Avete ricevuto una diagnosi online e siete diventati il mio 2000 cliente."},
  {m: "Potete ottenere Fortunella a un prezzo promozionale indicando il vostro nome e numero di telefono nel modulo di ordine qui sotto. Il numero di pacchetti promozionali è limitato, quindi vi consiglio di affrettarvi con l'ordine."}
];
var mass_id = 0, length_mass = 0, lengt_num_mas = 0, text = "", speedtext = 35, process = !0;

function app() {
  var e = new Date, s = ("0" + e.getMinutes()).slice(-2), t = ("0" + e.getHours()).slice(-2) + ":" + s;
  if ($(".chat").height() + 100 > $(".content").height()) {
    $("#scroll_id").removeClass("hide");
    var n = $(".inp").val();
    $(".inp").val(++n)
  }
  const a = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="text" id="mass' + mass_id + '"></p><p class="message-time" id="time">' + t + "</p></div></div></div>";
  $(".chat-content-list").append(a), "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}

function myMassange(e) {
  var s = new Date, t = ("0" + s.getMinutes()).slice(-2);
  let n = '<div class="chat-content-item user item-active"><div class="chat-content-desc"><div class="chat-content-desc-item user"><p class="text" class="users_mass">' + e + '</p><p class="message-time" id="time"><span>' + ("0" + s.getHours()).slice(-2) + ":" + t + '</span><span class="icon_ack" data-testid="msg-dblcheck" aria-label=" Прочитано " data-icon="msg-dblcheck" ><svg viewBox="0 0 16 15" width="16" height="15" ><path fill="currentColor" d="m15.01 3.316-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span></p></div></div></div>';
  $(".chat-content-list").append(n), $(".content").animate({scrollTop: $(".chat-content-list").height()}, 700), $("#scroll_id").addClass("hide")
}

function question1() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question1M">Fino a 5 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1W">Da 5 a 10 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1P">Da 10 a 15 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question1T">Più di 15 kg</span></div></div>')
}

function choise1() {
  $(".question1M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Fino a 5 kg"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question1W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Da 5 a 10 kg"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question1P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Da 10 a 15 kg"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question1T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Più di 15 kg"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question2() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question2M">Vita e addome</span></div><div class="chat-content-buttons-gender-block"><span class="question2W">Fianchi e glutei</span></div><div class="chat-content-buttons-gender-block"><span class="question2P">Braccia o gambe</span></div><div class="chat-content-buttons-gender-block"><span class="question2T">Voglio dimagrire ovunque</span></div></div>')
}

function choise2() {
  $(".question2M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Vita e addome"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question2W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Fianchi e glutei"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question2P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Braccia o gambe"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question2T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Voglio dimagrire ovunque"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question3() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question3M">Mi alleno 3-5 volte a settimana</span></div><div class="chat-content-buttons-gender-block"><span class="question3W">Mi alleno 1-3 volte a settimana</span></div><div class="chat-content-buttons-gender-block"><span class="question3P">Non faccio sport, ma cerco di muovermi</span></div><div class="chat-content-buttons-gender-block"><span class="question3T">Stile di vita sedentario</span></div></div>')
}

function choise3() {
  $(".question3M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Mi alleno 3-5 volte a settimana"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question3W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Mi alleno 1-3 volte a settimana"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question3P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Non faccio sport, ma cerco di muovermi"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question3T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Stile di vita sedentario"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question4() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question4M">Sì, conto le calorie, niente dolci e pasticceria</span></div><div class="chat-content-buttons-gender-block"><span class="question4W">Circa 50/50</span></div><div class="chat-content-buttons-gender-block"><span class="question4P">Amo il fast food e i dolci</span></div><div class="chat-content-buttons-gender-block"><span class="question4T">Mangio molta cattiva alimentazione</span></div></div>')
}

function choise4() {
  $(".question4M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Sì, conto le calorie, niente dolci e pasticceria"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question4W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Circa 50/50"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question4P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Amo il fast food e i dolci"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question4T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Mangio molta cattiva alimentazione"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question5() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question5M">Meno di 20 anni</span></div><div class="chat-content-buttons-gender-block"><span class="question5W">20-30 anni</span></div><div class="chat-content-buttons-gender-block"><span class="question5P">31-40 anni</span></div><div class="chat-content-buttons-gender-block"><span class="question5T">41-50 anni</span></div><div class="chat-content-buttons-gender-block"><span class="question5G">Più di 50 anni</span></div></div>')
}

function choise5() {
  $(".question5M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Meno di 20 anni"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question5W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("20-30 anni"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question5P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("31-40 anni"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question5T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("41-50 anni"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question5G").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Più di 50 anni"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question6() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question6M">Fino a 60 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6W">Da 60 a 70 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6P">Da 71 a 80 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6T">Da 81 a 90 kg</span></div><div class="chat-content-buttons-gender-block"><span class="question6O">Oltre 90 kg</span></div></div>')
}

function choise6() {
  $(".question6M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Fino a 60 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question6W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Da 60 a 70 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question6P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Da 71 a 80 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question6T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Da 81 a 90 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question6O").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Oltre 90 kg"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

function question7() {
  $(".chat-content-list").append('<div class="chat-content-buttons-gender"><div class="chat-content-buttons-gender-block"><span class="question7M">Inferiore a 150 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7W">150-160 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7P">161-170 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7T">171-180 cm</span></div><div class="chat-content-buttons-gender-block"><span class="question7G">Oltre 180 cm</span></div></div>')
}

function choise7() {
  $(".question7M").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Inferiore a 150 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question7W").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("150-160 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question7P").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("161-170 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question7T").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("171-180 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  })), $(".question7G").click((() => {
    document.querySelector(".chat-content-buttons-gender").style.display = "none", myMassange("Oltre 180 cm"), $(".chat-content-buttons-gender").css("display", "none"), setTimeout((() => {
      process = !0
    }), 500)
  }))
}

setTimeout((() => {
  var e = new Date, s = ("0" + e.getMinutes()).slice(-2);
  const t = '<div class="chat-content-item manager "><div class="chat-content-desc"><div class="chat-content-desc-item manager"><p class="text" id="mass' + mass_id + '"></p><p class="message-time" id="time">' + ("0" + e.getHours()).slice(-2) + ":" + s + "</p></div></div></div>";
  $(".chat-content-list").append(t), $("#scroll_id").click((function (e) {
    $(this).removeClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700)
  }));
  const n = setInterval((function () {
    1 == process && (lengt_num_mas != massange.length ? (text += massange[lengt_num_mas].m[length_mass], length_mass++, $("#mass" + lengt_num_mas).html(text), 3 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question1(), process = !1, choise1(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 4 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question2(), process = !1, choise2(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 5 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question3(), process = !1, choise3(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 6 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question4(), process = !1, choise4(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 7 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question5(), process = !1, choise5(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 8 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question6(), process = !1, choise6(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), 9 === lengt_num_mas && length_mass === massange[lengt_num_mas].m.length - 1 && (question7(), process = !1, choise7(), $("#scroll_id").addClass("hide-q"), $(".content").animate({scrollTop: $(".chat").height()}, 700), $("#scroll_id").removeClass("hide-q")), length_mass == massange[lengt_num_mas].m.length && (lengt_num_mas++, mass_id++, length_mass = 0, text = "", app())) : (clearInterval(n), $("#mass" + lengt_num_mas).parent().parent().css("display", "none"), $(".iframe-form").addClass("show"), $(".btn-top").addClass("show"), start_timer()))
  }), speedtext)
}), 10), $(".content").scroll((function () {
  "0" == document.getElementById("res").value ? $("#scroll_id").addClass("aba") : $("#scroll_id").removeClass("aba")
}));
var $marker = $("#down-box");
$(".content").scroll((function () {
  $(".content").scrollTop() + $(".content").height() >= $(".chat").height() + 100 ? (document.getElementById("res").value = "0", $("#scroll_id").addClass("hide")) : $("#scroll_id").removeClass("hide")
}));
let intr, time = 600;

function start_timer() {
  intr = setInterval(tick, 1e3)
}

function tick() {
  time -= 1;
  var e = Math.floor(time / 60), s = time - 60 * e;
  0 == e && 0 == s && clearInterval(intr), s = s >= 10 ? s : "0" + s, $("#min").html("0" + e), $("#sec").html(s)
}