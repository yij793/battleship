
$(document).ready(function () {
    $('#userBoard td').hover((e)=>{
        let a= Number(e.target.attributes.x.value)
        let b=Number(e.target.attributes.y.value)
        if(true){
            for(i=0;i<5;i++){
                $(`#userBoard tr:nth-child(${a+i}) td:nth-child(${b})`).css('color','red')
            }
        }
        
    },(e)=>{
        let a= Number(e.target.attributes.x.value)
        let b=Number(e.target.attributes.y.value)
        if(true){
            for(i=0;i<5;i++){
                $(`#userBoard tr:nth-child(${a+i}) td:nth-child(${b})`).css('color','black')
            }
        }
    })
})
$('#userBoard td').click((e)=>{

})

$('#userBoard td').hover((e)=>{
    let a= e.target.attributes.x.value
    let b=e.target.attributes.y.value
    if(true){
        for(i=0;i<5;i++){
            $(`tr:nth-child(${a+i}) td:nth-child(${b})`).css('color','red')
        }
    }
    
})

