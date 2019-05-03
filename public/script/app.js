
$(document).ready(function () {
    $('td').attr('foo', false);
    launchHit()
})
function launchHit() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            $(`tr:nth-child(${i}) td:nth-child(${j})`).attr('location', a[i - 1][j - 1])////0->no ship 1->has ship
            $(`tr:nth-child(${i}) td:nth-child(${j})`).attr('XY', `${i}${j}`)
            $(`tr:nth-child(${i}) td:nth-child(${j})`).click(function () {
                if ($(this).attr('foo') === 'true') {

                } else {
                    $(this).attr('foo', true)
                    /////if ship at this location print hit else miss
                    if ($(this).attr('location') === '1') {
                        console.log('hit')
                    }
                }

            })

        }
    }

}

function placeShip(ship) {
    let n = Math.floor(Math.random())
    if (n === 1) {
        for (i = 0; i < ships[ship]; i++) {

        }
    } else {

    }
}
function spGenorator(db, size1, size2) {
    let n = db
    let x = 0;
    let y = 0;
    while (n[x][y] === 2) {
        x = Math.floor(Math.random() * size1)
        y = Math.floor(Math.random() * size2)
    }
    return `${x}${y}`
}


let a = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
const ships = {
    Carrier: 5,
    Battleship: 4,
    Cruiser: 3,
    Submarine: 3,
    Destroyer: 2
}
///find out if 5 ship have been place without overlap or missing
function condition(a) {
    let element = []
    let b = []
    a.forEach(item => {
        element = element.concat(item.filter(e => {
            return e === 2
        }))
    })
    return element.length

}
