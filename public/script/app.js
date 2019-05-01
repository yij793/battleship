
$(document).ready(function () {

    $('td').attr('foo', false);
    launchHit()
})
function launchHit() {
    for (i = 1; i <= 10; i++) {
        $('td').on('click', () => {
            $('td').attr('foo', true);
        })
    }
}