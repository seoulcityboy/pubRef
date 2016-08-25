$(function(){
    var start = $(function () {
        var $jschk= $(".jsChk"),
            $inputChk= $jschk.find("input");
        function chkClick(){
            $inputChk.off("change").on("change",function () {
                if($(this).prop("checked")===true){
                    $(this).prop("checked", true).closest($jschk).addClass('active');
                }else{
                    $(this).prop("checked", false).closest($jschk).removeClass('active');
                }
            });
        };
        function chkTotal(name){
            var name = name;
            var checkCategory = $('input[name='+ name +']:checkbox'),
                checkCategorychk = $('input[name='+ name + ']:checkbox:checked');


            if($(this).is(":checked")==false){
                $(checkCategory).each(function () {
                    $(this).prop('checked',false);
                    $(this).closest('.checkbox').removeClass('active');
                });
            } else if($(this).is(":checked")==true){
                $(checkCategory).each(function () {
                    $(this).prop('checked',true);
                    $(this).closest('.checkbox').addClass('active');
                });
            }
        }
        chkClick();
        $(".totalChk").on("click",function () {
            var chkName =$(this).attr("name");
            chkTotal(chkName);
            console.log(chkName);
        });

    });
});