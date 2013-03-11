jQuery(document).ready(function($) {
    var addImageLinks = function(){
        $('div.photoRedesign').each(function(i,e){
            $('<a>', {
                text: 'FtS!',
                title: 'Fuck this shit!',
                href: '#',
                class: 'fts-button'}
             ).prependTo(e)
        });
    }
    $('.fts-button').on('click',function(e){
        $(this).parent().hide()
    });
    addImageLinks();
});
