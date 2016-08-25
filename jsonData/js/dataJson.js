$(function () {
    $(".tabName li").click(function(){
        var typeName= $(this).index();
        dataPush(typeName);
    });
    function  dataPush(tabName) {
        var dtName= tabName+1,
            meunNum = "menu0",
            totalVal = meunNum + dtName;
        $.ajax({
            type : "GET",
            url : "../js/menu.json",
            dataType : "json",
            success : function(json) {
                var outlaw = json,
                    outlaw = outlaw[totalVal];
                $(".dataView .objLst").each(function () {
                    var idx = $(this).index();
                    $(this).find(".name").text(outlaw[idx].usrName);
                    $(this).find(".job").text(outlaw[idx].usrJob);
                    $(this).find(".nickName").text(outlaw[idx].usrNickName);
                    $(this).find(".email").text(outlaw[idx].usrEmail);
                });
            },
            error : function (e) {
                alert("에러")
            }
        });
    }
    dataPush(0);
})
