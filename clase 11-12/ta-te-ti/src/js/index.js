
//TA TE TI
var player = true
$('.square').click(function (e) { 
    e.preventDefault(); 

    if (player && e.target.className === 'square') {
        $('#' +  e.target.id).addClass('circle');
        player = false        
    }else if(e.target.className === 'square'){
        $('#' +  e.target.id).addClass('cross');
        player = true  
    }
    
});