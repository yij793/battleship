
$(document).ready(function () {

    $('td').attr('foo', false);
    launchHit()
})
function launchHit() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            $(`tr:nth-child(${i}) td:nth-child(${j})`).attr('location', a[i - 1][j - 1])
            $(`tr:nth-child(${i}) td:nth-child(${j})`).attr('XY', `${i}${j}`)
            $(`tr:nth-child(${i}) td:nth-child(${j})`).click(function () {
                $(this).attr('foo', true)
            })
        }

    }

}
function hit() {

}


let a = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]