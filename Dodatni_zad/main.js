function minuteUSekunde(minutes) {
    return minutes * 60;
}

function povrsinaTrokuta(base, height) {
    return (base * height) / 2;
}

var ja = {
    ime: "Novak",
    prezime: "Sljuka",

    punoIme: function() {
        return this.ime + " " + this.prezime;
    }
};

console.log(ja.punoIme());