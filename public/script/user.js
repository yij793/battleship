$(document).ready(function () {
    setUserBoar()
    userPlaceShip(ships.Carrier,dir)
    setShip(ships.Carrier,dir)
    
})


let dir=true;

function setUserBoar(){
    for (let i = 1; i <= 10; i++) {
         for (let j = 1; j <= 10; j++) {
            $(`#userBoard tr:nth-child(${i}) td:nth-child(${j})`).attr('location', 0)}
}}


function setShip(ship,d){
    $(document).keypress(e=>{
        if(e.key==='l'){ 
         d=!d
        }
    })
    $('#userBoard td').click(e=>{
        if(checkCollap(ship,d,e)){
            let a= Number(e.target.attributes.x.value)
            let b=Number(e.target.attributes.y.value)
            console.log(a,b)
            if(d){
                console.log('this working')
                for(i=0;i<ship;i++){
                    $(`#userBoard tr:nth-child(${a+i}) td:nth-child(${b})`).attr('location',1)
                }
            }else{
                for(i=0;i<ship;i++){
                    $(`#userBoard tr:nth-child(${a}) td:nth-child(${b+i})`).attr('location',1)
                }
            }
        }
    })
}


function userPlaceShip(ship,d){
    $('#userBoard td').hover((e)=>{
        let a= Number(e.target.attributes.x.value)
        let b=Number(e.target.attributes.y.value)
        let placeColor;
        if(checkCollap(ship,d,e)){
            placeColor= 'green'
         }else{
            placeColor ='red'
         }
        $(document).keypress((evt)=>{
            if(evt.key==='l'){
             d=!d 
             switch(d){
                 case true:
                 for(i=0;i<ship;i++){
                    $(`#userBoard tr:nth-child(${a}) td:nth-child(${b+i})`).css('color','black')
                    $(`#userBoard tr:nth-child(${a+i}) td:nth-child(${b})`).css('color',placeColor)
                }
                 break;
                 case false:
                 for(i=0;i<ship;i++){
                    $(`#userBoard tr:nth-child(${a+i}) td:nth-child(${b})`).css('color','black')
                    $(`#userBoard tr:nth-child(${a}) td:nth-child(${b+i})`).css('color',placeColor)
                }
                 break;
             }
            }
    
        })
        if(checkCollap(ship,d,e)){
            if(d){
            for(i=0;i<ship;i++){
                $(`#userBoard tr:nth-child(${a+i}) td:nth-child(${b})`).css('color','green')
            }
        }else{
            for(i=0;i<ship;i++){
                $(`#userBoard tr:nth-child(${a}) td:nth-child(${b+i})`).css('color','green')
            }
        }}else{
            if(d){
                for(i=0;i<ship;i++){
                    $(`#userBoard tr:nth-child(${a+i}) td:nth-child(${b})`).css('color','red')
                }
            }else{
                for(i=0;i<ship;i++){
                    $(`#userBoard tr:nth-child(${a}) td:nth-child(${b+i})`).css('color','red')
                }
            }
        }
        
        
    },(e)=>{
        let a= Number(e.target.attributes.x.value)
        let b=Number(e.target.attributes.y.value)
        $(document).keypress((evt)=>{
            if(evt.key==='l'){ 
             d=!d 
             switch(d){
                 case true:
                 for(i=0;i<ship;i++){
                    $(`#userBoard tr:nth-child(${a}) td:nth-child(${b+i})`).css('color','black')
                }
                 break;
                 case false:
                 for(i=0;i<ship;i++){
                    $(`#userBoard tr:nth-child(${a+i}) td:nth-child(${b})`).css('color','black')
                }
                 break;
             }
            }
    
        })
        if(d){
            for(i=0;i<ship;i++){
                $(`#userBoard tr:nth-child(${a+i}) td:nth-child(${b})`).css('color','black')
            }
        }else{
            for(i=0;i<ship;i++){
                $(`#userBoard tr:nth-child(${a}) td:nth-child(${b+i})`).css('color','black')
            }
        }
    })
}

function checkCollap(ship,d,e){
    let a= Number(e.target.attributes.x.value)
    let b=Number(e.target.attributes.y.value)
    if(d){
        for(i=0;i<ship;i++){
            let n=Number($(`#userBoard tr:nth-child(${a+i}) td:nth-child(${b})`).attr('location'))
            if(n!==0 || n=== undefined){
              return false;
            }
        }
        return true
    }else{
        for(i=0;i<ship;i++){
            let n=Number($(`#userBoard tr:nth-child(${a}) td:nth-child(${b+i})`).attr('location'))
            if(n!==0 || n=== undefined){
              return false;
            }
        }
        return true
    }

}

// const userBoard={
//     dir:true,
//     ships,
//    [setShip('enabled')]:true,
//     [userPlaceShip('enabled')]:true,
//     [checkCollap('enabled')]:true,
//     troggle(){
//         dir=!dir
//     },
//     generator(){

//     }
// }

//put function together
