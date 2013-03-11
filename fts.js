jQuery(document).ready(function($) {
    var addImageLinks = function(){
        $('div.photoRedesign').each(function(i,e){
            var image_link = $(e).children('a.uiPhotoThumb').attr('href');
            chrome.storage.sync.get(image_link,function(stored_obj){
                if(stored_obj[image_link] == 'blocked'){
                    $(e).hide();
                }
            });
            $('<a>', {
                text: 'FtS!',
                title: 'Fuck this shit!',
                href: '#',
                class: 'fts-button'}
             ).prependTo(e);
        });


    }
    addImageLinks();

    $(document).on('click','.fts-button',function(e){
        $(this).parent().hide();
        var shitty_link = $(this).siblings('a.uiPhotoThumb').attr('href');
        var storage_obj = {}
        storage_obj[shitty_link] = 'blocked'
        if(shitty_link != ''){
            chrome.storage.sync.set(storage_obj, function() {
                //Do Nothing
            });
        }
    })
});
