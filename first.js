var j = "Test";
function weitertest() {
    var x = "WertVonX"
    console.log(x);
}
weitertest();
console.log(j);

var pkw = {
    reifen: 4,
    farbe: "Schwarz",
    motorAn: function () {
        //
        //
        return "Motor ist an";
    },
    motorAus: function () {
        //
        //
        return "Motor ist aus";
    }
}
console.log(pkw.reifen)

var o = "10";
if (o === 10) {
    console.log("o ist 10 als Zahl");
} else if (o === "10") {
    console.log("o ist 10 als Text");
}
else {
    console.log("Nicht richtig")
}

var m = "Ball";

switch (m) {

    case "Kugel":
        console.log("m ist eine Kugel");
        break;
    case "Scheibe":
        console.log("m ist eine scheibe")
        break;
    case "Ball":
        console.log("m ist ein Ball")
        break;
    default:
        console.log("m ist ...");
}

var t = ["Eier", "Mehl", "Milch"];
t[8] = "Käse";
console.log(t);

var e = ["Eier", "Mehl", "Milch"];
for (var i = 0; i < e.length; i++) {
    console.log(e[i]);
}
console.log("Fertig");

var w = ["Eier", "Mehl", "Milch"];

var i = 0;
while (i < w.length) {
    console.log(w[i]);
    i++;
}
console.log("Fertig");

var r = ["Eier", "Mehl", "Milch"];

var i = 0;
do {
    console.log(r[i]);
    i++;
} while (i < r.length)
console.log("Fertig");

var h = ["Eier", "Mehl", "Milch"];

var i = 0;

h.forEach(function (item) {
    console.log(item);
});
console.log("Fertig");
$(document).ready(function() {
    console.log("ATch");
});

/*
document.getElementById("title").textContent="Neue Überschrift"; 
*/
console.log($("#title").text());

$("#tut-li").on('click',function() {
    var text = $(this).text();
    var output = $("#tut-output");
        output.text(text);
});

// Elelemt löschen
$("#zettel").on('click', '.del-item', function() {
    $(this).closest("li").remove();
});

// Element hinzufügen
$("#tut-btn").on('click', function() {
    var text = $("#tut-txt").val();
    if(text.length === 0) {
        alert("Bitte etwas eintragen!");
    }else{
       $("#zettel").append("<li class='tut-li'>"+ text +" <input class='del-item' type='submit' value='x'> </li>");
    }
});

// section ein &ausblende
$("#navlist li a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("section").removeClass ("section-active");
    $(section).addClass ("section-active");
    $("#navlist li a").removeClass ("tab-active");
    $(this).addClass ("tab-active");
});