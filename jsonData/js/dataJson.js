$(function () {
    $.ajax({
        type : "GET",
        url : "../js/menu.json",
        dataType : "json",
        success : function(json) {
           var outlaw = json.menu01;

           console.log(json.usrName);
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
})
