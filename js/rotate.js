$("#avatar").rotate({ 
   bind: 
     { 
        mouseover : function() { 
            $(this).rotate({duration:2000, animateTo:360});
        },
        mouseout : function() { 
            $(this).rotate({animateTo:0});
        }
     }   
});