function minuteUSekunde(minutes) {
    return minutes * 60;
}

function povrsinaTrokuta(osnovica, visina) {
    return (osnovica * visina) / 2;
}

var matematika = {
    minuteUSekunde: function(minutes) {
        return minutes * 60;
    },

    povrsinaTrokuta: function(osnovica, visina) {
        return (osnovica * visina) / 2;
    }
};


console.log(povrsinaTrokuta(10, 5)); 

console.log(matematika.minuteUSekunde(3));
console.log(matematika.povrsinaTrokuta(8, 4)); 