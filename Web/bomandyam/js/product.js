function fnCalCount(type, ths){
    var $input = $(ths).parents("div").find("input[name='pop_out']");
    var tCount = Number($input.val());
    var tEqCount = 20

    if(type=='p'){
        if(tCount < tEqCount) $input.val(Number(tCount)+1);

    }else{
        if(tCount >0) $input.val(Number(tCount)-1);
    }
}