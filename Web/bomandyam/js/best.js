(function (){
    $('ul.tab_title li').click(function (){
        let tab_id = $(this).attr('data-tab');

        $('div.tab_title a').removeClass('current');
        $('.tab_content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    })
})