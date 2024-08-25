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