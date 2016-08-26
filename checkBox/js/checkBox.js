$(function(){
    var start = $(function () {
        var $jschk= $(".jsChk"),
        $inputChk= $jschk.find("input");

        $inputChk.each(function () {
            if($(this).is(":checked")==true){
                if($(this).is(":disabled")==true){
                    $(this).closest($jschk).addClass('active');
                    $(this).closest($jschk).addClass('disabled');
                } else{
                    $(this).closest($jschk).addClass('active');
                }
            }else if($(this).is(":checked")==false){
                if($(this).is(":disabled")==true){
                    $(this).closest($jschk).addClass('disabled');
                }
            }
        });
        $inputChk.off("change").on("change",function () {
            if($(this).parents().hasClass("chkTotal") == true){
                var $chkName = $(".chkTotal").find(".totalChk").attr("name"),
                    $chkNameChked = $jschk.find("input[name="+ $chkName +"]:checked"),
                    $chkName = $jschk.find("input[name="+ $chkName +"]"),
                    $chkLength = $chkName.length,
                    $chkLengthVal = $chkLength -1;
                if($(this).hasClass("totalChk")==true){
                    if($(this).is(":checked")==false){
                        $chkName.each(function () {
                            $(this).prop('checked',false);
                            $(this).closest($jschk).removeClass('active');
                        });
                    } else if($(this).is(":checked")==true){
                        $chkName.each(function () {
                            $(this).prop('checked',true);
                            $(this).closest($jschk).addClass('active');
                        });
                    }
                }else{
                    if($(this).is(":not(:checked)")==true){
                        $(".totalChk").prop('checked',false);
                        $(".totalChk").closest($jschk).removeClass('active');
                        $(this).closest($jschk).removeClass('active');
                    }else{
                        if($chkLengthVal == $chkNameChked.length ){
                            $(".totalChk").prop('checked',true);
                            $(".totalChk").closest($jschk).addClass('active');
                            $(this).closest($jschk).addClass('active');
                        }else{
                            if($(this).prop("checked")===true){
                                $(this).prop("checked", true).closest($jschk).addClass('active');
                            }else{
                                $(this).prop("checked", false).closest($jschk).removeClass('active');
                            }
                        }
                    }
                }
            }else{
                if($(this).prop("checked")===true){
                    $(this).prop("checked", true).closest($jschk).addClass('active');
                }else{
                    $(this).prop("checked", false).closest($jschk).removeClass('active');
                }
            }
        });
    });
});