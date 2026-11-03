var objArr = [];
var delayTime = 6000;
var objCount = 0;

var initPage = function() {
    //for testing
    countObj();
    initObj();
    setTimeout(runEffect, 2000);
};

var countObj = function() {
    $('.map').find('.people').each(function() {
        var obj = $(this);
        objArr.push(obj);
    });
    //console.log(objArr.length);
};

var initObj = function() {
    for (var i = 0; i < objArr.length; i++) {
        var obj = objArr[i];

        obj.find('.body').css({ opacity: 0, marginTop: -100 });
        obj.find('.body').delay(100 * i).animate({
            opacity: 1,
            marginTop: 0
        }, 900, 'easeInOutElastic', function() {
            // Animation complete.
        });
    }

};
var check_session=null;
var runEffect = function() {
    check_session=localStorage.getItem("check_icon")
    if(check_session!="1"){
        console.log(check_session)
        // bỏ qua ghim đang ẩn hoặc thuộc tab khác
        var skipped = 0;
        while ((objArr[objCount].css('display') == 'none' || objArr[objCount].hasClass('other-tab')) && skipped < objArr.length) {
            objCount = (objCount + 1) % objArr.length;
            skipped++;
        }
        var obj = objArr[objCount];
        for(let i=0;i<objArr.length;i++){
            if(i!=objCount){
                objArr[i].removeClass('active');
                objArr[i].find('.effect').hide();
                objArr[i].find('.typewriter').removeClass('active');
                objArr[i].find('.pop').removeClass('active');
            }
        }
        obj.addClass('active');
        obj.find('.effect').show();  
        obj.find('.typewriter').addClass('active');
        if (!obj.find('.pop').hasClass('active')) {
            obj.find('.pop').addClass('active');
        }
        setTimeout(function() {
            check_session=localStorage.getItem("check_icon")
            if(check_session!="1"){
                obj.removeClass('active');
    
                //hide current obj
                obj.find('.effect').hide();
        
                obj.find('.typewriter').removeClass('active');
                obj.find('.pop').removeClass('active');
        
                //count item
                objCount++;
                if (objCount >= objArr.length)
                    objCount = 0;
            }
            //run next obj effect
            runEffect();
    
        }, delayTime)
    }
    else{
        setTimeout(function() {
            runEffect();
        }, delayTime/5);
    }

    
};