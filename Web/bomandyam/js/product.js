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

function openTab(evt, tabName) {
    var i, tabcontent, tab_btn;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    tab_btn = document.getElementsByClassName("tab_btn");
    for(i = 0; i < tab_btn.length; i++){
        tab_btn[i].className = tab_btn[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}