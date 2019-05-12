
$(document).ready(function () {
    
    $('#start').click(function(){
        $('td').attr('foo', false);
        launchHit()
    })
})
///start game
$('#start').click(function(){
    $('#aiBoard td').attr('foo', false);
    launchHit()
})


const ships = {
    Carrier: 5,
    Battleship: 4,
    Cruiser: 3,
    Submarine: 3,
    Destroyer: 2
}
let a=[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
boarder(a)
function launchHit() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            $(`tr:nth-child(${i}) td:nth-child(${j})`).attr('location', a[i - 1][j - 1])////0->no ship 1->has ship
            $(`tr:nth-child(${i}) td:nth-child(${j})`).attr('X', i)
            $(`tr:nth-child(${i}) td:nth-child(${j})`).attr('Y', j)
            $(`#aiBoard tr:nth-child(${i}) td:nth-child(${j})`).click(function () {
                if ($(this).attr('foo') === 'true') {
                    console.log('you already hit this place')
                } else {
                    $(this).attr('foo', true)
                    /////if ship at this location print hit else miss
                    if ($(this).attr('location') === '1') {
                        $(this).text('O')
                    }else{
                        $(this).text('X')
                    }
                }

            })

        }
    }

}



///find out if 5 ship have been place without overlap or missing
function placeShip(ships,arr){
    const startPoint=[Math.floor(Math.random() * 10),Math.floor(Math.random() * 10)]
    const n=Math.floor(Math.random() * 2)
    if(n===0){
        let testArr=false;
        let checkLength=startPoint[0]+ships
        if(checkLength>9)
        {testArr=true}else{for(let i=0;i<ships;i++){
            if(arr[startPoint[0]+i][startPoint[1]]===1){
                
                testArr=true
                break;
            }
        }}  
       if(testArr){
        placeShip(ships,arr)
       }else{
           for(let i=0;i<ships;i++){
            arr[startPoint[0]+i][startPoint[1]]=1
           }
           return a=arr 
           
       }
    }else{
        let testArr2=false
        let checkLength2=startPoint[1]+ships
        if(checkLength2>9){testArr2=true}else{
            for(let i=0;i<ships;i++){
                if(arr[startPoint[0]][startPoint[1]+i]===1){
                    testArr2=true
                    break;
                }
            }
        }
       if(testArr2){
        placeShip(ships,arr)
       }else{
           for(let i=0;i<ships;i++){
            arr[startPoint[0]][startPoint[1]+i]=1
           }
           return a=arr
       }
    }
    
}
////////creat board
function boarder(a){
    placeShip(ships.Carrier,a)
placeShip(ships.Battleship,a)
placeShip(ships.Cruiser,a)
placeShip(ships.Submarine,a)
placeShip(ships.Destroyer,a)
return a
}
////building ship
$('td').hover(function(){
    
})
