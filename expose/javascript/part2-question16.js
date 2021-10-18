
function question16() {
    let statistics = {
        redCars: 21,
        blueCars: 45,
        greenCars: 12,
        raceCars: 5,
        blackCars: 40,
        rareCars: 2
    }

    for (let prop in statistics) {
        console.log(`${prop}: ${statistics[prop]}`);
    }
}

question16();